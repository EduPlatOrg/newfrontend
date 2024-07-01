import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { contactMeForm } from '../api/mail';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const response = await contactMeForm(data);
      console.log(response);
      toast.success(response.data.message);
      reset();
    } catch (error) {
      console.log(error);
      toast.error(
        'Hemos sufrido un error en nuestro servidor. Por favor, intenta más tarde.'
      );
    } finally {
      setLoading(false);
      navigate('/');
    }
  });
  return (
    <div className='w-full flex flex-col items-center justify-center mb-10'>
      <div className='w-full p-0 md:p-6 lg:p-10'>
        <img
          src='/contact-page-header.png'
          alt='contact Image'
        />
      </div>
      <div className='w-full p-0 md:p-6 lg:p-10'>
        <div className='flex flex-col text-gray-900 my-4 justify-center w-full items-center'>
          <h3 className='text-center my-4 text-xl md:text-3xl font-bold'>
            ¿Tienes alguna duda o sugerencia?
          </h3>
          <hr className='w-full mx-auto h-0.5 bg-gray-600 my-4 '></hr>
          <div className='flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0'>
            <div className='flex-1'>
              <h4 className='text-center my-4 text-xl md:text-2xl font-bold'>
                Contacta con nosotros
              </h4>
            </div>
          </div>{' '}
          <form
            onSubmit={onSubmit}
            className='w-[80%] flex flex-col justify-center gap-2 p-4 self-center'>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Nombre:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                type='text'
                placeholder='Jhon'
                name='name'
                id='name'
                {...register('name', { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='surname'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Apellido:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                type='text'
                placeholder='Doe'
                name='surname'
                id='surname'
                {...register('surname', { required: true })}
              />
              {errors.surname && <span>This field is required</span>}
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='mts2'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                type='email'
                placeholder='jhonDoe@example.com'
                name='mts2'
                id='mts2'
                {...register('email', { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='subject'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Encabezado:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                type='text'
                placeholder='Motivo del mensaje...'
                name='subject'
                id='subject'
                {...register('subject', { required: true })}
              />
              {errors.subject && <span>This field is required</span>}
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='message'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Description:
              </label>
              <textarea
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
                rows={5}
                placeholder='Dejanos aqui tu mensaje...'
                name='message'
                id='message'
                {...register('message', {
                  required: true,
                })}></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type='submit'
              className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
              disabled={loading}>
              {loading ? (
                <div className='flex items-center justify-center'>
                  <Loader2
                    className='animate-spin'
                    size={20}
                    PreviewImagesModal
                  />
                  Enviando...{' '}
                </div>
              ) : (
                'Enviar'
              )}
            </button>
          </form>
        </div>
      </div>

      <div className='w-full p-0 md:p-6 lg:p-10'>
        <div className='flex-1 text-gray-900 my-4'>
          <h3 className='text-center my-4 text-xl md:text-3xl font-bold'>
            Tambien es posible contactar a través de nuestras RRSS:
          </h3>
          <hr className='w-full mx-auto h-0.5 bg-gray-600 my-4 '></hr>
          <div className='social-icons flex space-x-2 justify-center'>
            <a
              href='https://www.facebook.com/EduPlat.org/'
              aria-label='Facebook'
              className='text-gray-900 hover:text-[#EEEDF0]'
              target='_blank'>
              <FontAwesomeIcon
                icon={faFacebook}
                size='2x'
              />
            </a>
            <a
              href='https://www.youtube.com/channel/UCMmqkS3DhvtrauRPkEzXvOQ'
              aria-label='Facebook'
              className='text-gray-900 hover:text-[#EEEDF0]'
              target='_blank'>
              <FaYoutube size={32} />
            </a>
            <a
              href='https://x.com/eduplat_es/'
              aria-label='Twitter'
              className='text-gray-900 hover:text-[#EEEDF0]'
              target='_blank'>
              <FaSquareXTwitter size={32} />
            </a>
            <a
              href='https://www.instagram.com/eduplat_org/'
              aria-label='Instagram'
              className='text-gray-900 hover:text-[#EEEDF0]'
              target='_blank'>
              <FontAwesomeIcon
                icon={faInstagram}
                size='2x'
              />
            </a>
            <a
              href='https://www.whatsapp.com/'
              aria-label='WhatsApp'
              className='text-gray-900 hover:text-[#EEEDF0]'
              target='_blank'>
              <FontAwesomeIcon
                icon={faWhatsapp}
                size='2x'
              />
            </a>
            <a
              href='https://www.linkedin.com/company/eduplat/'
              aria-label='LinkedIn'
              className='text-gray-900 hover:text-[#EEEDF0]'
              target='_blank'>
              <FontAwesomeIcon
                icon={faLinkedin}
                size='2x'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
