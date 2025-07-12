// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Lawyer = require('./models/Lawyer.model');

mongoose.connect(process.env.MONGO_URL).then(async () => {
  console.log('Connected!');

  const lawyer = new Lawyer({
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    password: '123456'
  });

  await lawyer.save();
  console.log('✅ Sample lawyer added');
  process.exit();
}).catch(console.error);

require('dotenv').config();
const mongoose = require('mongoose');
const Lawyer = require('./models/Lawyer.model');

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('Connected to DB');

    const lawyer = new Lawyer({
      fullName: 'Rajeev Chava',
      email: 'rajeev@example.com',
      password: '123456',
      profession: 'Criminal Lawyer',
      location: 'Guntur',
      contact: '9876543210',
      appointmentDurations: [
        { type: 'consultation', duration: 30 },
        { type: 'will', duration: 60 }
      ]
    });

    await lawyer.save();
    console.log('✅ Sample lawyer added');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));

