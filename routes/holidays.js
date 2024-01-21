// Holidays routes

const express = require('express');
const router = express.Router();
const holidays = require('../controllers/holidays');

// Create a new holiday
router.post('/', holidays.createHoliday);

// Get all holidays
router.get('/', holidays.getHolidays);

// Get a specific holiday by ID
router.get('/:id', holidays.getHolidayById);

// Update a holiday
router.put('/:id', holidays.updateHoliday);

// Delete a holiday
router.delete('/:id', holidays.deleteHoliday);

// Add more routes as needed for holiday-related functionalities

module.exports = router;
