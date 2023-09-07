import React, { useEffect, useState } from 'react';

type Movie = {
  Poster: string;
  Title: string;
  Description: string;
  Date: string;
};

const RightSidebar = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '99cd3565'; // Replace with your OMDB API key
        const response = await fetch(`https://www.omdbapi.com/?s=movie&type=movie&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Search) {
          const moviesData: Movie[] = data.Search.map((movie: any) => ({
            Poster: movie.Poster,
            Title: movie.Title,
            Description: movie.Plot,
            Date: movie.Year,
          }));
          setMovies(moviesData);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="hidden ml-8 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
      <div className="flex flex-col divide-y divide-gray-700">
        {movies.map((movie, index) => (
          <div key={index} className="flex px-1 py-4">
            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={movie.Poster} />
            <div className="flex flex-col flex-grow">
              <a rel="noopener noreferrer" href="#" className="text-white font-serif hover:underline">
                {movie.Title}
              </a>
              <p className="mt-auto text-xs text-white">
                {movie.Description}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="block text-white dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                >
                  {movie.Date}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
