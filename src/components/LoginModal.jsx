/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Modal } from '../components/Modal';
import { useModal } from '../hooks/use-modal-store';
import { useUser } from '../context/UserContext';
import Logo from './Logo';

const LoginModal = () => {
  const [isEye, setIsEye] = useState(false);
  const { isOpen, onClose, type, onOpen } = useModal();
  const isModalOpen = isOpen && type === 'login-form';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loginUserRequest, errors: formsErrors, isAuthenticated } = useUser();
  const navigate = useNavigate();

  const onSubmitLogin = handleSubmit((data) => {
    loginUserRequest(data);
    reset();
    onClose();
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

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
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmitLogin}>
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
              <div className='flex items-center justify-between w-full'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  Contraseña
                </label>
                <div
                  className='text-sm text-indigo-500 underline'
                  onClick={() => onOpen('reset-password-form')}>
                  Olvidaste tu contraseña?
                </div>
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
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Log In
              </button>
              <div className='flex gap-2 mt-2 text-center text-black md:text-md text-sm'>
                <p>If you are not Registered go to </p>
                <button
                  onClick={() => onOpen('register-form')}
                  className='text-indigo-600 border-indigo-600 border-opacity-100 md:text-md text-sm'>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
