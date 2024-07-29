import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import UserCard from './UserCard';

const AdminUserManagment = () => {
  const { allUsers } = useUser();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = allUsers.filter(user =>
    user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center justify-center min-w-[80%] mt-4'>
      <div className='w-full text-center py-4 text-xl font-bold'>
        Usuarios
      </div>
      <div className='w-full flex justify-center pt-2 pb-8'>
        <input
          type='text'
          placeholder='Buscar usuarios...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border rounded py-2 px-4 w-1/6'
        />
      </div>
      <div className='flex items-center justify-center flex-wrap gap-4 w-full'>
        {Array.isArray(filteredUsers) && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user._id} user={user} />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminUserManagment;