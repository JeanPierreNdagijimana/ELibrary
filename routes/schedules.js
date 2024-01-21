// Schedule route

const express = require('express');
const router = express.Router();
const schedules = require('../controllers/schedules');

// Create a new schedule
router.post('/', schedules.createSchedule);

// Get all schedules
router.get('/', schedules.getSchedules);

// Get a specific schedule by ID
router.get('/:id', schedules.getScheduleById);

// Update a schedule
router.put('/:id', schedules.updateSchedule);

// Delete a schedule
router.delete('/:id', schedules.deleteSchedule);

// Add more routes as needed for schedule-related functionalities

module.exports = router;
