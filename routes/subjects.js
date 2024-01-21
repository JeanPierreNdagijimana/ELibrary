//Subjects route

const express = require('express');
const router = express.Router();
const subjects = require('../controllers/subjects');

// Create a new subject
router.post('/', subjects.createSubject);

// Get all subjects
router.get('/', subjects.getSubjects);

// Get a specific subject by ID
router.get('/:id', subjects.getSubjectById);

// Update a subject
router.put('/:id', subjects.updateSubject);

// Delete a subject
router.delete('/:id', subjects.deleteSubject);

// Add more routes as needed for subject-related functionalities

module.exports = router;
