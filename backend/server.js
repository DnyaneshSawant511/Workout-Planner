const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {

    app.listen(process.env.PORT , () => {
        console.log(`listening on port ${process.env.PORT}`);
    });

}).catch((error) => {
    console.log(error);
});
