/* eslint-disable no-unused-vars */

import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from '../Modal';

import { toast } from 'sonner';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

const DeleteEmailModal = ({ isOpen, onClose, email, index }) => {
  const [emailIndex, setEmailIndex] = useState(index);

  const { user, editUserById, setUser } = useUser();

  const onSubmit = async () => {
    let newEmailData = [...user.emails];
    newEmailData.splice(emailIndex, 1);
    try {
      const response = await editUserById(user?._id, {
        emails: newEmailData,
      });
      console.log(response, 'response');
      if (response.status !== 200) {
        toast.error('Error al Eliminar el Email');
        return;
      }
      setUser((prev) => ({ ...prev, emails: newEmailData }));
      onClose();

      toast.success('Email Eliminado con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Algo salió mal');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
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
          <p className=''>¿Estás seguro de que quieres borrar este email?</p>
          <p className=''>
            <span>{email.emailDescription}: </span>
            <em>{email.emailUrl}</em>
          </p>
        </div>
        <div className='flex items-center justify-end mt-4 gap-4'>
          <button
            onClick={onSubmit}
            className='bg-red-500 py-2 px-4 rounded-lg text-neutral-100'>
            Confirmar
          </button>
          <button
            onClick={() => onClose()}
            className='bg-gray-900 py-2 px-4 rounded-lg text-neutral-100'>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEmailModal;
