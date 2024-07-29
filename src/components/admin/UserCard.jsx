import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className='flex items-center gap-2 w-[520px] md:flex-row flex-col shadow-xl'>
      <div className='flex items-center justify-center md:justify-start mr-2 p-4 min-w-fit'>
        <img
          className='rounded-full object-cover w-[70px]'
          src={user?.picture}
          alt='picture'
        />
      </div>
      <div className='flex flex-col items-center md:items-start justify-center md:justify-start p-1 w-full flex-grow'>
        <div className="mb-1 inline-block text-center py-1 px-4 text-black rounded">{user?.firstname} {user?.lastname}</div>
        <div className="mb-1 inline-block text-center py-1 px-4 text-black rounded">{user?.email}</div>
        <div className="inline-block text-center py-1 px-4 text-black rounded">Karma: {user?.karma}</div>
      </div>
      <div className='flex flex-col items-center justify-start w-fit mb-4'>
        <Link to={`/public-profile/${user?._id}`}
          className="mb-1 bg-[#3B82F6] hover:bg-blue-700 inline-block text-center py-1 px-4 text-white rounded w-full">
          Visitar
        </Link>
        <button
          type="button"
          className="mb-1 bg-[#3B82F6] hover:bg-blue-700 inline-block text-center py-1 px-4 text-white rounded whitespace-nowrap w-fit"
          onClick={() => {}}>
          Añadir karma
        </button>
        <button
          type="button"
          className="bg-[#F87171] hover:bg-red-700 inline-block text-center py-1 px-4 text-white rounded w-full">
          Banear
        </button>
      </div>
    </div>
  );
};

export default UserCard;
