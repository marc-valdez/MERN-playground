import { useEffect } from 'react';
import { useWorkoutsContext } from '../context/WorkoutContext';

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/workouts');
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: 'SET_WORKOUTS', payload: json });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workout-list">
        { workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
