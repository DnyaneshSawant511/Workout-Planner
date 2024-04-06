import { useEffect, useState } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {

    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/api/workouts/")
        .then((res) => {
            setWorkouts(res.data.workouts);
            console.log(workouts);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts.map((workout) => (
                    <WorkoutDetails key="workout._id" workout={workout} />
                ))}
            </div>
        </div>
    );
}

export default Home;