import BookingCard from './BookingCard';

const InscriptionsByEventCard = ({
  event,
  premiumBookings,
  inPersonBookings,
  onBookingModification,
}) => {
  console.log({ event }, { premiumBookings }, { inPersonBookings });
  return (
    <div className='w-full min-w-[80%] flex flex-col justify-center items-center gap-4 p-6'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-xl md:text-2xl font-semibold'>{event?.title}</h1>
        <img
          src={event?.mainImage}
          alt='Imagen del Evento'
          className='w-[200px]'
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-2 w-full min-w-[80%]'>
        <h1 className='text-xl md:text-2xl font-semibold'>
          Inscripciones Premium: {premiumBookings?.length}
        </h1>
        {premiumBookings?.length > 0 ? (
          premiumBookings?.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
            />
          ))
        ) : (
          <p>No hay inscripciones premium</p>
        )}
      </div>

      <div className='flex flex-col items-center justify-center gap-2 w-full min-w-[80%]'>
        <h1 className='text-xl md:text-2xl font-semibold'>
          Inscripciones Presenciales: {inPersonBookings?.length}
        </h1>
        {inPersonBookings?.length > 0 ? (
          inPersonBookings?.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={booking}
              onBookingModification={onBookingModification}
            />
          ))
        ) : (
          <p>No hay inscripciones presenciales</p>
        )}
      </div>
    </div>
  );
};

export default InscriptionsByEventCard;
