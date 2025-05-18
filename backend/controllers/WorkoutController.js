const Workout = require('../models/WorkoutModel');
const mongoose = require('mongoose');

// GET all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('No such workout');
    }

    const workout = await Workout.findById(id);
    if (!workout) {
      throw new Error('No such workout');
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// CREATE a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a workout

// UPDATE a workout

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
};
