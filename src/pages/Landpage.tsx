import React, { useState } from 'react';
import RightSidebar from './RightSidebar';
import NavHero from '@/components/heythere/Nav&Hero';
import Favorites from './Favorites'

type Props = {}

const Landpage = (props: Props) => {
  const [activeButton, setActiveButton] = useState('Animation');

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
  };

  let contentToShow = null;

  switch (activeButton) {
    case 'Animation':
      contentToShow = <RightSidebar/>; 
      break;
    case 'Web Design': 
      // Replace this with the component/content for Web Design
      contentToShow = <RightSidebar/>; 
      break;
    default:
      contentToShow = null;
  }


  return (
    <div className="hidden mt-24 py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block absolute w-[18rem] top-4 right-4">
       <div className="flex py-4 ml-4 pl-[-2] pr-4 overflow-x-auto overflow-y-hidden justify-left dark:border-gray-700">
              <button
                className={`h-12 px-2 py-2 -mb-px text-sm text-center ${
                  activeButton === 'Animation'
                    ? 'text-indigo-300 border-b-2 border-indigo-500'
                    : 'text-gray-800 border-b-2 border-gray-200'
                } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
                onClick={() => handleButtonClick('Animation')}
              >
              Popular Movies
              </button>

          <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                activeButton === 'Web Design'
                ? 'text-indigo-300 border-b-2 border-indigo-500'
                : 'text-gray-800 border-b-2 border-gray-200'
             } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
              onClick={() => handleButtonClick('Web Design')}
            >
                Favorites
            </button>
          </div>
          {/* Display the dynamic content */}
          <div className="mt-2">
            {contentToShow}
          </div>
      </div>
      );
    };

export default Landpage