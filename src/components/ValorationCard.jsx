import { Rating } from 'react-simple-star-rating';
import { tiempoDesde } from '../lib/utils';
import { useUser } from '../context/UserContext';
import DeleteValorationModal from './DeleteValorationModal';
import { useState } from 'react';
import { toast } from 'sonner';
import { acceptValoration, rejectValoration } from '../api/valorations';

const ValorationCard = ({ valoration, id, onNewValoration }) => {
  const { user } = useUser();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleRejectValoration = async () => {
    const response = await rejectValoration(valoration);
    if (response.status === 200) {
      if (response?.data.user) {
        onNewValoration(response.data.user);
        toast.success('Valoración rechazada correctamente');
        return;
      }
      if (response?.data.resource) {
        onNewValoration(response.data.resource);
        toast.success('Valoración rechazada correctamente');
        return;
      }
    }
    toast.error('Error al rechazar la valoración');
  };

  const handleAcceptValoration = async () => {
    const response = await acceptValoration(valoration);
    if (response.status === 200) {
      if (response?.data.user) {
        onNewValoration(response.data.user);
        toast.success('Valoración aceptada correctamente');
        return;
      }
      if (response?.data.resource) {
        onNewValoration(response.data.resource);
        toast.success('Valoración aceptada correctamente');
        return;
      }
    }
    toast.error('Error al aceptar la valoración');
  };
  return (
    <>
      {showDeleteModal && (
        <DeleteValorationModal
          onNewValoration={onNewValoration}
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          valoration={valoration}
        />
      )}
      {valoration.accepted && !valoration.rejected && (
        <div className='w-full flex flex-col p-4 bg-white shadow-lg rounded-lg mt-2'>
          <div className='flex items-start justify-start gap-4 w-full'>
            <img
              src={valoration.senderId.picture}
              alt='User'
              className='w-8 h-8 rounded-full object-cover'
            />
            <div className='text-start '>
              <p className='text-xs md:text-lg font-semibold'>
                {valoration.senderId.firstname} {valoration.senderId.lastname}
              </p>
              <p className='text-xs md:text-sm text-gray-500'>
                {valoration.senderId.email}
              </p>
            </div>
          </div>
          <div className='flex items-center gap-6 pt-2'>
            <Rating
              SVGclassName={`inline-block`}
              initialValue={valoration.rating}
              transition
              size={18}
              readonly={true}
            />
            <p className='text-xs md:text-sm'>
              Hace {tiempoDesde(valoration.date)}
            </p>
          </div>
          <p className='text-start text-xs md:text-lg text-gray-600 mt-2'>
            {valoration.comment}
          </p>
          <div className='w-full flex justify-end mt-4 gap-3'>
            {user !== null &&
              (user._id === valoration.senderId._id || user.isBoss) && (
                <button
                  className='text-xs md:text-sm text-red-500  hover:bg-red-500 hover:text-white px-2 py-1 hover:rounded-md'
                  onClick={() => setShowDeleteModal(true)}>
                  Eliminar
                </button>
              )}
            {user !== null && user._id === id && (
              <button
                className='text-xs md:text-sm text-red-500  hover:bg-red-500 hover:text-white px-2 py-1 hover:rounded-md'
                onClick={handleRejectValoration}>
                Reject
              </button>
            )}
          </div>
        </div>
      )}
      {!valoration.accepted && user && user._id === id && (
        <div className='w-full flex flex-col p-4 bg-white shadow-lg rounded-lg mt-2'>
          <div className='flex items-start justify-start gap-4 w-full'>
            <img
              src={valoration.senderId.picture}
              alt='User'
              className='w-8 h-8 rounded-full object-cover'
            />
            <div className='text-start '>
              <p className='text-xs md:text-lg font-semibold'>
                {valoration.senderId.firstname} {valoration.senderId.lastname}
              </p>
              <p className='text-xs md:text-sm text-gray-500'>
                {valoration.senderId.email}
              </p>
            </div>
          </div>
          <div className='flex items-center gap-6 pt-2'>
            <Rating
              SVGclassName={`inline-block`}
              initialValue={valoration.rating}
              transition
              size={18}
              readonly={true}
            />
            <p className='text-xs md:text-sm'>
              Hace {tiempoDesde(valoration.date)}
            </p>
          </div>
          <p className='text-start text-xs md:text-lg text-gray-600 mt-2'>
            {valoration.comment}
          </p>
          <div className='w-full flex justify-end mt-4 gap-3'>
            {user !== null &&
              (user._id === valoration.senderId._id || user.isBoss) && (
                <button
                  className='text-xs md:text-sm text-red-500  hover:bg-red-500 hover:text-white px-2 py-1 hover:rounded-md'
                  onClick={() => setShowDeleteModal(true)}>
                  Eliminar
                </button>
              )}
            {user !== null && user._id === id && (
              <button
                className='text-xs md:text-sm text-white hover:bg-black rounded-md bg-gray-500 hover:text-white 
              px-2 py-1 hover:rounded-md whitespace-nowrap'
                onClick={handleAcceptValoration}>
                Aceptar Valoración
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ValorationCard;
