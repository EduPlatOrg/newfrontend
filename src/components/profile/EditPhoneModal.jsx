import { useForm } from 'react-hook-form';

import { Modal } from '../Modal';

import { toast } from 'sonner';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

const EditPhoneModal = ({ isOpen, onClose, phone }) => {
  const [phoneNumber, setPhoneNumber] = useState(phone?.phoneNumber);
  const [phoneDescription, setPhoneDescription] = useState(
    phone?.phoneDescription
  );
  // eslint-disable-next-line no-unused-vars
  const [phoneToEdit, setPhoneToEdit] = useState(phone);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber,
      phoneDescription,
    },
  });
  const { errors: formsErrors, user, editUserById, setUser } = useUser();

  const onSubmit = handleSubmit(async (data) => {
    const newFilteredPhoneData = user?.phones.filter((phone) => {
      return phone.phoneNumber !== phoneToEdit.phoneNumber;
    });
    const newPhoneData = [
      {
        ...newFilteredPhoneData,
        ...data,
      },
    ];

    try {
      const response = await editUserById(user?._id, { phones: newPhoneData });
      console.log(response, 'response');
      if (response.status !== 200) {
        toast.error('Error al cambiar la Telefono');
        return;
      }
      setUser((prev) => ({ ...prev, phones: newPhoneData }));
      onClose();

      toast.success('Telefono cambiado con éxito');
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
            Añade o cambia tu Telefono
          </h2>
        </div>

        <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            onSubmit={onSubmit}>
            <div>
              <label
                htmlFor='phoneDescription'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Tipo
              </label>
              <div className='mt-2'>
                <input
                  {...register('phoneDescription', { required: true })}
                  id='phoneDescription'
                  name='phoneDescription'
                  type='text'
                  placeholder='Movil, Casa, Trabajo...'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPhoneDescription(e.target.value);
                  }}
                />
              </div>
              {errors.phoneDescription && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor='phoneNumber'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Numero de Telefono
              </label>
              <div className='mt-2'>
                <input
                  {...register('phoneNumber', { required: true })}
                  id='phoneNumber'
                  name='phoneNumber'
                  type='text'
                  placeholder='+34 123 456 789'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  onChange={(e) => {
                    console.log(e.target.value);
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
              {errors.phoneNumber && (
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
                Cambiar Numero
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditPhoneModal;
