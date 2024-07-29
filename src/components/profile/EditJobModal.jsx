import { useForm } from 'react-hook-form';

import { Modal } from '../Modal';
import { useUser } from '../../context/UserContext';
import { toast } from 'sonner';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const EditJobModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { errors: formsErrors, editUserById, user, setUser } = useUser();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    try {
      const response = await editUserById(user?._id, { job: data });

      if (response.status !== 200) {
        toast.error('Error al editar o añadir el puesto de trabajo');
        return;
      }
      setUser((prev) => ({ ...prev, job: data }));
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
                  htmlFor='position'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Puesto de Trabajo
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('position', { required: true })}
                  id='position'
                  name='position'
                  type='text'
                  required
                  placeholder='Manage Accountant'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.position && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='verifyPassword'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Empresa o Institución donde Trabaja
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('workplace', {
                    required: true,
                  })}
                  id='workplace'
                  name='workplace'
                  type='text'
                  required
                  placeholder='Empresa S.A.'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.workplace && (
                <span className='text-red-500'>{errors.workplace.message}</span>
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

export default EditJobModal;
