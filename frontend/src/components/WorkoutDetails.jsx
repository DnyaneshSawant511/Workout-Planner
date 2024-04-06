import axios from "axios";

const WorkoutDetails = ({workout}) => {
    
    const handleDelete = async () => {

        axios.delete(`http://localhost:4000/api/workouts/${workout._id}`)
        .then(() => {
            alert('Deleted Successfully!');
        })
        .catch((error) => {
            alert('an error has occurred!');
            console.log(error);
        });

    }
    
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(kg) : </strong>{workout.load}</p>
            <p><strong>Reps : </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <form onSubmit={handleDelete} className="del-btn">
                <button>Delete</button>
            </form>
        </div>
    );
}

export default WorkoutDetails;