/* eslint-disable no-unused-vars */

import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from '../Modal';

import { toast } from 'sonner';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

const DeleteSocialModal = ({ isOpen, onClose, social, index }) => {
  const [socialIndex, setSocialIndex] = useState(index);

  const { user, editUserById, setUser } = useUser();

  const onSubmit = async () => {
    let newSocialData = user.social;
    newSocialData.splice(socialIndex, 1);
    try {
      const response = await editUserById(user?._id, {
        social: newSocialData,
      });

      if (response.status !== 200) {
        toast.error('Error al Eliminar red social');
        return;
      }
      setUser((prev) => ({ ...prev, social: newSocialData }));
      onClose();

      toast.success('Red Social eliminada con éxito');
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
          <p className=''>
            ¿Estás seguro de que quieres borrar esta red social?
          </p>
          <p className=''>
            <span>{social.media}: </span>
            <em>{social.user}</em>
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

export default DeleteSocialModal;
