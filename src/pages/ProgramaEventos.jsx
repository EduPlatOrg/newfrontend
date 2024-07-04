import { useEffect } from 'react';
import useEventsStore from '../hooks/use-events-store';

import Loader from '../components/Loader';

const ProgramaEventos = () => {
  const { fetchEvents, events } = useEventsStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]); // Carga los eventos

  if (!events) {
    return <Loader />;
  }

  return (
    <div className='container'>
      <div className='flex flex-col gap-4'>
        {events.map((event) => (
          <div
            key={event._id}
            className='flex flex-col md:flex-row p-4 bg-white shadow-md rounded-md border border-gray-200'>
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
                <button className='mt-4 px-4 py-1 bg-gray-200 rounded-lg'>
                  Más info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramaEventos;
