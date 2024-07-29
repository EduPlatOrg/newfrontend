import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from '../Modal';
import { useModal } from '../../hooks/use-modal-store';
import { toast } from 'sonner';
import useUserStore from '../../hooks/use-user-store';
import { useState } from 'react';

const AddKarmaModal = () => {
  const { isOpen, onClose, type, modalData } = useModal();
  const isModalOpen = isOpen && type === 'add-karma';
  const { addKarma } = useUserStore();
  const [karmaAmount, setKarmaAmount] = useState(0);

  const onSubmit = async () => {
    try {
      if (karmaAmount <= 0) {
        toast.error('Introduce una cantidad válida de karma');
        return;
      }
      await addKarma(modalData.user._id, karmaAmount);
      onClose();
      toast.success('Karma añadido con éxito');
    } catch (error) {
      console.log(error);
      toast.error('Error al añadir karma');
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
              className='text-blue-500'
              size={30}
            />
          </h2>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Añadir Karma
            </h2>
          </div>
          <p className=''>¿Cuánto karma quieres añadir?</p>
          <input
            type='number'
            className='border border-gray-300 rounded-lg p-2 mt-2'
            value={karmaAmount}
            onChange={(e) => setKarmaAmount(Number(e.target.value))}
          />
        </div>
        <div className='flex items-center justify-end mt-4 gap-4'>
          <button
            onClick={onSubmit}
            className='bg-blue-500 py-2 px-4 rounded-lg text-neutral-100'>
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

export default AddKarmaModal;
