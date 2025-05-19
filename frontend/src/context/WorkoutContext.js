import { createContext, useReducer, useContext } from 'react';

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
  case 'SET_WORKOUTS':
    return {
      workouts: action.payload,
    };
  case 'CREATE_WORKOUT':
    return {
      ...state,
      workouts: [action.payload, ...state.workouts],
    };
  case 'DELETE_WORKOUT':
    return {
      ...state,
      workouts: state.workouts.filter(workout => workout._id !== action.payload._id),
    };
  default:
    return state;
  }
};

export const WorkoutsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [],
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsProvider');
  }
  return context;
};
