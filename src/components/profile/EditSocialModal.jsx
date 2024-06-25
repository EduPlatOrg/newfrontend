import { useForm } from 'react-hook-form';

import { Modal } from '../Modal';
import { useUser } from '../../context/UserContext';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const EditSocialModal = ({ isOpen, onClose, social, index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { errors: formsErrors, editUserById, user, setUser } = useUser();

  useEffect(() => {
    if (social) {
      setValue('media', social.media);
      setValue('user', social.user);
    }
  }, [social]);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    console.log(data);
    let newSocialData = user?.social;
    console.log(newSocialData, 'newSocialData');
    if (!index && newSocialData.length === 1 && newSocialData[0].user === '@') {
      newSocialData = [data];
    } else if (index) {
      newSocialData[index] = data;
    } else {
      newSocialData.push(data);
    }

    console.log(newSocialData, 'newSocialData');
    try {
      const response = await editUserById(user?._id, { social: newSocialData });
      console.log(response, 'response');
      if (response.status !== 200) {
        toast.error('Error al editar o añadir el puesto de trabajo');
        return;
      }
      setUser((prev) => ({ ...prev, social: newSocialData }));
      onClose();
      toast.success('Puesto de trabajo cambiado o añadido con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal, por favor intenta de nuevo.');
    }
    setIsLoading(false);
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          {formsErrors &&
            formsErrors.map((error, i) => (
              <div
                className='bg-red-500 p-2 rounded-md text-white w-200 m-2'
                key={i}>
                {error}
              </div>
            ))}
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Añade un Puesto de Trabajo
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='media'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Red Social
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('media', { required: true })}
                  id='media'
                  name='media'
                  type='text'
                  required
                  placeholder='Facebook, Twitter, Instagram, etc.'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.media && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='user'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Url de la Red Social.
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('user', {
                    required: true,
                  })}
                  id='user'
                  name='user'
                  type='text'
                  required
                  placeholder='Pega el link de tu perfil de la red social.'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.user && (
                <span className='text-red-500'>This field is Required</span>
              )}
            </div>
            <div>
              <button
                disabled={isLoading}
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                {isLoading ? (
                  <div className='flex items-center justify-center'>
                    {' '}
                    <Loader2
                      size={20}
                      className='mr-2 animate-spin'
                    />
                    Guardando...
                  </div>
                ) : (
                  'Guardar'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditSocialModal;
