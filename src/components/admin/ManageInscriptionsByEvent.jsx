import { Suspense, useEffect, useState } from 'react';
import Loader from '../Loader';
import { getInscriptionsByEvent } from '../../api/inscriptions';
import ManageEventsInscriptionsCard from './ManageEventsInscriptionsCard';

const ManageInscriptionsByEvent = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function fetchEvents() {
      const response = await getInscriptionsByEvent();
      console.log(response.data);
      if (response.data.success === true) {
        setEvents(response.data.events);
      }
    }
    fetchEvents();
  }, []);

  if (!events) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <ManageEventsInscriptionsCard events={events} />
    </Suspense>
  );
};

export default ManageInscriptionsByEvent;
