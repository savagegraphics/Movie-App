
import { Fragment } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Landpage from './Landpage'
import Filter from './Filter'
import NavHero from '@/components/heythere/Nav&Hero'
import { useState, useEffect } from 'react';
import MoviesCards from '@/components/heythere/MoviesCards'
import axios from 'axios';

interface Movie {
  Poster: string;
  Title: string;
  Genre: string;
}


const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Paid time off', value: 'Unlimited' },
  ]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [movieDetails, setMovieDetails] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch movie details from OMDB API for each product
    const apiKey = '99cd3565'; // Replace with your actual OMDB API key
    const movieTitles = ['TOP BOY'];

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
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-right justify-end px-4">
                  <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="">
                  <Landpage />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex items-right justify-end mb-4">
              <Menu as="div" className="relative inline-block text-left">
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
         

          <section aria-labelledby="products-heading" className="pb-24">
        

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

              {/* Product grid */}
              <div className="lg:col-span-3">
              {movieDetails.map((data, index) => (
              <div
          className="relative flex col-span-12 bg-center mb-8 rounded-3xl bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 lg:mr-4 h-[24rem]"
          style={{ backgroundImage: `url('${data.Poster}')` }}
        >
          			<span className="absolute px-1 pb-2 text-xs text-gray-200 font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">Top Rated</span>
    	
      <a className="flex flex-col items-left justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
          <div className="text-white">
          <h1 className='text-4xl font-bold'>{data.Title}</h1>
          <p className='text-md m-2 pl-6'>{data.Genre}</p>
          </div>
      	<span className="flex items-start justify-start mb-4 space-x-2 dark:text-violet-400">
					<span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
					</span>
          <button type="button" className="px-6 py-3 font-semibold rounded bg-gray-800 text-gray-100">Watch</button>
				  <div
    style={{
      position: 'relative',
      top: '0',
      right: '0',
      background: 'gray',
      padding: '8px',
      marginTop: '4px',
      borderRadius: '8px',
      marginBottom: '4px'
    }}
  >
    {/* You can replace this with your icon */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

  </div>

        </span>
   </a>
		</div>
  ))}
<MoviesCards/>
              </div>
             
            
            
                          {/* Filters */}
           <form className="hidden lg:block">
     <Landpage/>
              </form>
              </div>
          </section>
        </main>
      </div>
    </div>
  )
}
