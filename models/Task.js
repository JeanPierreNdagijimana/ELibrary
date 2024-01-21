//Task model

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;