// Updated index.js with improvements and best practices
require('dotenv').config();
const express = require('express');
const url = require('url');
const mongoose = require('mongoose');
const cors = require('cors');
const { parseISO, addMinutes } = require('date-fns');
const Lawyer = require('./models/Lawyer.model');
const Client = require('./models/Client.model');
const Appointment = require('./models/Appointment.model');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Lawyer signup
app.post('/api/lawyer/signup', async (req, res) => {
  try {
    const lawyer = await Lawyer.create(req.body);
    res.status(201).json({ message: 'success', lawyer });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lawyer login
app.post('/api/lawyers/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const lawyer = await Lawyer.findOne({ email });
    if (!lawyer || password !== lawyer.password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'success', id: lawyer._id, name: lawyer.fullName });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Client signup
app.post('/api/clients/register', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body;
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Client with this email already exists' });
    }
    const newClient = new Client({ fullName, email, phoneNumber, password, appointments: [] });
    await newClient.save();
    res.status(201).json({ message: 'success', client: newClient });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Client login
app.post('/api/clients/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const client = await Client.findOne({ email });
    if (!client || password !== client.password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'success', name: client.fullName, id: client._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add appointment without client
app.post('/appointments', async (req, res) => {
  try {
    const { type, lawyer, startTime, dayofapp } = req.body;
    if (!type || !lawyer || !startTime || !dayofapp) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const lawyerInfo = await Lawyer.findById(lawyer);
    if (!lawyerInfo) return res.status(404).json({ message: 'Lawyer not found' });
    const durationObj = lawyerInfo.appointmentDurations.find(d => d.type === type);
    if (!durationObj) return res.status(400).json({ message: 'Invalid appointment type' });

    const [hours, minutes] = startTime.split(':').map(Number);
    const startDate = new Date(dayofapp);
    startDate.setHours(hours, minutes);
    const endTime = new Date(startDate);
    endTime.setMinutes(endTime.getMinutes() + durationObj.duration);

    const appointment = new Appointment({ type, lawyer, startTime: startDate, endTime, dayofapp });
    await appointment.save();

    lawyerInfo.appointments.push(appointment._id);
    await lawyerInfo.save();

    res.status(201).json({ message: 'Appointment added successfully', appointment });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add appointment with client
app.post('/appointments/with-client', async (req, res) => {
  try {
    const { type, lawyer, startTime, client, day } = req.body;
    if (!type || !lawyer || !startTime || !client || !day) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const lawyerInfo = await Lawyer.findById(lawyer);
    const clientInfo = await Client.findById(client);
    if (!lawyerInfo || !clientInfo) {
      return res.status(404).json({ message: 'Lawyer or Client not found' });
    }
    const durationObj = lawyerInfo.appointmentDurations.find(d => d.type === type);
    if (!durationObj) return res.status(400).json({ message: 'Invalid appointment type' });

    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + durationObj.duration);

    const appointment = new Appointment({ type, lawyer, startTime, endTime, client, day });
    await appointment.save();

    lawyerInfo.appointments.push(appointment._id);
    await lawyerInfo.save();

    clientInfo.appointments.push(appointment._id);
    await clientInfo.save();

    res.status(201).json({ message: 'Appointment added successfully', appointment });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// List all lawyers
app.get('/api/alllawyers', async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.status(200).json(lawyers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get lawyer's appointments
app.get('/api/lawyerappointments', async (req, res) => {
  const { lawyerId } = req.query;
  try {
    const appointments = await Appointment.find({ lawyer: lawyerId });
    res.json({ appointments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove appointment
app.get('/api/removeapp', async (req, res) => {
  try {
    const { appid } = url.parse(req.url, true).query;
    if (!appid) return res.status(400).json({ message: 'Appointment ID is required' });

    const appointment = await Appointment.findById(appid);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    await Lawyer.findByIdAndUpdate(appointment.lawyer, { $pull: { appointments: appid } });
    await Client.findByIdAndUpdate(appointment.client, { $pull: { appointments: appid } });
    await Appointment.findByIdAndDelete(appid);

    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Accept appointment
app.post('/api/appointments/accept', async (req, res) => {
  try {
    const { id } = req.body;
    const appointment = await Appointment.findById(id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    appointment.status = 'accepted';
    await appointment.save();

    res.status(200).json({ message: 'Appointment accepted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error while accepting appointment' });
  }
});

// Get client details
app.get('/api/clientdetails', async (req, res) => {
  const { clientId } = req.query;
  try {
    const client = await Client.findById(clientId);
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.send(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('✅ Connected to MongoDB Atlas...'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));
  mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('✅ Connected to MongoDB Atlas...');

    // Temporary test to see if lawyers exist
    const lawyers = await Lawyer.find();
    console.log('🔍 Lawyers in DB:', lawyers);
  })
  .catch(err => console.error('❌ MongoDB connection failed:', err));


// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
