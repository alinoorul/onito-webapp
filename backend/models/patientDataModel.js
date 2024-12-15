const mongoose = require('mongoose')

const patientDataSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a user ID'],
        ref: 'User',
    },
    link: {
        type: String,
        required: [true, 'Please add data']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('PatientData', patientDataSchema)