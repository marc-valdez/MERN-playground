import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/workouts');
        const json = await response.json();
        if (response.ok) {
          setWorkouts(json);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="workout-list">
        { workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Home;
