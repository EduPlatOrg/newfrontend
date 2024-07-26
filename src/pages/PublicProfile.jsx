import { useParams } from 'react-router-dom';

import { Suspense, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import PublicProfileCard from '../components/PublicProfileCard';
import { getUserByIdRequest } from '../api/user';

const PublicProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await getUserByIdRequest(id);

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

  const onNewValoration = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Suspense fallback={<Loader />}>
      <PublicProfileCard
        userData={user}
        onNewValoration={onNewValoration}
      />
    </Suspense>
  );
};

export default PublicProfile;
