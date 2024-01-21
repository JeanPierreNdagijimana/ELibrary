//Schedules controller

const Schedule = require('../models/Schedule');

// Create a new schedule
const createSchedule = async (req, res) => {
  try {
    const newSchedule = await Schedule.create(req.body);
    res.status(201).json(newSchedule);
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all schedules
const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    console.error('Error getting schedules:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific schedule by ID
const getScheduleById = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(schedule);
  } catch (error) {
    console.error('Error getting schedule by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a schedule
const updateSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSchedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(updatedSchedule);
  } catch (error) {
    console.error('Error updating schedule:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a schedule
const deleteSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSchedule = await Schedule.findByIdAndDelete(id);
    if (!deletedSchedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.json(deletedSchedule);
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createSchedule,
  getSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};
