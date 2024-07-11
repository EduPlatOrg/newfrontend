import { useModal } from '../../hooks/use-modal-store';
import { Check } from 'lucide-react';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const EventAdminCard = ({ eventsData = [] }) => {
  const { onOpen } = useModal();
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {eventsData.map((event) => (
          <div
            key={event._id}
            className='flex flex-col flex-grow p-4 bg-white shadow-md rounded-md border border-gray-200'>
            <div className='flex-grow'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {event.title}
              </h3>
              <img
                src={event.mainImage}
                alt='Event main Image'
                className=' mt-2 mb-2'
              />
              <p className='text-sm text-gray-600 line-clamp-6'>
                {event.description}
              </p>
              <a
                href={event.youtubeUrl}
                className='flex items-center whitespace-nowrap gap-2 text-xs text-blue-500 mt-2'
                target='_blank'>
                YouTube Presentacions Link
                {event.youtubeUrl ? (
                  <Check
                    className='text-green-500'
                    size={18}
                  />
                ) : (
                  <RxCross1
                    className='text-red-500'
                    size={18}
                  />
                )}
              </a>
              <a
                href={event.pdfDocument}
                className='flex items-center whitespace-nowrap gap-2 text-xs text-blue-500 mt-2'
                target='_blank'>
                {event.pdfDocument ? (
                  <div className='flex items-center whitespace-nowrap gap-2'>
                    <span>PDF Link</span>{' '}
                    <Check
                      className='text-green-500'
                      size={18}
                    />
                  </div>
                ) : (
                  <div className='flex items-center whitespace-nowrap gap-2 text-gray-600'>
                    <span>No PDF</span>{' '}
                    <RxCross1
                      className='text-red-500'
                      size={18}
                    />
                  </div>
                )}
              </a>
              <p className='flex items-center gap-2 text-xs mt-2'>
                Disponible Online:{' '}
                {event.online ? (
                  <Check
                    className='text-green-500'
                    size={18}
                  />
                ) : (
                  <RxCross1
                    size={18}
                    className='text-red-500'
                  />
                )}
              </p>
              <p className='flex items-center gap-2 text-xs mt-2'>
                Evento Precencial:{' '}
                {event.inPerson ? (
                  <Check
                    size={18}
                    className='text-green-500'
                  />
                ) : (
                  <RxCross1
                    size={18}
                    className='text-red-500'
                  />
                )}
              </p>
              <p className='flex items-center gap-2 text-xs mt-2'>
                Asistencia Online:{' '}
                {event.inPersonBookings.lenght
                  ? event.inPersonBookings.lenght
                  : 0}
              </p>
              <p className='flex items-center gap-2 text-xs mt-2'>
                Asistencia Precencial:{' '}
                {event.onlineFreeBookings.lenght
                  ? event.onlineFreeBookings.lenght
                  : 0}
              </p>
              <p className='flex items-center gap-2 text-xs mt-2'>
                Asistencia Online Premium:{' '}
                {event.onlinePremiumBookings.lenght
                  ? event.onlinePremiumBookings.lenght
                  : 0}
              </p>
              <p className='flex items-center gap-2 text-xs mt-2'>
                {event.price}
              </p>
              <p className='flex items-center gap-2 text-xs mt-2'>
                <a
                  href={event.publicEventUrl}
                  className='text-sky-500 underline'
                  target='_blank'>
                  {event.publicEventUrl}
                </a>
              </p>
              <div className='flex justify-between items-center mt-4'>
                <span className='text-xs text-gray-500'>
                  {new Date(event.startDate).toLocaleDateString()} -{' '}
                  {new Date(event.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className='flex items-center justify-end gap-2 mt-4'>
              <Link to={`/admin-panel/create-event?id=${event._id}`}>
                <button className='text-xs text-white bg-gray-700 px-2 py-1 rounded-md'>
                  Edit
                </button>
              </Link>
              <button
                className='text-xs text-white bg-red-500 px-2 py-1 rounded-md'
                onClick={() => onOpen('delete-event', { event })}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAdminCard;
