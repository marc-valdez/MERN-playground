const WorkoutDetails = ({ workout }) => {
  const { title, load, reps, createdAt } = workout;

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>Load (kg): <strong>{load}</strong></p>
      <p>Reps: <strong>{reps}</strong></p>
      <p>{createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
