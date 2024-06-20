/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Modal } from '../components/Modal';
import { useModal } from '../hooks/use-modal-store';
import { useUser } from '../context/UserContext';
import { strengthColor, strengthIndicator } from '../utils/password-strength';
import Logo from './Logo';
import i18next from 'i18next';

const RegisterModal = () => {
  const [isEye, setIsEye] = useState(false);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState('');
  const [checked, setChecked] = useState(false);
  const { isOpen, onClose, type, onOpen } = useModal();
  const isModalOpen = isOpen && type === 'register-form';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { errors: formsErrors, isAuthenticated, singIn } = useUser();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data, 'data');
    const response = await singIn(data);
    if (response.status === 200) {
      onClose();
      reset();
      onOpen('login-form');
    }
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  const handleChange = (e) => {
    e.preventDefault();
    const temp = strengthIndicator(e.target.value);
    setStrength(temp);
    setLevel(strengthColor(temp));
    console.log(strength, level, '<-- strength, level');
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <Logo />
        {formsErrors &&
          formsErrors?.map((error, i) => (
            <div
              className='bg-red-500 p-2 rounded-md text-white w-200 m-2'
              key={i}>
              {error}
            </div>
          ))}
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Register your account
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <div>
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
            <div>
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
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Username
              </label>
              <div className='mt-2'>
                <input
                  {...register('username', { required: true })}
                  id='username'
                  name='username'
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
              {errors.username && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>

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
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Contraseña
              </label>
              <div className='mt-2 relative '>
                <input
                  {...register('password', { required: true })}
                  id='password'
                  name='password'
                  type={isEye ? 'text' : 'password'}
                  required
                  onChange={(e) => handleChange(e)}
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
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
              {strength !== 0 && (
                <div className='flex items-center justify-between w-full h-[14px]'>
                  <p className='flex items-center justify-center text-sm font-medium leading-6  mt-2'>
                    {i18next.t(level?.label)}:
                  </p>
                  <span
                    className='w-full flex items-center justify-center  h-[4px] rounded-lg mt-2 ml-2'
                    style={{ backgroundColor: level?.color }}></span>
                </div>
              )}
              {errors.password && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor='email'
                className='flex items-center  gap-4 text-sm font-medium  text-gray-900'>
                <div>
                  <input
                    id='terms'
                    name='terms'
                    type='checkbox'
                    required
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                </div>{' '}
                Accept terms and conditions
              </label>
            </div>

            <div>
              <button
                disabled={!checked}
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Register
              </button>
              <div className='flex mt-2 text-center text-black gap-2 md:text-md text-sm'>
                <p>If you are Registered go to </p>
                <button
                  onClick={() => onOpen('login-form')}
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

export default RegisterModal;
