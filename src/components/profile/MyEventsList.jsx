import { useUser } from '../../context/UserContext';
import { Suspense, useEffect, useState } from 'react';
import MyEventListDetail from './MyEventListDetail';
import Loader from '../Loader';
import { getMyEventsRequest } from '../../api/events';

const MyEventsList = () => {
  const [events, setEvents] = useState(null);

  const { user } = useUser();

  useEffect(() => {
    async function fetchEvent() {
      const eventsData = await getMyEventsRequest(user.id);
      console.log(eventsData);
      setEvents({});
    }
    if (user) {
      fetchEvent();
    } else {
      setEvents({});
    }
  }, [user]);

  if (!events) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <MyEventListDetail events={events} />
    </Suspense>
  );
};

export default MyEventsList;
