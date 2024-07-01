/* eslint-disable react-hooks/exhaustive-deps */

import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from '../Modal';
import { useModal } from '../../hooks/use-modal-store';
import { toast } from 'sonner';
import { deletEventRequest } from '../../api/events';
import useEventStore from '../../hooks/use-events-store';

const DeleteEventModal = () => {
  const { isOpen, onClose, type, modalData } = useModal();
  const isModalOpen = isOpen && type === 'delete-event';
  const { deleteEvent } = useEventStore();
  const onSubmit = async () => {
    try {
      const response = await deletEventRequest(modalData.event._id);
      if (response.data.success) {
        onClose();
        deleteEvent(modalData.event._id);
        toast.success('Evento borrado con éxito');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error al borrar el evento');
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <div className='flex flex-col items-center gap-3'>
          <h2 className='mt-3'>
            <RxExclamationTriangle
              className='text-red-500'
              size={30}
            />
          </h2>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Borrar
            </h2>
          </div>
          <p className=''>¿Estás seguro de que quieres borrar este evento?</p>
          <p className=''>
            <span>{modalData?.event?.title} </span>
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

export default DeleteEventModal;
