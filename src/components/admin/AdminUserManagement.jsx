import { useUser } from '../../context/UserContext';

import UserCard from './UserCard';

const AdminUserManagment = () => {
  const { allUsers } = useUser();
  console.log(allUsers);

  return (
    <div className='flex items-center justify-center flex-wrap gap-4 min-w-[80%] mt-4'>
      
      {Array.isArray(allUsers) && allUsers.length > 0 ? (
        allUsers.map((user) => (
          <UserCard key={user._id} user={user} />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default AdminUserManagment;