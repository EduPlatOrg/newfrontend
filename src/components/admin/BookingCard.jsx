import { toast } from 'sonner';
import { processInscription } from '../../api/inscriptions';

import { useEffect, useState } from 'react';

const BookingCard = ({ booking, onBookingModification }) => {
  const [presencial, setPresencial] = useState(false);
  const [premiumOnline, setPremiumOnline] = useState(false);
  const [shareResources, setShareResources] = useState(false);
  console.log({ booking });
  useEffect(() => {
    setPresencial(booking.inPersonApplication);
    setPremiumOnline(booking.premiumApplication);
    setShareResources(booking.shareResources);
  }, [booking]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      inPersonApplication: presencial,
      premiumApplication: premiumOnline,
      shareResources,
      inscription: booking,
    };
    try {
      const response = await processInscription(data);
      if (response.data.success === true) {
        onBookingModification(booking.eventId);
      }
      toast.success('Inscripcion Procesada');
    } catch (error) {
      console.log(error);
      toast.error('Error al procesar la inscripcion');
    }
  };
  return (
    <div className='flex shadow-xl items-center gap-2 w-full min-w-[80%] flex-col  flex-grow p-4'>
      <div
        className='text-xs flex flex-col  gap-4 p-4 bg-white rounded-md  lg:flex-row 
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
            <span className='font-semibold'>Fecha de Inscripcion:</span>{' '}
            {new Date(booking.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className='w-full flex flex-col self-start md:p-6 flex-grow min-h-full px-4'>
          <span className='font-semibold'>Descripcion:</span>{' '}
          <p>{booking.description}</p>
        </div>
      </div>
      <div className='w-fit flex md:flex-col gap-2 px-4 lg:max-w-[80%] '>
        <form
          onSubmit={onSubmit}
          className='flex flex-col gap-2 items-start '>
          <p className='text-xs'>
            Solo dejar marcados los campos aceptados. En caso de ser rechazada
            la solicitud desmarcar todos los campos, ( los marcados son los
            solicitados por el usuario )
          </p>
          <div className='flex gap-4 items-center justify-between w-full'>
            <label
              htmlFor='presencial'
              className='text-sm font-semibold'>
              Aceptar Presencial
            </label>
            <input
              type='checkbox'
              id='presencial'
              name='presencial'
              checked={presencial}
              className='w-5 h-5'
              onChange={(e) => setPresencial(e.target.checked)}
            />
          </div>
          <div className='flex gap-4 items-center justify-between w-full'>
            <label
              htmlFor='premium-online'
              className='text-sm font-semibold'>
              Aceptar Premium-Online
            </label>
            <input
              type='checkbox'
              id='premium-online'
              name='premium-online'
              checked={premiumOnline}
              className='w-5 h-5'
              onChange={(e) => setPremiumOnline(e.target.checked)}
            />
          </div>
          <div className='flex gap-4 items-center justify-between w-full'>
            <label
              htmlFor='share-resources'
              className='text-sm font-semibold'>
              Aceptar Compartir Recursos
            </label>
            <input
              type='checkbox'
              id='share-resources'
              checked={shareResources}
              name='share-resources'
              className='w-5 h-5'
              onChange={(e) => setShareResources(e.target.checked)}
            />
          </div>
          <button
            type='submit'
            className='bg-indigo-500 hover:bg-indigo-600
             text-white py-2 px-3 flex items-center justify-center gap-3 
             rounded-md w-full lg:w-fit self-end text-xs md:text-sm whitespace-nowrap'>
            Procesar Inscripcion
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingCard;
