import { useState, useEffect, Suspense } from 'react';
import { getEventById } from '../../api/events';
import CreateEditForm from './CreateEditForm';
import Loader from '../Loader';
import { useSearchParams } from 'react-router-dom';

function CreateEvent() {
  const [event, setEvent] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id'); // Ahora accedes correctamente a 'id'

  useEffect(() => {
    async function fetchEvent() {
      const eventData = await getEventById(id);

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
      <CreateEditForm event={event} />
    </Suspense>
  );
}

export default CreateEvent;
