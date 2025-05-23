require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.warn(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.warn(`Connected to db and listening on port ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
