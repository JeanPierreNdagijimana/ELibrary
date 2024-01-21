// Task routes

const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasks');

// Create a new task
router.post('/', tasks.createTask);

// Get all tasks
router.get('/', tasks.getTasks);

// Get a specific task by ID
router.get('/:id', tasks.getTaskById);

// Update a task
router.put('/:id', tasks.updateTask);

// Delete a task
router.delete('/:id', tasks.deleteTask);

// Add more routes as needed for task-related functionalities

module.exports = router;
