const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please enter your email or password" });
  }

  try {
    const savedUser = await User.findOne({ email: email });

    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }

    bcrypt.compare(password, savedUser.password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
        const { _id, name, email } = savedUser;
        res.json({ token, user: { _id, name, email } });
      } else {
        return res.status(422).json({ error: "Invalid email or password" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRoleToAdmin = async (req, res) => {
  const id = req.body.id;
  const updates = {
    $set: {
      role: "ADMIN",
    },
  };
  try {
    const user = await User.findByIdAndUpdate(id, updates, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while updating user." });
  }
};

exports.updateRoleToUser = async (req, res) => {
  const id = req.body.id;
  const updates = {
    $set: {
      role: "USER",
    },
  };
  try {
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while updating user." });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
  }

  try {
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);

    res.json({ token, user: { _id: savedUser._id, name, email } });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Error creating user", details: error.message });
  }
};
