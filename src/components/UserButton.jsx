import { useState, useRef, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { LuUser } from 'react-icons/lu';
import { TbLogout } from 'react-icons/tb';
import { useUser } from '../context/UserContext';

const UserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = useUser();
  const [initials, setInitials] = useState('');
  const navigate = useNavigate();

  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    setInitials(
      user?.firstname?.charAt(0).toUpperCase() +
        user?.lastname?.charAt(0).toUpperCase()
    );
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className='relative group'
      ref={node}>
      <div
        className='bg-gray-200 rounded-full h-8 w-8 p-3 flex items-center justify-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}>
        {initials}
      </div>
      {isOpen ? (
        <div
          className='absolute top-8 right-0 rounded-md
        flex flex-col items-start w-[170px] text-sm bg-white p-2 transition-all duration-300 ease-in-out transform scale-100'>
          <Link
            to='/profile-panel'
            className='w-full'>
            <button
              className='py-1 px-3 my-1 text-gray-700 
              rounded-md w-full text-start hover:text-white hover:bg-[#0e2235] flex items-center gap-2 '
              onClick={() => setIsOpen(!isOpen)}>
              <LuUser />
              User Panel
            </button>
          </Link>
          {user.isBoss && (
            <Link
              to='/admin-panel'
              className='w-full'>
              <button
                className='py-1 px-3 my-1 text-gray-700 
                rounded-md w-full text-start hover:text-white hover:bg-[#0e2235]  flex items-center gap-2 '
                onClick={() => setIsOpen(!isOpen)}>
                {' '}
                <MdOutlineAdminPanelSettings />
                Admin Panel
              </button>
            </Link>
          )}
          <button
            onClick={() => {
              logOutUser();
              setIsOpen(false);
              navigate('/');
            }}
            className='py-1 px-3 my-1 text-gray-700 rounded-md 
            w-full text-start hover:text-white hover:bg-[#0e2235]  flex items-center gap-2  '>
            <TbLogout />
            LogOut
          </button>
        </div>
      ) : (
        <div
          className='absolute top-8 right-0 rounded-md
        flex flex-col items-start w-[150px] text-sm bg-white p-2 transition-all duration-200 ease-in-out transform scale-0'>
          <button className='py-1 px-3 my-1 text-gray-700 rounded-md w-full text-start hover:text-white hover:bg-[#0e2235] '>
            User Panel
          </button>
          {user.isAdmin && (
            <Link to='/admin-panel'>
              <button className='py-1 px-3 my-1 text-gray-700 rounded-md w-full text-start hover:text-white hover:bg-[#0e2235] '>
                <p>Admin Panel</p>
              </button>
            </Link>
          )}
          <button
            onClick={() => {
              logOutUser();
              setIsOpen(false);
              navigate('/');
            }}
            className='py-1 px-3 my-1 text-gray-700 rounded-md w-full text-start hover:text-white hover:bg-[#0e2235] '>
            <p>LogOut</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
