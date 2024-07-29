import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import UserCard from './UserCard';

const AdminUserManagment = () => {
  const { allUsers } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('alphabetical');

  const filteredUsers = allUsers.filter(
    (user) =>
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === 'alphabetical') {
      return a.firstname.localeCompare(b.firstname);
    } else if (sortOrder === 'karma') {
      return b.karma - a.karma;
    }
    return 0;
  });

  return (
    <div className='flex flex-col items-center justify-center min-w-[80%] mt-4'>
      <div className='w-full text-center py-4 text-xl font-bold'>Usuarios</div>
      <div className='w-full flex justify-center pt-2 pb-4'>
        <input
          type='text'
          placeholder='Buscar usuarios...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border rounded py-2 px-4 w-1/6'
        />
      </div>
      <div className='w-full flex justify-center pb-8'>
        <span className='text-xl font-semibold mr-4'>Ordenar por:</span>
        <div className='flex space-x-2'>
          <button
            onClick={() => setSortOrder('alphabetical')}
            className={`py-2 px-4 rounded-full border ${
              sortOrder === 'alphabetical'
                ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                : 'bg-white text-black border-gray-300'
            }`}>
            A-Z
          </button>
          <button
            onClick={() => setSortOrder('karma')}
            className={`py-2 px-4 rounded-full border ${
              sortOrder === 'karma'
                ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                : 'bg-white text-black border-gray-300'
            }`}>
            Karma
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center flex-wrap gap-4 w-full '>
        {Array.isArray(sortedUsers) && sortedUsers.length > 0 ? (
          sortedUsers.map((user) => (
            <UserCard
              key={user._id}
              user={user}
            />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminUserManagment;
