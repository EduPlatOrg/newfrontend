import { RxExclamationTriangle } from 'react-icons/rx';
import { Modal } from '../Modal';

const UnBanUserModal = ({ isOpen, onClose, handleBan, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8'>
        <div className='flex flex-col items-center gap-3'>
          <h2 className='mt-3'>
            <RxExclamationTriangle
              className='text-green-500'
              size={30}
            />
          </h2>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className=' text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Borrar
            </h2>
          </div>
          <p className=''>
            ¿Estás seguro de que quieres desbannear a este usuario?
          </p>
          <p className=''>
            <span>{user?.email} </span>
          </p>
        </div>
        <div className='flex items-center justify-end mt-4 gap-4'>
          <button
            onClick={handleBan}
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

export default UnBanUserModal;
