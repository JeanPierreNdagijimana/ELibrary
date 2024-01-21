//Subjects controllers

const Subject = require('../models/Subject');

// Create a new subject
const createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.status(201).json(newSubject);
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all subjects
const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    console.error('Error getting subjects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific subject by ID
const getSubjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await Subject.findById(id);
    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    res.json(subject);
  } catch (error) {
    console.error('Error getting subject by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a subject
const updateSubject = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSubject = await Subject.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSubject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    res.json(updatedSubject);
  } catch (error) {
    console.error('Error updating subject:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a subject
const deleteSubject = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSubject = await Subject.findByIdAndDelete(id);
    if (!deletedSubject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    res.json(deletedSubject);
  } catch (error) {
    console.error('Error deleting subject:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
};
