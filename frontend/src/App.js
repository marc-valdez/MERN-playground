import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/workouts" element={<h1>Workouts Page</h1>} />
            <Route path="/workouts/:id" element={<h1>Workout Details Page</h1>} />
            <Route path="/create" element={<h1>Create Workout Page</h1>} />
            <Route path="/update/:id" element={<h1>Update Workout Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
