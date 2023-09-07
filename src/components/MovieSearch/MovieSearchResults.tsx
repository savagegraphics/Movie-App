import React from 'react';

interface MovieSearchResultsProps {
  results: Array<{ Title: string; Poster: string; Year: string; imdbID: string }>; // Adjust the shape of your results
}

const MovieSearchResults: React.FC<MovieSearchResultsProps> = ({ results }) => {
  return (
    <div className="bg-gray-300 mt-8 p-12 rounded">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((result) => (
        <div key={result.imdbID} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
          src={result.Poster} alt={result.Title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={result.Title}>
                <span aria-hidden="true" className="absolute inset-0" />
                {result.Title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">IMDB ID: {result.imdbID}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">Year: {result.Year}</p>
        </div>
      </div>
      ))}
    </div>
    </div>
  );
};

export default MovieSearchResults;
