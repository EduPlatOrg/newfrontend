import { useState } from 'react';
import { Modal } from '../Modal';
import { RxExclamationTriangle } from 'react-icons/rx';

const ManageKarmaModal = ({ isOpen, onClose, handleKarma }) => {
  const [karmaAmount, setKarmaAmount] = useState(0);
  return (
    <Modal
      isOpen={isOpen}
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
            onChange={(e) => setKarmaAmount(Number(e.target.value))}
          />
        </div>
        <div className='flex items-center justify-end mt-4 gap-4'>
          <button
            onClick={() => handleKarma(karmaAmount)}
            className='bg-blue-500 py-2 px-4 rounded-lg text-neutral-100'>
            Confirmar
          </button>
          <button
            onClick={onClose}
            className='bg-gray-900 py-2 px-4 rounded-lg text-neutral-100'>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ManageKarmaModal;
