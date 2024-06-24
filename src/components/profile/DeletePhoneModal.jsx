import { useForm } from 'react-hook-form';
import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from '../Modal';

import { toast } from 'sonner';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

const DeletePhoneModal = ({ isOpen, onClose, phone }) => {
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
    console.log(newFilteredPhoneData, 'newFilteredPhoneData');
    const newPhoneData = [
      ...newFilteredPhoneData,
      {
        phoneNumber: data.phoneNumber,
        phoneDescription: data.phoneDescription,
      },
    ];
    console.log(newPhoneData, 'newPhoneData');

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
            Borrar
          </h2>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <h2 className='mt-3'>
            <RxExclamationTriangle
              className='text-red-500'
              size={30}
            />
          </h2>
          <p className=''>¿Estás seguro de que quieres borrar este telefono?</p>
          <p className=''>
            <span>{phoneDescription}: </span>
            <em>{phone.phoneNumber}</em>
          </p>
        </div>
        <div className='flex items-center justify-end mt-4 gap-4'>
          <button className='bg-red-500 py-2 px-4 rounded-lg text-neutral-100'>
            Confirmar
          </button>
          <button className='bg-gray-900 py-2 px-4 rounded-lg text-neutral-100'>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeletePhoneModal;
