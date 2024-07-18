import { useParams } from 'react-router-dom';

import { Suspense, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import PublicProfileCard from '../components/PublicProfileCard';
import { getUserByIdRequest } from '../api/user';

const PublicProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  console.log(id);
  useEffect(() => {
    async function fetchUser() {
      const response = await getUserByIdRequest(id);
      console.log(response);
      setUser(response.data.user);
    }
    if (id) {
      fetchUser();
    } else {
      setUser({});
    }
  }, [id]);
  if (!user) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <PublicProfileCard userData={user} />
    </Suspense>
  );
};

export default PublicProfile;
