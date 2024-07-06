import { useEffect } from 'react';
import useEventsStore from '../hooks/use-events-store';

import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import NavbarLinks from '../components/NavbarLinks';

const ProgramaEventos = () => {
  const { fetchEvents, pastEvents, nextEvents } = useEventsStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]); // Carga los eventos

  if (!pastEvents || !nextEvents) {
    return <Loader />;
  }

  return (
    <div className='container'>
      <div className='w-full bg-blue-100 '> {/* TODO: Styles*/}
        <img
          className='object-contain h-28 md:h-48 w-full'
          src='/images/Eduplat-feria.webp'
          alt=''
        />
      </div>

      {/* Navbar */}
      <div className='w-screen  md:w-4/5'> {/* TODO: Styles*/}
        <NavbarLinks />
      </div>

      {/* nextEvents */}
      <div className='flex flex-col gap-4 mt-4'>
          <h2 className="text-2xl font-bold text-gray-800 my-4">Eventos próximos</h2>
          {nextEvents.map((event) => (
          <div
            key={event._id}
            className='flex flex-col md:flex-row p-4 bg-green-200 shadow-md rounded-md border border-gray-200'>
            <div className='md:w-1/4'>
              <img
                src={event.mainImage}
                alt='Event main Image'
                className='object-cover h-full w-full'
              />
            </div>
            <div className='flex flex-col md:w-3/4 p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {event.title}
              </h3>
              <p className='text-sm text-gray-600 mt-2 line-clamp-2'>
                {event.description}
              </p>
              <div className='mt-4'>
                <span className='text-xs text-gray-500'>
                  {new Date(event.startDate).toLocaleDateString()} -{' '}
                  {new Date(event.endDate).toLocaleDateString()}
                </span>
                <br />
                <Link to={`/programa-eventos/${event._id}`}>
                  <button className='mt-4 px-4 py-1 bg-gray-200 rounded-lg'>
                    Más info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> {/* Fin nextEvents*/}

      {/* pastEvents */}
      <div className='flex flex-col gap-4 mt-4'>
        <h2 className="text-2xl font-bold text-gray-800 my-4">Eventos pasados</h2>
        {pastEvents.map((event) => (
          <div
            key={event._id}
            className='flex flex-col md:flex-row p-4  bg-red-200 shadow-md rounded-md border border-gray-200 mb-8'>
            <div className='md:w-1/6'>
              <img
                src={event.mainImage}
                alt='Event main Image'
                className='object-cover h-full w-full'
              />
            </div>
            <div className='flex flex-col md:w-3/4 p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {event.title}
              </h3>
              {/* <p className='text-sm text-gray-600 mt-2 line-clamp-2'>
                {event.description}
              </p> */}
              <span className='text-xs text-gray-500 mt-4'>
                  {new Date(event.startDate).toLocaleDateString()} -{' '}
                  {new Date(event.endDate).toLocaleDateString()}
              </span>
              <br />
              <Link to={`/programa-eventos/${event._id}`}>
                  <button className='mt-1 px-4 py-1 bg-gray-200 rounded-lg'>
                    Más info
                  </button>
                </Link>
            </div>
          </div>
        ))}
      </div> {/* Fin pastEvents*/}

    </div>
  );
};

export default ProgramaEventos;
