import { useForm } from 'react-hook-form';
import { useUser } from '../context/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventById } from '../api/events';
import Loader from './Loader';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { createEventInscription } from '../api/inscriptions';

const EventInscription = () => {
  const [event, setEvent] = useState({}); // eslint-disable-line no-unused-vars
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    navigate('/programa-eventos');
  }
  useEffect(() => {
    const fetchEvent = async () => {
      const response = await getEventById(id);

      if (response.data.success) {
        setEvent(response.data.event);
      }
    };
    if (user) {
      setValue('firstname', user.firstname);
      setValue('lastname', user.lastname);
      setValue('email', user.email);
    }

    fetchEvent();
  }, [id, user, setValue]);
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    try {
      const newInscription = {
        eventId: event._id,
        ...data,
      };
      const response = await createEventInscription(newInscription);
      if (response.status === 200) {
        reset();
        toast.success('Inscripción enviada correctamente');
        navigate('/programa-eventos');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al enviar la inscripción');
    }
    setLoading(false);
  });

  if (!event) {
    return <Loader />;
  }

  return (
    <div className='max-w-6xl mx-auto p-5 bg-white shadow-lg rounded-lg my-8'>
      <div className='w-full flex justify-center flex-col space-x-2'>
        <img
          src={event.mainImage}
          alt='Imagen Principal del Evento'
          className='w-full h-64 object-cover rounded-lg'
        />
        <h2 className='text-2xl md:text-4xl font-bold text-gray-800 text-center my-8'>
          Inscripción al evento {event.title}
        </h2>
        <p className='w-full text-center'>
          Todas las inscripciones tendran accesso a la url publica por la cual
          se retrasmitira el evento, si esta existiece.
        </p>
        <p className='w-full text-center mt-1'>
          Para inscribirte a un evento, debes estar registrado en la plataforma,
          si no lo estubieras te registraremos nosotros automaticamente. Debes
          verificar tu correo electronico para poder acceder a la plataforma y
          asi al link de retransmision del evento (en el caso que fuera
          necesario, ya sea acceso publico o bien un acceso premium). Si no
          recibes el correo de verificacion, por favor revisa tu bandeja de
          spam.
        </p>
        <p className='w-full text-center mt-1'>
          Para las inscripciones{' '}
          <strong>
            <em>precenciales o premium</em>
          </strong>{' '}
          marca la casilla coorespondiente, evaluaremos tu solicitud y te
          confirmaremos la inscripcion.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className='w-full flex flex-col justify-start mt-6'>
        <div className='w-full flex lg:flex-row flex-col gap-2'>
          <div className='w-full'>
            <label
              htmlFor='firstname'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Nombre
            </label>
            <div className='mt-2'>
              <input
                {...register('firstname', { required: true })}
                id='firstname'
                name='firstname'
                type='text'
                required
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2  '
              />
            </div>
            {errors.firstname && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <div className='w-full'>
            <label
              htmlFor='lastname'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Apellido
            </label>
            <div className='mt-2'>
              <input
                {...register('lastname', { required: true })}
                id='lastname'
                name='lastname'
                type='text'
                required
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.lastname && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <div className='w-full'>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Email
            </label>
            <div className='mt-2'>
              <input
                {...register('email', { required: true })}
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
              />
            </div>
            {errors.email && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
        </div>
        <div className='mt-4 flex justify-start items-center gap-4'>
          <div className='flex items-center gap-2'>
            <label
              htmlFor='premiumOnline'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Solicitud Online Premium:
            </label>
            <input
              type='checkbox'
              id='premiumOnline'
              name='premiumOnline'
              {...register('premiumOnline')}
            />
          </div>
          <div className='flex items-center gap-2'>
            {' '}
            <label
              htmlFor='inPlace'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Solicitud Presencial:
            </label>
            <input
              type='checkbox'
              id='inPlace'
              name='inPlace'
              {...register('inPlace')}
            />
          </div>
          <div className='flex items-center gap-2'>
            <label
              htmlFor='shareResources'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Quiero compartir Recursos:
            </label>
            <input
              type='checkbox'
              id='shareResources'
              name='shareResources'
              {...register('shareResources')}
            />
          </div>
        </div>
        <div className='flex flex-col items-start justify-center mb-1'>
          <label
            htmlFor='description'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Description:
          </label>
          <textarea
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 resize-none'
            rows={5}
            placeholder={`Cuentanos por que quieres participar en este evento de forma preciencial o premium.\nSi solo quieres acceso a la retransmision del evento, no es necesario que rellenes este campo.`}
            name='description'
            id='description'
            {...register('description')}></textarea>
        </div>
        <button
          disabled={loading}
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4'>
          {loading ? (
            <div className='flex items-center justify-center'>
              {' '}
              <Loader2
                size={20}
                className='mr-2 animate-spin'
              />
              Enviando...
            </div>
          ) : (
            <p className=''>Enviar</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default EventInscription;
