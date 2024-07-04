import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { Suspense, useEffect, useState } from 'react';
import { getEventById } from '../api/events';
import EventDetailCard from './EventDetailCard';

const EventsDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  console.log(id);
  useEffect(() => {
    async function fetchEvent() {
      const eventData = await getEventById(id);
      console.log(eventData.data.event);
      setEvent(eventData?.data.event);
    }
    if (id) {
      fetchEvent();
    } else {
      setEvent({});
    }
  }, [id]); // El array vacío asegura que esto se ejecute solo una vez, al montar el componente.

  if (!event) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <EventDetailCard event={event} />
    </Suspense>
  );
};

export default EventsDetails;
