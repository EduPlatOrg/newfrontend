import { useUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const AdminUserManagment = () => {
  const { allUsers } = useUser();
  console.log(allUsers);

  return (
    <div>
      {Array.isArray(allUsers) && allUsers.length > 0 ? (
        allUsers.map((user) => (
          <div
            key={user._id}
            className='flex items-center justify-start gap-3'>
            <Link to={`/public-profile/${user._id}`}>
              <p>{user.username}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default AdminUserManagment;