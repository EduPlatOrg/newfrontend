import { useUser } from '../../context/UserContext';
import { Suspense, useEffect, useState } from 'react';
import MyEventListDetail from './MyEventListDetail';
import Loader from '../Loader';

import {
  deleteInscriptionRequest,
  getInscriptionsByUser,
} from '../../api/inscriptions';
import { toast } from 'sonner';

const MyEventsList = () => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const fetchEvent = async () => {
    const eventsData = await getInscriptionsByUser(user.id);

    setEvents(eventsData?.data.myInscriptions);
  };

  useEffect(() => {
    if (user) {
      fetchEvent();
    } else {
      setEvents([]);
    }
  }, [user]);
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const response = await deleteInscriptionRequest(id);
      if (response.data.success === true) {
        toast.success('Evento cancelado');
        await fetchEvent();
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al cancelar el evento');
    }
    setLoading(false);
  };

  if (!events) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <MyEventListDetail
        events={events}
        handleDelete={handleDelete}
        loading={loading}
      />
    </Suspense>
  );
};

export default MyEventsList;
