/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';

import { Modal } from '../Modal';
import { useUser } from '../../context/UserContext';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const AddEditMailModal = ({ isOpen, onClose, email, index }) => {
  const [editEmail, setEditEmail] = useState(email);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { errors: formsErrors, editUserById, user, setUser } = useUser();

  useEffect(() => {
    if (email) {
      setValue('emailDescription', email.emailDescription);
      setValue('emailUrl', email.emailUrl);
    }
  }, [email]);

  const onSubmit = handleSubmit(async (data) => {
    let newData = [...user.emails];
    if (email === undefined) {
      newData.push(data);
    } else {
      newData[index] = data;
    }

    setIsLoading(true);

    try {
      const response = await editUserById(user?._id, { emails: newData });

      if (response.status !== 200) {
        toast.error('Error al editar o añadir el puesto de trabajo');
        return;
      }
      setUser((prev) => ({ ...prev, emails: newData }));
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
            {editEmail
              ? 'Edita tu Correo Electrónico'
              : 'Añade un Correo Electrónico'}
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='emailDescription'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Descripcion del Email
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('emailDescription', { required: true })}
                  id='emailDescription'
                  name='emailDescription'
                  type='text'
                  required
                  placeholder='Trabajo, Casa, Personal, Otro...'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.emailDescription && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='emailUrl'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Email
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('emailUrl', {
                    required: true,
                  })}
                  id='emailUrl'
                  name='emailUrl'
                  type='email'
                  required
                  placeholder='ejemplo@ejemplo.com'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.emailUrl && (
                <span className='text-red-500'>{errors.emailUrl.message}</span>
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

export default AddEditMailModal;
