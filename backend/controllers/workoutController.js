const Workout = require('../models/WorkoutModel');
const mongoose = require('mongoose');

//get all workouts GET request
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt : -1});
    res.status(200).json({workouts});
}

//get single workout GET request
const getWorkout = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout.'});
    }

    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error: "no such workout"});
    }
    res.status(200).json(workout);
}

//create new workout POST request
const createWorkout = async(req, res) => {
    const { title, load, reps } = req.body;
    try {

        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);

    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout
};