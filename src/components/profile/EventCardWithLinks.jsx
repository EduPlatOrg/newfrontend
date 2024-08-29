import { Loader } from 'lucide-react';

const EventCardWithLinks = ({ event, handleDelete, loading }) => {
  return (
    <div className='w-full flex flex-col items-start justify-center gap-2 p-4 border-1 border-gray-400 shadow-lg min-w-[300px]'>
      <h1 className='text-lg font-bold'>{event.eventId.title}</h1>
      <p>
        {new Date(event.eventId.startDate).toDateString()}-
        {new Date(event.eventId.endDate).toDateString()}{' '}
      </p>
      {event.eventId.online && (
        <a
          href={event.eventId.publicEventUrl}
          target='_blank'
          className='text-blue-500 underline text-sm'
          rel='noopener noreferrer'>
          Retransmision Publica
        </a>
      )}
      {event.eventId.premiumEventUrl && (
        <a
          href={event.eventId.premiumEventUrl}
          target='_blank'
          className='text-blue-500 underline text-sm'
          rel='noopener noreferrer'>
          Retransmision Premium
        </a>
      )}
      <div className='bg-white flex items-center gap-4 w-full'>
        <div className='flex flex-col sm:col-span-2 text-sm '>
          <p className='font-medium text-gray-900'>
            <span className='font-bold'>Dirección:</span>{' '}
            {event.eventId?.address?.streetaddress}{' '}
          </p>
          <p className=''>
            <span className='font-bold'>Ciudad:</span>{' '}
            {event.eventId?.address?.city}
          </p>
          <p className=''>
            <span className='font-bold'>Provincia:</span>{' '}
            {event.eventId?.address?.state}
          </p>
          <p className=''>
            <span className='font-bold'>CP:</span>{' '}
            {event.eventId?.address?.postalCode}
          </p>
          <p className=''>{event.eventId?.address?.country}</p>

          <span className='mt-1 p-2 text-gray-900'></span>
        </div>
      </div>
      <button
        onClick={() => handleDelete(event._id)}
        className='bg-indigo-500 hover:bg-indigo-600
             text-white py-2 px-3 flex items-center justify-center gap-3 
             rounded-md w-full lg:w-fit self-end text-xs md:text-sm whitespace-nowrap'>
        {loading ? <Loader className='animate-spin' /> : 'Cancelar Inscripcion'}
      </button>
    </div>
  );
};

export default EventCardWithLinks;
