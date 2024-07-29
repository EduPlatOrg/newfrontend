/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Modal } from './Modal';
import { useModal } from '../hooks/use-modal-store';

import Logo from './Logo';

import { Loader2 } from 'lucide-react';
import { colaborateForm } from '../api/mail';

const QuieroColaborarModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [checked, setChecked] = useState(false);
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === 'quiero-colaborar';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    const response = await colaborateForm(data);
    if (response.status === 200) {
      onClose();
      reset();
      navigate('/');
    }
    setIsLoading(false);
  });

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-4  lg:px-4'>
        <Logo />

        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-4 text-center text-xl font-bold leading-6 tracking-tight text-gray-900'>
            Solicitud de Colaboración
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
              <div className=''>
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
              <div className=''>
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
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email
              </label>
              <div className=''>
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
                htmlFor='phone'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Telefono contacto
              </label>
              <div className=''>
                <input
                  {...register('phone', { required: true })}
                  id='phone'
                  name='phone'
                  type='text'
                  autoComplete='phone'
                  required
                  placeholder='+34 123 456 789'
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.phone && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='availability'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Disponibilidad:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                type='text'
                placeholder='Diaria, Semanal, Esporádica...'
                name='availability'
                id='availability'
                {...register('availability', { required: true })}
              />
              {errors.availability && <span>This field is required</span>}
            </div>
            <div className='flex flex-col items-start justify-center mb-1'>
              <label
                htmlFor='speciality'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Especialidad:
              </label>
              <input
                className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                type='text'
                placeholder='Marketing, Diseño, Programación...'
                name='speciality'
                id='speciality'
                {...register('speciality', { required: true })}
              />
              {errors.speciality && <span>This field is required</span>}
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
                rows={4}
                placeholder='Dejanos aqui tu mensaje...'
                name='message'
                id='message'
                {...register('message', {
                  required: true,
                })}></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <div>
              <div className='flex items-center gap-3'>
                <input
                  id='terms'
                  name='terms'
                  type='checkbox'
                  required
                  onChange={(e) => setChecked(e.target.checked)}
                />{' '}
                <Link
                  to='/terms-and-conditions'
                  className='text-indigo-600 underline md:text-md text-sm hover:text-indigo-500'
                  onClick={() => {
                    onClose();
                  }}>
                  {' '}
                  Accept terms and conditions
                </Link>
              </div>{' '}
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
                {isLoading ? (
                  <div className='flex items-center justify-center'>
                    <Loader2
                      className='animate-spin'
                      size={20}
                    />
                    Enviando...{' '}
                  </div>
                ) : (
                  'Enviar Solicitud'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default QuieroColaborarModal;
