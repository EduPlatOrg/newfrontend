/* eslint-disable no-unused-vars */

import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from './Modal';
import { toast } from 'sonner';
import { deleteValoration } from '../api/valorations';
import { useNavigate } from 'react-router-dom';

const DeleteValorationModal = ({
  isOpen,
  onClose,
  valoration,
  onNewValoration,
}) => {
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const response = await deleteValoration(valoration);
      const responseValoration = response.data;

      if (response.status === 200) {
        toast.success('Valoración borrada correctamente');
        //TODO CHANGE THIS FOR resource or user
        if (responseValoration.resource) {
          onClose();
          onNewValoration(responseValoration.resource);
          return;
        }
        if (responseValoration.user) {
          onNewValoration(responseValoration.user);
          navigate(`/public-profile/${responseValoration.user._id}`);
          onClose();

          return;
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al borrar la valoración');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='w-full flex items-center justify-center'>
            <RxExclamationTriangle
              className='text-red-500'
              size={30}
            />
          </h2>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Borrar
          </h2>
          <p className=''>
            ¿Estás seguro de que quieres borrar este valoracion?
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

export default DeleteValorationModal;
