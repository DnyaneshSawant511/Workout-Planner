import { useState } from "react";
import axios from "axios";

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = async (e) => {
        //e.preventDefault();
        const workout = {title, load, reps};
        axios.post('http://localhost:4000/api/workouts/', workout)
        .then(() => {
            setTitle('');
            setLoad('');
            setReps('');
        })
        .catch((error) => {
            alert('an error has occured!');
            console.log(error);
        });
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Name : </label>
            <input type="text"
            onChange={(e) => setTitle(e.target.value) } 
            value={title}
            />
            <label>Load(kgs) : </label>
            <input type="number"
            onChange={(e) => setLoad(e.target.value) } 
            value={load}
            />
            <label>Reps : </label>
            <input type="number"
            onChange={(e) => setReps(e.target.value) } 
            value={reps}
            />
            <button>Add Workout</button>
        </form>
    );
}

export default WorkoutForm;