import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEventStore from '../../hooks/use-events-store';
import clsx from 'clsx';
import EventAdminCard from './EventAdminCard';

const MainDashboard = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { events, fetchEvents } = useEventStore();
  const [filteredEvents, setFilteredEvents] = useState();
  console.log(events);
  useEffect(() => {
    fetchEvents();
    // Paso 3: Establecer filteredEvents después de cargar events
  }, [fetchEvents]);

  const handleSortByDate = () => {
    const sorted = events.sort((a, b) => {
      return new Date(a.startDate) - new Date(b.startDate);
    });
    setFilteredEvents(sorted);
  };
  const handleSerachByName = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 3) return;
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredEvents(filtered);
  };
  const handleFilterOldEvents = () => {
    const filtered = events.filter((event) => {
      return new Date(event.startDate) > new Date();
    });
    setFilteredEvents(filtered);
  };

  return (
    <div className='flex flex-col w-full items-center p-2 '>
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        Detalle de los eventos.
      </h1>
      <div className='flex items-center justify-center gap-4 p-2'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit  text-md cursor-pointer'>
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </p>
        <Link to='/admin-panel/create-event'>
          <button
            className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md whitespace-nowrap'>
            Crear evento
          </button>
        </Link>
      </div>
      {showFilters && (
        <div className='flex flex-col items-center justify-center gap-2 w-full mb-2 p-2'>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full mb-2'>
            <input
              type='text'
              onChange={handleSerachByName}
              placeholder='Buscar por nombre'
              className='md:w-[50%] w-full p-2 rounded-md border border-gray-700'
            />
          </div>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full'>
            <button
              onClick={handleSortByDate}
              className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Ordenar por fecha
            </button>

            <button
              className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'
              onClick={handleFilterOldEvents}>
              Ocultar eventos pasados
            </button>
            <button
              className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'
              onClick={() => setFilteredEvents(null)}>
              Quitar Filtros
            </button>
          </div>
        </div>
      )}

      <div className={clsx('w-full pl-8 mt-8')}>
        <EventAdminCard eventsData={filteredEvents ? filteredEvents : events} />
      </div>
    </div>
  );
};

export default MainDashboard;
