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

    const workout = await Workout.findById({_id : id});
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

//delete a workout DELETE request
const deleteWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout.'});
    }
    const workout = await Workout.findOneAndDelete({_id : id});
    if(!workout){
        return res.status(404).json({error: "no such workout"});
    }
    res.status(200).json(workout);
}

//update a workout PATCH request
const updateWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout.'});
    }
    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    });
    if(!workout){
        return res.status(404).json({error: "no such workout"});
    }
    res.status(200).json(workout);
}

module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
};