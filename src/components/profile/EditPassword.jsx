import { useForm } from 'react-hook-form';

import { useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Modal } from '../Modal';
import { useUser } from '../../context/UserContext';
import { toast } from 'sonner';

const EditPassword = ({ isOpen, onClose }) => {
  const [isEye, setIsEye] = useState(false);
  const [isEye2, setIsEye2] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
    watch,
  } = useForm();
  const { errors: formsErrors, user, resetPassword } = useUser();

  const password = watch('password');

  const onSubmit = handleSubmit(async (data) => {
    console.log(data, user?.id);
    try {
      const response = await resetPassword(password, user?.id);
      console.log(response, 'response');
      if (response.status !== 200) {
        toast.error('Error al cambiar la contraseña');
        return;
      }
      onClose();
      toast.success('Contraseña cambiada con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal');
    }
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
            Cambia tu contraseña
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Nueva Contraseña
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('password', { required: true })}
                  id='password'
                  name='password'
                  type={isEye ? 'text' : 'password'}
                  autoComplete='current-password'
                  required
                  placeholder='*********'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
                <span
                  className=' absolute right-5 top-2.5 cursor-pointer'
                  onClick={() => setIsEye(!isEye)}>
                  {' '}
                  {!isEye ? (
                    <IoEyeOffOutline size={18} />
                  ) : (
                    <IoEyeOutline size={18} />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div>
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='verifyPassword'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Repita Nueva Contraseña
                </label>

                <div className='text-sm'></div>
              </div>
              <div className='mt-2 relative'>
                <input
                  {...register('verifyPassword', {
                    required: true,
                    validate: (value) =>
                      value === password || 'Las contraseñas no coinciden',
                  })}
                  id='verifyPassword'
                  name='verifyPassword'
                  type={isEye2 ? 'text' : 'password'}
                  required
                  placeholder='*********'
                  className='block w-full rounded-md 
                  border-0 py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
                <span
                  className=' absolute right-5 top-2.5 cursor-pointer'
                  onClick={() => setIsEye2(!isEye2)}>
                  {' '}
                  {!isEye2 ? (
                    <IoEyeOffOutline size={18} />
                  ) : (
                    <IoEyeOutline size={18} />
                  )}
                </span>
              </div>
              {errors.verifyPassword && (
                <span className='text-red-500'>
                  {errors.verifyPassword.message}
                </span>
              )}
            </div>
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Cambiar Contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditPassword;
