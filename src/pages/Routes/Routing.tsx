'use client'
import React, { useState } from 'react';
// import Resume from './Resume';
import Link from 'next/link';
// import OtherSkills from './OtherSkills'
// import Accordion from './Accordion';
import Hero from '@/components/MovieSearch/Hero';
import MoviesCards from '@/components/heythere/MoviesCards';
import Moviesearchcards, { MovieResult } from '@/pages/Moviesearchcards';
import LandingPage from '../LandingPage'
import NavHero from '@/components/heythere/Nav&Hero'


type Props = {};

const ResumeList = (props: Props) => {
  const [activeButton, setActiveButton] = useState('Animation');

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
  };

  let contentToShow = null;

  switch (activeButton) {
    case 'Animation':
      contentToShow = <LandingPage/>; 
      break;
      case 'Web Design': 
      // Replace 'YOUR_API_KEY' with your actual OMDB API key
      contentToShow = <NavHero />;
      break;
    case 'App Design':
      // Replace this with the component/content for App Design
      contentToShow = <Moviesearchcards onSearch={function (searchResults: MovieResult[]): void {
          throw new Error('Function not implemented.');
      } } />;
      break;
    default:
      contentToShow = null;
  }

  return (
    <div>
    <div className="flex py-4 px-4 overflow-x-auto overflow-y-hidden justify-left">
              <button
                className={`h-12 pr-8 pl-4 py-2 -mb-px text-sm font-medium text-center ${
                  activeButton === 'Animation'
                  ? 'text-gray-800 border-b-2 border-indigo-500'
                  : 'text-gray-500'
                } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
                onClick={() => handleButtonClick('Animation')}
              >
              Top Rated Movies
              </button>

          <button
              className={`h-12 px-8 py-2 -mb-px text-sm font-medium text-center ${
                activeButton === 'Web Design'
                ? 'text-gray-800 border-b-2 border-indigo-500'
                  : 'text-gray-500'
             } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
              onClick={() => handleButtonClick('Web Design')}
            >
                TV Series
            </button>

              <button
                className={`h-12 px-8 py-2 -mb-px text-sm font-medium text-center ${
                  activeButton === 'App Design'
                  ? 'text-gray-800 border-b-2 border-indigo-500'
                  : 'text-gray-500'
              } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
                onClick={() => handleButtonClick('App Design')}
              >
                Recent Searches
              </button>
           
          </div>
          {/* Display the dynamic content */}
          <div className="mt-8">
            {contentToShow}
          </div>
        </div>
  );
};

export default ResumeList;