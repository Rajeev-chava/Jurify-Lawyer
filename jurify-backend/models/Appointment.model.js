const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    lawyer: {
        type: Schema.Types.ObjectId,
        ref: 'Lawyer',
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
    
    },
    dayofapp:{
        type:Date,
        required:true
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
