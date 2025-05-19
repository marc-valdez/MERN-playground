import { useState } from 'react';
import { useWorkoutsContext } from '../context/WorkoutContext';

const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const { dispatch } = useWorkoutsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
      // console.log('New workout added:', json);
    }
  };

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label htmlFor="title">Exercise Title:</label>
        <input
          type="text"
          id="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          // required
        />

        <label htmlFor="load">Load (kg):</label>
        <input
          type="number"
          id="load"
          onChange={e => setLoad(e.target.value)}
          value={load}
          // required
        />

        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          id="reps"
          onChange={e => setReps(e.target.value)}
          value={reps}
          // required
        />
        <button type="submit">Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
