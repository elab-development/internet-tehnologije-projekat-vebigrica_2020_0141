const router = require('express').Router();
const Exam = require('../models/examModel');
const authMiddleware = require('../middlewares/authMiddleware');

// Get Exams
router.post('/get-all-exams', authMiddleware, async (req, res) => {
  try {
    const exams = await Exam.find({});
    res.send({
      message: 'Exams fetched successfully',
      data: exams,
      success: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      data: err,
      success: false,
    });
  }
});

// Get Exam
router.post('/get-exam-by-id', authMiddleware, async (req, res) => {
  try {
    const exam = await Exam.findById(req.body.examId).populate('questions');
    res.send({
      message: 'Exam fetched successfully',
      data: exam,
      success: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      data: err,
      success: false,
    });
  }
});

// Add Exam
router.post('/add', authMiddleware, async (req, res) => {
    try {
      // Checking if exam already exists
      const examExists = await Exam.findOne({ name: req.body.name });
      if (examExists) {
        return res.status(200).send({
          message: 'Exam already exists',
          success: false,
        });
      }
  
      // Creating new Exam
      req.body.questions = [];
      const newExam = new Exam(req.body);
      await newExam.save();
      res.send({
        message: 'Exam added successfully',
        success: true,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
        data: err,
        success: false,
      });
    }
  });
  // Edit Exam
router.post('/edit-exam-by-id', authMiddleware, async (req, res) => {
  try {
    const response = await Exam.findByIdAndUpdate(req.body.examId, req.body);
    if (!response) {
      return res.status(200).send({
        message: 'Exam does not exist',
        success: false,
      });
    }
    res.send({
      message: 'Exam updated successfully',
      success: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
      data: err,
      success: false,
    });
  }
});

  module.exports = router;