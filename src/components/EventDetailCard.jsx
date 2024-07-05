import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


const EventDetailCard = ({ event }) => {
  //TODO: AQUI PUEDES MAQUETAR EL EVENTO COMPLETO CON TODOS SUS DATOS, HAY QUE DEJAR UN BOTON A LA PAGINA DE INSCRIPCIONES Y OTRO PARA VOLVER ATRAS.
  console.log(event);
  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg my-8">

      <div className="my-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center my-8">{event.title}</h2>
        <p className="text-gray-600 mt-2">{event.description}</p>
      </div>

      <div className="my-4">
        <p className="text-gray-500 mt-1">{event.date}</p>
        <p className="text-gray-500">{event.time}</p>
        <p className="text-gray-500">{event.duration}</p>
        <p className="text-gray-500">{event.price}</p>
        <p className="text-gray-500">{event.category}</p>
        <p className="text-gray-500">{event.language}</p>
      </div>

      <div className="mb-6 relative w-full overflow-hidden aspect-square">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={event.pdfDocument}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>

      <div className="mb-6 flex justify-center">
        <ReactPlayer
          className="react-player aspect-video"
          url={event.youtubeUrl}
          controls={true}
        />
      </div>

      <div className="flex justify-center">
        <Link>
          <button 
            onClick={event.onRegister} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Participar
          </button>
        </Link>
      </div>

    </div>
  );
};

export default EventDetailCard;
