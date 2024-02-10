const router = require('express').Router();
const Exam = require('../models/examModel');
const authMiddleware = require('../middlewares/authMiddleware');

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

  module.exports = router;