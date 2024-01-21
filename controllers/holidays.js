//holidays controllers

const Holiday = require('../models/Holiday');

// Create a new holiday
const createHoliday = async (req, res) => {
  try {
    const newHoliday = await Holiday.create(req.body);
    res.status(201).json(newHoliday);
  } catch (error) {
    console.error('Error creating holiday:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all holidays
const getHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.json(holidays);
  } catch (error) {
    console.error('Error getting holidays:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific holiday by ID
const getHolidayById = async (req, res) => {
  const { id } = req.params;
  try {
    const holiday = await Holiday.findById(id);
    if (!holiday) {
      return res.status(404).json({ error: 'Holiday not found' });
    }
    res.json(holiday);
  } catch (error) {
    console.error('Error getting holiday by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a holiday
const updateHoliday = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedHoliday = await Holiday.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedHoliday) {
      return res.status(404).json({ error: 'Holiday not found' });
    }
    res.json(updatedHoliday);
  } catch (error) {
    console.error('Error updating holiday:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a holiday
const deleteHoliday = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHoliday = await Holiday.findByIdAndDelete(id);
    if (!deletedHoliday) {
      return res.status(404).json({ error: 'Holiday not found' });
    }
    res.json(deletedHoliday);
  } catch (error) {
    console.error('Error deleting holiday:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createHoliday,
  getHolidays,
  getHolidayById,
  updateHoliday,
  deleteHoliday,
};
