import React, { useEffect, useState } from 'react';

type Movie = {
  Poster: string;
  Title: string;
  Description: string;
  Date: string;
};

const RightSidebar = () => {
  const favoriteMovies = ["Movie Title 1", "Movie Title 2"]; // Replace with your favorite movie titles
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const apiKey = '99cd3565'; // Replace with your OMDB API key

        const favoriteMoviesData: Movie[] = [];

        for (const title of favoriteMovies) {
          const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
          const data = await response.json();

          if (data.Poster && data.Title && data.Plot && data.Year) {
            const movieData: Movie = {
              Poster: data.Poster,
              Title: data.Title,
              Description: data.Plot,
              Date: data.Year,
            };
            favoriteMoviesData.push(movieData);
          }
        }

        setMovies(favoriteMoviesData);
      } catch (error) {
        console.error('Error fetching favorite movie data:', error);
      }
    };

    fetchFavoriteMovies();
  }, []);

  return (
    <div className="hidden ml-8 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
      <div className="flex flex-col divide-y divide-gray-700">
        {movies.map((movie, index) => (
          <div key={index} className="flex px-1 py-4">
            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={movie.Poster} />
            <div className="flex flex-col flex-grow">
              <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">
                {movie.Title}
              </a>
              <p className="mt-auto text-xs dark:text-gray-400">
                {movie.Description}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
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
