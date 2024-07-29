/* eslint-disable no-unused-vars */

import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from '../Modal';

import { toast } from 'sonner';
import { useUser } from '../../context/UserContext';

const DeletePhoneModal = ({ isOpen, onClose, phone }) => {
  const { user, editUserById, setUser } = useUser();

  const onSubmit = async () => {
    let newPhoneData = [];
    for (let i = 0; i < user.phones.length; i++) {
      if (
        user.phones[i].phoneNumber !== phone.phoneNumber ||
        user.phones[i].phoneDescription !== phone.phoneDescription
      ) {
        newPhoneData.push(user.phones[i]);
      }
    }
    try {
      const response = await editUserById(user?._id, {
        phones: newPhoneData,
      });

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
          <p className=''>¿Estás seguro de que quieres borrar este telefono?</p>
          <p className=''>
            <span>{phone.phoneDescription}: </span>
            <em>{phone.phoneNumber}</em>
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

export default DeletePhoneModal;
