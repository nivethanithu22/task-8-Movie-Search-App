
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/omdbService';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieDetails(id);
        if (data.Response === 'True') {
          setMovie(data);
          setError(null);
        } else {
          setError(data.Error);
         
        }
      } catch (err) {
        setError('Failed to fetch movie details.');
      }
    }
    fetchMovie();
  }, [id]);

  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!movie) return <div className="p-4">Loading...</div>;

  return (
    <div className='bg-gray-800 '>
    <div className="p-4 max-w-4xl  mx-auto ">
      <div className=' flex flex-col justify-center items-center'>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445'}
        alt={movie.Title}
        className="w-64 mb-4  "
      />
      
      <div className='bg-green-500  md:max-w-[70%] p-6'>
      <h1 className="text-2xl font-bold text-center mb-2">{movie.Title}</h1>
      <p className='font-semibold'><strong>Year:</strong> {movie.Year}</p>
      <p className='font-semibold'><strong>Genre:</strong> {movie.Genre}</p>
      <p className='font-semibold'><strong>Plot:</strong> {movie.Plot}</p>
      <p className='font-semibold'><strong>Director:</strong> {movie.Director}</p>
      <p className='font-semibold'><strong>Actors:</strong> {movie.Actors}</p>
      <p className='font-semibold'><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      </div>
      </div>
      </div>
    </div>
  );
}