import useEventStore from '../../hooks/use-events-store';
import InscriptionsContactCard from './InscriptionsContactCard';

const ListEventInscriptions = () => {
  const { currentEvent } = useEventStore();

  console.log(currentEvent);
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2'>
      <h1 className='text-2xl mb-4 mt-2'> Contacts from Event</h1>
      <p className='text-sm '>
        <span className='font-bold'>Asistentes Gratuitos: </span>
        {currentEvent.event?.onlineFreeBookings?.length}
      </p>
      <p className='text-sm '>
        <span className='font-bold'>Asistentes Premium: </span>
        {currentEvent.event?.onlinePremiumBookings?.length}
      </p>
      <p className='text-sm '>
        <span className='font-bold'>Asistentes Presenciales: </span>
        {currentEvent.event?.inPersonBookings?.length}
      </p>
      <div className='flex flex-col gap-2 border-t-2 border-gray-400'>
        <h2 className='text-2xl mb-4 mt-2 uppercase'>Contactos Premium</h2>
        {currentEvent.event?.onlinePremiumBookings?.map((inscription) => (
          <InscriptionsContactCard
            inscription={inscription}
            key={inscription._id}
          />
        ))}
        <h2 className='text-2xl mb-4 mt-2 uppercase '>
          Contactos Presenciales
        </h2>
        {currentEvent.event?.inPersonBookings?.map((inscription) => (
          <InscriptionsContactCard
            inscription={inscription}
            key={inscription._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ListEventInscriptions;
