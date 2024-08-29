import { Suspense, useEffect, useState } from 'react';
import Loader from '../Loader';
import InscriptionsByEventCard from './InscriptionsByEventCard';
import { getInscriptionsByEventAndId } from '../../api/inscriptions';
import { useParams } from 'react-router-dom';

const InscriptionsByEvent = () => {
  const [event, setEvent] = useState([]);
  const [premiumBookings, setPremiumBookings] = useState([]);
  const [inPersonBookings, setInPersonBookings] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchEvents() {
      const response = await getInscriptionsByEventAndId(id);
      console.log(response);
      if (response.data.success === true) {
        setEvent(response.data.events.event);
        setPremiumBookings(response.data.events.premiumInscriptions);
        setInPersonBookings(response.data.events.inPersonInscriptions);
      }
    }
    fetchEvents();
  }, [id]);

  const onBookingModification = async (eventId) => {
    // ACA LA LOGICA PARA ACTUALIZAR EL ESTADO DE LAS INSCRIPCIONES
    setEvent([]);
    setPremiumBookings([]);
    setInPersonBookings([]);
    try {
      const response = await getInscriptionsByEventAndId(eventId);

      if (response.data.success === true) {
        setEvent(response.data.events.event);
        setPremiumBookings(response.data.events.premiumInscriptions);
        setInPersonBookings(response.data.events.inPersonInscriptions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!event) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <InscriptionsByEventCard
        event={event}
        premiumBookings={premiumBookings}
        inPersonBookings={inPersonBookings}
        onBookingModification={onBookingModification}
      />
    </Suspense>
  );
};

export default InscriptionsByEvent;
