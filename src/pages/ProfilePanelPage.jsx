import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import SideNavDashbordUser from '../components/profile/SideNavDashboardUser';

const ProfilePanelPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);
  return (
    <div className='flex overflow-hidden'>
      <div
        style={{
          position: 'fixed ',

          backgroundColor: 'rgb(243 244 246)',
        }}>
        <SideNavDashbordUser />
      </div>
      <section
        className='flex items-start w-full justify-center overflow-auto ml-[50px] md:ml-[80px]'
        style={{}}>
        <Outlet />
      </section>
    </div>
  );
};

export default ProfilePanelPage;
