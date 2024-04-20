
const express = require('express');
const url=require('url');
const mongoose = require('mongoose');
const Lawyer = require('./models/Lawyer.model');
const Client = require('./models/Client.model');
const Appointment = require('./models/Appointment.model');
var bodyParser = require('body-parser')
const { parseISO, addMinutes } = require('date-fns');
const cors = require('cors');
const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
// api for lawyer sign up
app.post('/api/lawyer/signup', async(req, res) => {
    try{ console.log(req.body);
        const lawyer= await Lawyer.create(req.body);
        res.status(201).json({message: "success", lawyer});
    }catch(err){
        res.status(400).json({message: err.message});
    }
    
});
// api for lawyer login
app.post('/api/lawyers/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        // Check if lawyer with provided email exists
        const lawyer = await Lawyer.findOne({ email });
        if (!lawyer) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password
        if (password !== lawyer.password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Return success message or token for authentication
        res.status(200).json({ message: 'success',id:lawyer._id ,name:lawyer.fullName});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// client sign up
app.post('/api/clients/register', async (req, res) => {
    try {
        const { fullName, email, phoneNumber,password } = req.body;

        // Check if client with provided email already exists
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            return res.status(400).json({ message: 'Client with this email already exists' });
        }

        // Create a new client
        const newClient = new Client({
            fullName,
            email,
            phoneNumber,
            password,
            appointments: []
        });

        // Save the new client to the database
        await newClient.save();

        // Return success message
        res.status(201).json({ message: 'success', client: newClient });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// client login
app.post('/api/clients/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if lawyer with provided email exists
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password
        if (password !== client.password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Return success message or token for authentication
        res.status(200).json({ message: 'success',name:client.fullName,id:client._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /appointments
// Add a new appointment without client id
app.post('/appointments', async (req, res) => {
    try {
        console.log(req.body);
        const { type, lawyer, startTime, dayofapp } = req.body;

        // Check if the required fields are provided
        if (!type || !lawyer || !startTime || !dayofapp) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Find the lawyer to get the appointment duration
        const lawyerInfo = await Lawyer.findById(lawyer);
        if (!lawyerInfo) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }

        // Find the appointment duration based on the type
        const appointmentDuration = lawyerInfo.appointmentDurations;
        var duration=0;
        appointmentDuration.forEach(ele => {
            console.log(ele.type)
            if (ele.type === type) {

              duration = ele.duration;
            }
          });
          

        console.log(duration);

        if (!appointmentDuration || appointmentDuration.length === 0) {
            // console.log('Type:', type);
            // console.log('Appointment Durations:', lawyerInfo.appointmentDurations);
            return res.status(400).json({ message: 'Invalid appointment type' });
        }

        // Parse the startTime string to a valid Date object
        const startTimeParts = startTime.split(':');
        const startHour = parseInt(startTimeParts[0], 10);
        const startMinute = parseInt(startTimeParts[1], 10);
        const startDate = new Date(dayofapp);
        startDate.setHours(startHour, startMinute);

        // Calculate the end time based on the duration and start time
        const endTime = new Date(startDate);
        endTime.setMinutes(endTime.getMinutes() + duration);

        // Create a new appointment
        const appointment = new Appointment({
            type,
            lawyer,
            startTime: startDate,
            endTime,
            dayofapp
        });

        // Save the appointment to the database
        await appointment.save();

        // Update the lawyer's appointments
        lawyerInfo.appointments.push(appointment._id);
        await lawyerInfo.save();

        res.status(201).json({ message: 'Appointment added successfully', appointment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// POST /appointments/with-client
// Add a new appointment with client id
app.post('/appointments/with-client', async (req, res) => {
    try {
        const { type, lawyer, startTime, client, day } = req.body;

        // Check if the required fields are provided
        if (!type || !lawyer || !startTime || !client || !day) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Find the lawyer to get the appointment duration
        const lawyerInfo = await Lawyer.findById(lawyer);
        if (!lawyerInfo) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }

        // Find the appointment duration based on the type
        const appointmentDuration = lawyerInfo.appointmentDurations.find(
            (duration) => duration.type === type
        );

        if (!appointmentDuration) {
            return res.status(400).json({ message: 'Invalid appointment type' });
        }

        // Calculate the end time based on the duration and start time
        const endTime = new Date(startTime);
        endTime.setMinutes(endTime.getMinutes() + appointmentDuration.duration);

        // Create a new appointment
        const appointment = new Appointment({
            type,
            lawyer,
            startTime,
            endTime,
            client,
            day
        });

        // Save the appointment to the database
        await appointment.save();

        // Update the lawyer's appointments
        lawyerInfo.appointments.push(appointment._id);
        await lawyerInfo.save();

        // Update the client's appointments
        const clientInfo = await Client.findById(client);
        if (!clientInfo) {
            return res.status(404).json({ message: 'Client not found' });
        }
        clientInfo.appointments.push(appointment._id);
        await clientInfo.save();

        res.status(201).json({ message: 'Appointment added successfully', appointment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// api for add appointment 
app.post('/api/appointments/add', async (req, res) => {
    try {
        const { type, startTime, lawyerId, clientId } = req.body;
        const parsedStartTime = parseISO(startTime);
        // Find the lawyer to get appointment duration and schedule
        const lawyer = await Lawyer.findById(lawyerId);
        if (!lawyer) {
            return res.status(404).json({ message: 'Lawyer not found' });
        }

        // Find the appointment duration for the given type
        const appointmentType = lawyer.appointmentDurations.find(
            (duration) => duration.type === type
        );
        if (!appointmentType) {
            return res.status(400).json({ message: 'Invalid appointment type' });
        }

        // Calculate end time by adding duration to start time
        const endTime = addMinutes(parsedStartTime, appointmentType.duration);

        // Create the appointment
        const appointment = new Appointment({
            type,
            lawyer: lawyerId,
            startTime: parsedStartTime,
            endTime,
            client: clientId
        });

        // Save the appointment to the database
        await appointment.save();

        // Update the lawyer's appointments array
        lawyer.appointments.push(appointment._id);
        await lawyer.save();

        const formattedStartTime = format(parsedStartTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        const formattedEndTime = format(endTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

        // Return success message
        res.status(201).json({ message: 'Appointment added successfully', appointment });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// list of lawyers
app.get('/api/alllawyers', async (req, res) => {
    try {
        const lawyers = await Lawyer.find();
        res.status(200).json(lawyers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// api for lawyer details
app.get('/api/lawyerdetails', async (req, res) => {
    const id= req.body.lawyerId;
    const lawyer= await Lawyer.findById(id);
    if (!lawyer) {
        return res.status(404).json({ message: 'Lawyer not found' });
    }
    res.send(lawyer.appointments);
});
// api for fetching all the appointments of lawyer by his id
app.get('/api/lawyerappointments',async(req,res)=>{
    const id= req.body.lawyerId;
    
    const appoint= await Appointment.find({Lawyer:id})
    console.log(appoint)
    res.json({ appointments: appoint});
    });

// api to delete a appointment 
app.get('/api/removeapp',async (req,res)=>{
    try {
        var urldata=url.parse(req.url,true);
        console.log(urldata.query.appid);
        // console.log(req.body.appid);
        const appid  = urldata.query.appid;
        console.log(appid);
        if (!appid) {
          return res.status(400).json({ message: 'Appointment ID is required' });
        }
    
        const appointment = await Appointment.findById(appid);
        if (!appointment) {
          return res.status(404).json({ message: 'Appointment not found' });
        }
    
        await Lawyer.findByIdAndUpdate(appointment.lawyer, { $pull: { appointments: appid } });
        await Client.findByIdAndUpdate(appointment.client, { $pull: { appointments: appid } });
        await Appointment.findByIdAndDelete(appid);
    
        res.json({ message: 'Appointment deleted successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    });
// api for client  details
app.get('/api/clientdetails', async (req, res) => {
    const id= req.body.clientId;
    const client= await Client.findById(id);
    if (!client) {
        return res.status(404).json({ message: 'client not found' });
    }
    res.send(client);
});

mongoose.connect('mongodb://127.0.0.1:27017/jurify', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{ console.log('Connected to MongoDB...')})
.catch(err => console.error('Could not connect to MongoDB...'))

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
