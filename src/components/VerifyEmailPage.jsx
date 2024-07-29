import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import loader from '../assets/loader.gif';
import { useModal } from '../hooks/use-modal-store';
import { toast } from 'sonner';
const VerifyEmailPage = () => {
  const { verifyTokenRequest } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useParams();
  const { onOpen } = useModal();

  useEffect(() => {
    verifyTokenRequest(token);
    const interval = setInterval(() => {
      setIsLoading(false);
      navigate('/');
      toast.success('Email verified successfully');
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {isLoading && isLoading ? (
        <img
          className='w-full h-full object-cover'
          src={loader}
          alt='loader'
        />
      ) : (
        <div>
          <h1 className='text-2xl font-bold mb-4'>
            Your email has been verified
          </h1>
          <Link
            to='/'
            onClick={() => onOpen('login-form')}>
            <span className='text-indigo-500'>A Login</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default VerifyEmailPage;
