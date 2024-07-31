import { Link } from 'react-router-dom';
import BanUserModal from './BanUserModal';
import { useState } from 'react';
import { toast } from 'sonner';
import { banUserRequest, manageKarmaRequest } from '../../api/user';
import { useUser } from '../../context/UserContext';
import UnBanUserModal from './UnBanUserModal';
import ManageKarmaModal from './ManageKarmaModal';

const UserCard = ({ user }) => {
  const [banUserModal, setBanUserModal] = useState(false);
  const [unBanUserModal, setUnBanUserModal] = useState(false);
  const [manageKarma, setManageKarma] = useState(false);
  const { getAllUsers } = useUser();

  //TODO: Implementar funcionalidad de añadir karma y banear

  const handleBan = async () => {
    try {
      const response = await banUserRequest(user?._id, { action: 'banUser' });
      if (response.status !== 200) {
        toast.error('Error al banear al usuario');
        return;
      }
      toast.success('Usuario baneado con éxito');
      await getAllUsers();
    } catch (error) {
      console.log(error);
      toast.error('Error al banear al usuario');
    } finally {
      setBanUserModal(false);
    }
  };
  const handleUnBan = async () => {
    try {
      const response = await banUserRequest(user?._id, { action: 'unBanUser' });
      if (response.status !== 200) {
        toast.error('Error al desbanear al usuario');
        return;
      }
      toast.success('Usuario desbaneado con éxito');
      await getAllUsers();
    } catch (error) {
      console.log(error);
      toast.error('Error al desbanear al usuario');
    } finally {
      setBanUserModal(false);
    }
  };
  const handleKarma = async (karma) => {
    const data = {
      id: user?._id,
      karma,
    };
    try {
      const response = await manageKarmaRequest(data);

      if (!response.data || response.status !== 200) {
        toast.error('Error al añadir karma');
        return;
      }
      toast.success('Karma añadido con éxito');
      await getAllUsers();
    } catch (error) {
      console.log(error);
      toast.error('Error al añadir karma');
    } finally {
      setManageKarma(false);
    }
  };
  return (
    <>
      {banUserModal && (
        <BanUserModal
          isOpen={banUserModal}
          onClose={() => setBanUserModal(false)}
          handleBan={handleBan}
          handleUnBan={handleUnBan}
          user={user}
        />
      )}
      {unBanUserModal && (
        <UnBanUserModal
          isOpen={unBanUserModal}
          onClose={() => setUnBanUserModal(false)}
          handleUnBan={handleUnBan}
          user={user}
        />
      )}
      {manageKarma && (
        <ManageKarmaModal
          isOpen={manageKarma}
          onClose={() => setManageKarma(false)}
          handleKarma={handleKarma}
        />
      )}

      <div className='flex items-center gap-2 max-w-[80%] md:flex-row flex-col shadow-xl flex-grow p-4'>
        <div className='flex items-center justify-center md:justify-start mr-2 p-4 min-w-fit'>
          <img
            className='rounded-full object-cover aspect-square w-[70px]'
            src={user?.picture}
            alt='picture'
          />
        </div>
        <div className='flex flex-col items-center md:items-start justify-center md:justify-start p-1 w-full flex-grow'>
          <div className='mb-1 inline-block text-center py-1 px-4 text-black rounded'>
            {user?.firstname} {user?.lastname}
          </div>
          <div className='mb-1 inline-block text-center py-1 px-4 text-black rounded'>
            {user?.email}
          </div>
          <div className='inline-block text-center py-1 px-4 text-black rounded'>
            Karma: {user?.karma}
          </div>
        </div>
        <div className='flex flex-col items-center justify-start w-fit '>
          <Link
            to={`/public-profile/${user?._id}`}
            className='mb-1 bg-[#3B82F6] hover:bg-blue-700 inline-block text-center py-1 px-4 text-white rounded w-full'>
            Visitar
          </Link>
          <button
            onClick={() => setManageKarma(true)}
            className='mb-1 bg-[#3B82F6] hover:bg-blue-700 inline-block text-center py-1 px-4 text-white rounded whitespace-nowrap w-fit'>
            Añadir karma
          </button>
          {user && user.isVerified ? (
            <button
              onClick={() => setBanUserModal(true)}
              className='bg-[#F87171] hover:bg-red-700 inline-block text-center py-1 px-4 text-white rounded w-full'>
              Banear
            </button>
          ) : (
            <button
              onClick={() => setUnBanUserModal(true)}
              className='bg-[#F87171] hover:bg-red-700 inline-block text-center py-1 px-4 text-white rounded w-full'>
              Desbanear
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserCard;
