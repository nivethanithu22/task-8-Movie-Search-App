import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
    <p className='text-center text-3xl font-bold mb-4 text-white '>Movie Search App</p>
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
       
      <input
        type="text"
        className="border p-2 rounded w-full focus:outline-none focus:ring-2 ring-blue-400 ring:none"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
    </form>
    </>
  );
}