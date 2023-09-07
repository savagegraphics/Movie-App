import React, { useState, useEffect, useRef } from 'react';
import MovieSearchResults from './MovieSearchResults'; // Import your results component here

const MovieSearchForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle the API request
  const searchMovies = async () => {
    try {
      const apiKey = '99cd3565'; // Replace with your OMDB API key
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
      const data = await response.json();
      setSearchResults(data.Search || []);
      
    } catch (error) {
      console.error('Error fetching data from OMDB API:', error);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchInputRef.current &&
      !(searchResultsRef.current as any).contains(event.target as Node) &&
      searchResultsRef.current &&
      !(searchResultsRef.current as any).contains(event.target as Node)
    ) {
      // Click occurred outside both search input and results, so close results
      setSearchResults([]);
    }
  };
  


  useEffect(() => {
    if (searchTerm !== '') {
      searchMovies();
    }

  document.addEventListener('mousedown', handleClickOutside);

  // Clean up the event listener when the component unmounts
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [searchTerm]);


  return (
    <form>
      <div className="flex">
        <div className="relative">
        </div>
        <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-300 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search.."
          required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
      {searchResults.length > 0 && (
        <MovieSearchResults results={searchResults} />
      )}
    </form>
  );
};

export default MovieSearchForm;
