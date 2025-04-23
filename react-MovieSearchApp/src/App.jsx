import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';


export default function App() {
  return (
    <div className="min-h-screen bg-animated">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}