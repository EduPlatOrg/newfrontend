const BookingCard = ({ booking, onBookingModification }) => {
  console.log(booking);

  const handleBookingModification = async (bookingId, type) => {};
  return (
    <div className='flex items-center gap-2 w-full min-w-[80%] md:flex-row flex-col  flex-grow p-4'>
      <div
        className='text-xs flex flex-col  gap-4 p-4 bg-white rounded-md shadow-xl lg:flex-row 
            lg:gap-4 lg:items-center lg:justify-between w-full'
        key={booking._id}>
        <div className='h-full flex items-center flex-col self-start'>
          <h1 className='text-lg whitespace-nowrap font-semibold p-2'>
            {booking.userId?.firstname} {booking.userId?.lastname}
          </h1>
          <img
            src={booking.userId?.picture}
            alt='Imagen del Usuario'
            className='w-20 h-20 rounded-full object-cover'
          />
        </div>
        <div className='h-full min-w-fit px-4 justify-start text-[14px] self-start md:p-6 md:mt-4 '>
          <p>
            <span className='font-semibold'>Email:</span>{' '}
            {booking.userId?.email}
          </p>
          <p>
            <span className='font-semibold'>Telefono:</span>{' '}
            {booking.userId?.phones[0]?.phoneNumber
              ? booking.userId?.phones[0]?.phoneNumber
              : 'No disponible'}
          </p>
          <p>
            <span className='font-semibold'>Karma:</span>{' '}
            {booking.userId?.karma}
          </p>
          <p>
            <span className='font-semibold'>Tipo de Inscripcion:</span>{' '}
            {booking.inPersonApplication
              ? 'Presencial'
              : booking.premiumApplication
              ? 'Online Premium'
              : 'Gratuita'}
          </p>
          <p>
            <span className='font-semibold'>Compartira Recursos:</span>{' '}
            {booking.shareResources ? 'Si' : 'No'}
          </p>
          <p>
            <span className='font-semibold'>Fecha de Inscripcion:</span>{' '}
            {new Date(booking.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className='w-full flex flex-col self-start md:p-6 flex-grow min-h-full md:mt-4 px-4'>
          <span className='font-semibold'>Descripcion:</span>{' '}
          <p>{booking.description}</p>
        </div>
        <div className='w-fit flex md:flex-col gap-2 self-end'>
          <button
            onClick={() => handleBookingModification(booking._id, 'accept')}
            className='bg-green-500 text-white 
            py-2 px-3 flex items-center justify-center gap-3 rounded-md w-full self-end text-xs md:text-sm whitespace-nowrap'>
            Aceptar
          </button>
          <button
            onClick={() => handleBookingModification(booking._id, 'reject')}
            className='bg-red-500 text-white 
            py-2 px-3 flex items-center justify-center gap-3 rounded-md w-full self-end text-xs md:text-sm whitespace-nowrap'>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
