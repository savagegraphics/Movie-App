import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
  Poster: string;
  Title: string;
  Genre: string;
  Released: string;
  imdbRating: string;
}

const MoviesCards = () => {
  const [movieDetails, setMovieDetails] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch movie details from OMDB API for each product
    const apiKey = '99cd3565'; // Replace with your actual OMDB API key
    const movieTitles = ['Breaking Bad', 'Game of Thrones',  'The Wire', 'Friends', 'The Sopranos', 'The Office', 'Stranger Things', 'The Crown', 'The Mandalorian', 'Black Mirror', 'Westworld', 'The Witcher', 'Peaky Blinders', 'The Crown', 'The Blacklist', 'The Simpsons'];

    const fetchMovieDetails = async () => {
      const movieDetailsPromises = movieTitles.map(async (title) => {
        try {
          const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
          return response.data as Movie;
        } catch (error) {
          console.error(`Error fetching movie details for ${title}:`, error);
          return null;
        }
      });

      const movieDetailsData = await Promise.all(movieDetailsPromises);
      setMovieDetails(movieDetailsData.filter((data): data is Movie => data !== null));
    };

    fetchMovieDetails();
  }, []);

  return (
    <div className="bg-black rounded-2xl">
    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-white">All Time Top Rated TV Series</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {movieDetails.map((data, index) => (
          <div key={index} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={data.Poster}
                alt= {data.Genre}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white">
                  <a href= {data.Title}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {data.Title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-200"> {data.Genre}</p>
              </div>
              <p className="text-sm font-medium text-gray-200">{data.imdbRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default MoviesCards;
