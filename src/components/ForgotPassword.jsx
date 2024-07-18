/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';

import { Modal } from './Modal';
import { useModal } from '../hooks/use-modal-store';
import { toast } from 'sonner';
import { useUser } from '../context/UserContext';
import Logo from './Logo';

const ForgotPasswordModal = () => {
  const { isOpen, onClose, type, onOpen } = useModal();
  const isModalOpen = isOpen && type === 'reset-password-form';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { errors: formsErrors, resetPassword } = useUser();

  const handleChangePassword = handleSubmit(async (data) => {
    console.log(data, 'data');
    const response = await resetPassword(data);
    if (response.status === 200) {
      reset();
      onClose();
      toast.success('Contraseña cambiada correctamente, revisa tu email');
    } else {
      toast.error('Error al cambiar la contraseña');
    }
  });

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <Logo />
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
            Recupera tu contraseña
          </h2>
          <p className=' text-[14px] mt-3 text-center'>
            Introduce tu email y te enviaremos un email con tu nueva contraseña.
          </p>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={handleChangePassword}>
            <div>
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

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Enviar
              </button>
              <div className='flex gap-2 mt-2 text-center text-black md:text-md text-sm'>
                <p>Vuelve al </p>
                <button
                  onClick={() => {
                    onOpen('login-form');
                  }}
                  className='text-indigo-600 border-indigo-600 border-opacity-100 md:text-md text-sm'>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
