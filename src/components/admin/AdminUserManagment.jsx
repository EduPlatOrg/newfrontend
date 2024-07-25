import { useModal } from '../../hooks/use-modal-store';
import { Link } from 'react-router-dom';

const UserCard = ({ allUsers }) => {
  const { openModal } = useModal();

  if (!allUsers || allUsers.length === 0) {
    return <div className="p-4 border border-gray-200 rounded-lg m-2">No hay usuarios</div>;
  }

  return (
    <div className='grid grid-cols-1 gap-4 mt-4'>
      {allUsers.map((user) => (
        <div
          key={user._id}
          className='grid grid-cols-1 md:grid-cols-3 gap-2 p-4 border border-gray-200 rounded-lg m-2'>
          <div className='flex items-center justify-start mr-2'>
            <img
              className='w-12 h-12 rounded-full object-cover'
              src={user?.picture}
              alt='picture' 
            />               
            {/* CENTRAR FOTO, ACERCAR AL DIV */}
          </div>
          <div className='flex flex-col items-start justify-start p-1'>
            <div className="mb-1 inline-block text-center py-1 px-4 text-black rounded">{user?.firstname} {user?.lastname}</div>
            <div className="mb-1 inline-block text-center py-1 px-4 text-black rounded">{user?.email}</div>
            <div className="inline-block text-center py-1 px-4 text-black rounded">Karma: {user?.karma}</div>
          </div>
          <div className='flex flex-col items-center justify-start'>
            <Link to={`/public-profile/${user?._id}`} className="mb-1 bg-blue-600 inline-block text-center py-1 px-4 text-white rounded">
              Visitar
            </Link>
            <button
              type="button"
              className="mb-1 bg-blue-600 inline-block text-center py-1 px-4 text-white rounded"
              onClick={() => openModal('add-karma', { user })}>
              Añadir karma
            </button>
            <button type="button" className="bg-red-600 inline-block text-center py-1 px-4 text-white rounded">Banear</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
