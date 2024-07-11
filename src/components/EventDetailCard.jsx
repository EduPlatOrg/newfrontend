import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const EventDetailCard = ({ event }) => {
  //TODO: AQUI PUEDES MAQUETAR EL EVENTO COMPLETO CON TODOS SUS DATOS, HAY QUE DEJAR UN BOTON A LA PAGINA DE INSCRIPCIONES Y OTRO PARA VOLVER ATRAS.
  console.log(event);
  return (
    <div className='max-w-6xl mx-auto  bg-white shadow-lg rounded-lg p-8'>
      <div className='my-4'>
        <img
          src={event.mainImage}
          alt='Main Event'
          className='w-full h-64 object-cover rounded-lg mt-4'
        />
        <h2 className='text-2xl md:text-4xl font-bold text-gray-800 text-center my-8'>
          {event.title}
        </h2>
        <p className='text-gray-600 mt-2 whitespace-pre-line '>
          {event.description}
        </p>
      </div>

      <div className='my-4'>
        {event.inPerson && (
          <div className='text-gray-500'>
            <p className=''>
              <strong className='text-gray-900'>Evento precencial:</strong>{' '}
              Plazas limitadas a {event.inPersonPlaces}
            </p>
            <p className=''>
              <strong className='text-gray-900'>Disponibles: </strong>
              {event.inPersonPlaces - event.inPersonBookings.length}
            </p>
            {event.address && (
              <div className=''>
                <p className=''>{event.address.streetaddress}</p>
                <p className=''>
                  {event.address.city}, {event.address.postalCode}
                </p>
                <p>{event.address.state}</p>

                <p>{event.address.country}</p>
              </div>
            )}
          </div>
        )}
        {event.online && (
          <div className='text-gray-500 mt-4'>
            <p className=''>
              <strong className='text-gray-900'>Evento online:</strong> Plazas
              participativas limitadas a {event.onlinePremiumPlaces}
            </p>

            <p className=''>
              <strong className='text-gray-900'>Disponibles: </strong>
              {event.onlinePremiumPlaces - event.onlinePremiumBookings.length}
            </p>
            <p className=''>
              <strong className='text-gray-900'>Plazas de oyente:</strong>{' '}
              Ilimitadas
            </p>
          </div>
        )}

        <p className='text-gray-500 mt-4'>
          <strong className='text-gray-900'>Precio:</strong> {event.price}
        </p>

        <div className='flex items-center gap-2'>
          <p className='text-gray-500'>
            Comienza del:{' '}
            <strong className='text-gray-900'>
              {new Date(event.startDate).toLocaleDateString()}
            </strong>
          </p>
          <p className='text-gray-500'>
            {' '}
            y finaliza el:{' '}
            <strong className='text-gray-900'>
              {new Date(event.endDate).toLocaleDateString()}
            </strong>
          </p>
        </div>
        <div className='flex justify-start mt-4 mb-4'>
          <Link to={`/programa-eventos/incripciones/${event._id}`}>
            <button
              onClick={event.onRegister}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Inscribirse
            </button>
          </Link>
        </div>
      </div>
      <div className='mb-6 flex justify-center'>
        <ReactPlayer
          className='react-player aspect-video'
          url={event.youtubeUrl}
          controls={true}
        />
      </div>

      <div className='mb-6 relative w-full overflow-hidden aspect-square'>
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src={event.pdfDocument}
          frameBorder='0'
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default EventDetailCard;
