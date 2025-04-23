
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div className="border bg-white rounded  shadow p-4 flex flex-col justify-between">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445'}
        alt={movie.Title}
        className="w-full h-64 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">{movie.Title}</h2>
      <p className="text-sm text-gray-600 font-semibold">{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 text-sm font-semibold mt-2 ">
        View Details
      </Link>
    </div>
  );
}