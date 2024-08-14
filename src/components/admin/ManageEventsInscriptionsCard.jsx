import useEventStore from '../../hooks/use-events-store';
import { Link } from 'react-router-dom';

const ManageEventsInscriptionsCard = ({ events }) => {
  const { setCurrentEvent } = useEventStore();
  console.log(events);
  return (
    <div className='flex items-center gap-2 max-w-[80%] md:flex-row flex-col shadow-xl flex-grow p-4'>
      {events.map((event) => {
        const startDate = event?.startDate
          ? new Date(event.startDate).toLocaleDateString()
          : 'Fecha no disponible';
        const endDate = event?.startDate
          ? new Date(event.endDate).toLocaleDateString()
          : 'Fecha no disponible';
        return (
          <div
            className='text-xs'
            key={event._id}>
            <h1 className='text-lg'>{event.title}</h1>
            <img
              src={event.mainImage}
              alt='Imagen del Evento'
              className='w-20 h-20 '
            />
            <p>Fecha de Inicio: {startDate}</p>
            <p>Fecha de Finalizacion: {endDate}</p>
            <p>Online Premiun Booking: {event.onlinePremiumBookingsCount}</p>
            <p>Presencial: {event.inPersonBookingsCount}</p>
            <p>Inscripciones generales: {event.onlineFreeBookingsCount}</p>
            <Link
              to={`/admin-panel/manage-inscriptions/${event._id}`}
              className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-xs whitespace-nowrap'
              onClick={() => setCurrentEvent(event)}>
              Administrar Inscripciones
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ManageEventsInscriptionsCard;
