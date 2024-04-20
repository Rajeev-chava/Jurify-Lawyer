const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentDurationSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const lawyerSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    appointments:{ 
        type: [Schema.Types.ObjectId],
        ref: 'Appointment',
        default: []

      
    },
    appointmentTypes: {
        type: [String],
        default: ["Will appointment", "Consultation"]
    },
    dayStartTime: {
        type: String,
        default: "09:00" // 9 am
    },
    dayEndTime: {
        type: String,
        default: "20:00" // 8 pm
    },
    appointmentDurations: {
        type: [appointmentDurationSchema],
        default: [
            { type: "will", duration: 60 }, // 60 minutes
            { type: "consultation", duration: 30 }    ,  // 30 minutes
            { type:'court appearance',duration:120}
        ]
    }
});

const Lawyer = mongoose.model('Lawyer', lawyerSchema);

module.exports = Lawyer;
