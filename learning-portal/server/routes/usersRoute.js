const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// User Registration
router.post('/register', async (req, res) => {
    try {
      // Check if user already exists
      const userExists = await User.findOne({ email: req.body.email });
      if (userExists) {
        return res
          .status(200)
          .send({ message: 'User already exists', success: false });
      }
  
      // Hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
  
      // Creating new user
      const newUser = new User(req.body);
      await newUser.save();
      res.send({
        message: 'User created successfully',
        success: true,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        data: error,
        success: false,
      });
    }
  });

  module.exports = router;