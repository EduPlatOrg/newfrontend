import useEventStore from '../../hooks/use-events-store';
import { Link } from 'react-router-dom';

const ManageEventsInscriptionsCard = ({ events }) => {
  const { setCurrentEvent } = useEventStore();
  console.log(events);
  return (
    <div className='flex items-center gap-2 justify-center flex-col flex-grow p-4'>
      <h1 className='text-2xl font-semibold w-full flex items-center justify-center p-4'>
        Administra las Inscripciones por evento.
      </h1>
      <div className='flex items-center gap-2 w-full max-w-[80%] md:flex-row flex-col  flex-grow p-4'>
        {events.map((event) => {
          const startDate = event.event?.startDate
            ? new Date(event.event?.startDate).toLocaleDateString()
            : 'Fecha no disponible';
          const endDate = event.event?.endDate
            ? new Date(event.event?.endDate).toLocaleDateString()
            : 'Fecha no disponible';
          return (
            <div
              className='text-xs flex flex-col gap-4 p-4 bg-white rounded-md shadow-xl lg:flex-row 
            lg:gap-4 lg:items-center lg:justify-between w-full'
              key={event._id}>
              <div className='h-full flex items-center flex-col'>
                <h1 className='text-lg whitespace-nowrap font-semibold p-2'>
                  {event.event?.title}
                </h1>
                <img
                  src={event.event?.mainImage}
                  alt='Imagen del Evento'
                  className='w-20 h-20'
                />
              </div>
              <div className='h-full w-full justify-start text-[14px] self-end'>
                <p>
                  <span className='font-semibold'>Fecha de Inicio:</span>{' '}
                  {startDate}
                </p>
                <p>
                  <span className='font-semibold'>Fecha de Finalizacion:</span>{' '}
                  {endDate}
                </p>
                <p>
                  <span className='font-semibold'>Online Premiun Booking:</span>{' '}
                  {event.onlinePremiumBookingsCount}
                </p>
                <p>
                  <span className='font-semibold'>Presencial:</span>{' '}
                  {event.inPersonBookingsCount}
                </p>
                <p>
                  <span className='font-semibold'>
                    Inscripciones generales:
                  </span>{' '}
                  {event.onlineFreeBookingsCount}
                </p>
              </div>
              <Link
                to={`/admin-panel/manage-inscriptions/${event.event?._id}`}
                className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center justify-center gap-3 rounded-md w-full lg:w-fit self-end text-xs md:text-sm whitespace-nowrap'
                onClick={() => setCurrentEvent(event)}>
                Administrar Inscripciones
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageEventsInscriptionsCard;
