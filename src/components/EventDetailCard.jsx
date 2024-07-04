import ReactPlayer from 'react-player';

const EventDetailCard = ({ event }) => {
  //TODO: AQUI PUEDES MAQUETAR EL EVENTO COMPLETO CON TODOS SUS DATOS, HAY QUE DEJAR UN BOTON A LA PAGINA DE INSCRIPCIONES Y OTRO PARA VOLVER ATRAS.
  console.log(event);
  return (
    <div>
      <p>{event._id}</p>
      <iframe
        src={event.pdfDocument}
        frameBorder='0'></iframe>

      <ReactPlayer
        url={event.youtubeUrl}
        controls={true}
      />
    </div>
  );
};

export default EventDetailCard;
