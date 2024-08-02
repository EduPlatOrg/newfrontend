import { useEffect, useState } from 'react';

import { useUser } from '../../context/UserContext';
import Loader from '../Loader';
import { getOwnComments } from '../../api/user';
import ManageValorationCard from '../ManageValorationCard';
import clsx from 'clsx';

const MyComments = () => {
  const [comments, setComments] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && user._id) {
      const fetchOwnComments = async () => {
        setLoading(true);
        const response = await getOwnComments();
        console.log(response);
        console.log(response.data);
        if (response.status === 200) {
          setComments(response.data);
        }
        setLoading(false);
      };
      fetchOwnComments();
    }
  }, [user]);

  const handleComments = async (id) => {
    const newComments = comments.filter((comment) => comment._id !== id);
    setComments(newComments);
  };
  return (
    <>
      {loading && <Loader />}
      <div className='flex flex-col w-full items-center p-2 '>
        <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
          Manejo de mis comentarios Privados.
        </h1>
        <div className={clsx('w-full pl-8 mt-8')}>
          {comments?.length === 0 && <p>No tienes comentarios pendientes</p>}
          {comments.map((comment) => (
            <ManageValorationCard
              key={comment._id}
              valoration={comment}
              onNewValoration={handleComments}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyComments;
