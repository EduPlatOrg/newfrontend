  /*
 [1] Aca hay que recuperar todos tus eventos en los que estas Inscrito
 [2] Hay que revisar que estos sean un array para no tener problemas en el renderizado. O puedes hacerte uyn estado que ya sea una array vacio por defecto.
  [3] Si no hay eventos, mostrar un mensaje de que no hay eventos.
  [4] Si hay eventos, mostrarlos en una lista. Puedes usar un componente EventCard para mostrar cada evento.
  [5] Cada evento debe tener un boton para cancelar la inscripcion.
  [6] Al cancelar la inscripcion, se debe hacer un request a la API para cancelar la inscripcion.
  [7] Al cancelar la inscripcion, se debe actualizar la lista de eventos.
  [8] Si hay un error en la cancelacion de la inscripcion, mostrar un mensaje de error.
  */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard'; 

const MyEventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
        const response = await fetch('../../api/events.js'); 
        const data = await response.json();
        setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-w-[80%] mt-4'>
      <div className='w-full text-center py-4 text-2xl font-bold'>
        Mis Eventos
      </div>
      <div className='w-full flex flex-wrap gap-4 text-center items-center justify-center pt-4'>
        {events.length > 0 ? (
          events.map(event => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <p>No estás inscrito en ningún evento. <Link className='text-blue-500 underline' to="../../programa-eventos">Inscríbete</Link></p>
        )}
      </div>
    </div>
  );
};

export default MyEventsList;