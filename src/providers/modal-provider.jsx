import { useState, useEffect } from 'react';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import ForgotPasswordModal from '../components/ForgotPassword';
import QuieroColaborarModal from '../components/QuieroColaborarModal';
import DeleteEventModal from '../components/admin/DeleteEventModal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <ForgotPasswordModal />
      <QuieroColaborarModal />
      <DeleteEventModal />
    </>
  );
};
