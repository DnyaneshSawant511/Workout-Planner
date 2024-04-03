const express = require('express');
const {createWorkout, getWorkout, getWorkouts} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

router.get('/:id', getWorkouts);

router.post('/', createWorkout);

router.delete('/:id', (req, res) => {
    res.json({msg : 'DELETE a new workout.'});
});

router.patch('/:id', (req, res) => {
    res.json({msg : 'UPDATE a workout.'});
});

module.exports = router;