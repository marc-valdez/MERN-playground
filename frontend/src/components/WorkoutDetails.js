import { useWorkoutsContext } from '../context/WorkoutContext';

const WorkoutDetails = ({ workout }) => {
  const { title, load, reps, createdAt } = workout;

  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
      // console.log('Workout deleted:', json);
    }
  };

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>Load (kg): <strong>{load}</strong></p>
      <p>Reps: <strong>{reps}</strong></p>
      <p>{createdAt}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WorkoutDetails;
