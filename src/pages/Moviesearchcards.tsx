import React from 'react'

type Props = {}

const Moviesearchcards = (props: Props) => {
  return (
    <div>Moviesearchcards</div>
  )
}

export default Moviesearchcards

// import MovieSearchForm from '@/components/MovieSearch/MovieSearchForm';
// import React, { useState } from 'react';

// export interface MovieResult {
//   Poster: string;
//   Title: string;
//   Genre: string;
//   Released: string;
//   imdbRating: string;
// }

// interface MovieSearchProps {
//   onSearch: (searchResults: MovieResult[]) => void;
// }


// const MovieSearch: React.FC<MovieSearchProps> = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [movieResults, setMovieResults] = useState<MovieResult[]>([]);

//   const handleMovieSearch = (searchResults: MovieResult[]) => {
//     // Limit the number of saved searches to 5
//     if (movieResults.length < 5) {
//       setMovieResults([...movieResults, ...searchResults]);
//     } else {
//       // Remove the oldest saved search (the first one) and add the new one
//       const updatedResults = [...movieResults.slice(1), ...searchResults];
//       setMovieResults(updatedResults);
//     }
//   };


//   async function fetchMovieData(searchQuery: string): Promise<MovieResult[]> {
//     try {
//       // Use the OMDB API to fetch movie data
//       const apiKey = '99cd3565'; // Replace with your actual OMDB API key
//       const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       if (data.Response === 'True' && Array.isArray(data.Search)) {
//         // OMDB API may return multiple results, so we extract them
//         return data.Search.map((movie: any) => ({
//           Poster: movie.Poster,
//           Title: movie.Title,
//           Genre: movie.Genre,
//           Released: movie.Released,
//           imdbRating: movie.imdbRating,
//         }));
//       } else {
//         // No valid results found
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching movie data:', error);
//       return []; // Return an empty array in case of an error
//     }
//   }
  
  
  
  

//   return (
//     <div className="bg-white">
//    <div className="absolute z-50 top-0 right-0 mt-4 mr-4 space-y-1 dark:text-gray-100">
//   <MovieSearch onSearch={handleMovieSearch} /> {/* Make sure onSearch is passed correctly */}
// </div>

//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recent Movie Searches</h2>
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
//           {movieResults.map((result, index) => (
//             <div key={index} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   src={result.Poster}
//                   alt={result.Title}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={result.Title}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {result.Title}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{result.Genre}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">{result.imdbRating}</p>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// };


// export default MovieSearch;

// function fetchMovieData(searchQuery: string) {
//   throw new Error('Function not implemented.');
// }
