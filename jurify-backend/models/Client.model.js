const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
