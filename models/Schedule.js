//Schedule model

const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    });

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;

