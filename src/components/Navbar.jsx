import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import clsx from 'clsx';

import { useModal } from '../hooks/use-modal-store';
import UserButton from './UserButton';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  //TODO: Add the name and surname of user in the navbar
  const { isAuthenticated, logOutUser, user } = useUser();
  console.log(user, '<-- user en Navbar');
  const { onOpen } = useModal();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú desplegable móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav
        className='w-full md:flex items-center justify-between p-3 gap-3 bg-indigo-500 border-b-2 border-gray-300 hidden  
      sticky top-0 right-0 z-30 '>
        <div className='flex flex-col items-center justify-center z-20'>
          <Link to='/'>
            <div className='flex items-center justify-center gap-3'>
              <img
                className='w-[220px] h-auto ml-[20px]'
                src='/images/LOGO-Eduplat-W.png'
                alt='LOGO'
              />
            </div>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 z-20'>
          <div className='flex items-center justify-end gap-3 w-full mr-8'>
            {!isAuthenticated ? (
              <>
                <button onClick={() => onOpen('login-form')}>
                  <p
                    className='text-gray-200  text-sm py-1 px-2 rounded-md 
                 hover:bg-gray-300 hover:text-gray-800 shadow-sm '>
                    SignIn
                  </p>
                </button>
                <button onClick={() => onOpen('register-form')}>
                  <p
                    className='text-gray-200  text-sm py-1 px-2 rounded-md 
                 hover:bg-gray-300 hover:text-gray-800 shadow-sm '>
                    SignUp
                  </p>
                </button>
              </>
            ) : (
              <div className='flex flex-col w-full  '>
                <div className='flex items-center gap-2 justify-end'>
                  {' '}
                  <p className='text-sm text-gray-200'>
                    Bienvenido: <em> {user?.firstname}</em>
                  </p>
                  <UserButton />
                </div>
                <div className='text-gray-200'>
                  <div className='hidden  md:flex w-full items-center justify-end'>
                    {/* Espacios adicionales aquí para links visibles siempre excepto en móvil */}
                    <Link
                      to='/'
                      className='text-gray-200 px-3 py-2 rounded-md text-sm font-medium'>
                      Home
                    </Link>
                    <Link
                      to='/about'
                      className='text-gray-200 px-3 py-2 rounded-md text-sm font-medium'>
                      Acerca de Nosotros
                    </Link>
                    <Link
                      to='/contact'
                      className='text-gray-200 px-3 py-2 rounded-md text-sm font-medium'>
                      Contactar
                    </Link>
                    <button
                      onClick={toggleDropdown}
                      className='text-gray-200 px-3 py-2 rounded-md text-sm font-medium relative'>
                      Ferias y Eventos
                    </button>
                    {isDropdownOpen && (
                      <ul className='absolute bg-white shadow-md rounded-md mt-2 py-1 w-48 text-gray-700 top-[86px] -right-4'>
                        <li
                          className='px-4 py-2 hover:bg-gray-100'
                          onClick={() => navigate('/')}>
                          Objetivos
                        </li>
                        <li
                          className='px-4 py-2 hover:bg-gray-100'
                          onClick={() => navigate('/')}>
                          Programa Eventos
                        </li>
                        <li
                          className='px-4 py-2 hover:bg-gray-100'
                          onClick={() => navigate('/colaboradores')}>
                          Colaboradores
                        </li>
                        <li
                          className='px-4 py-2 hover:bg-gray-100'
                          onClick={() => navigate('/')}>
                          Patrocinadores
                        </li>
                        <li
                          className='px-4 py-2 hover:bg-gray-100'
                          onClick={() => navigate('/')}>
                          Inscripciones
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav className='w-full bg-indigo-500 border-b-2 border-gray-300 md:hidden block sticky top-0 right-0 z-30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <div className='flex-shrink-0 flex items-center'>
                <Link
                  to='/'
                  className='flex items-center gap-2'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src='/images/LOGO-Eduplat-W.png'
                    alt='LOGO'
                  />
                </Link>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <button
                  onClick={toggleMenu}
                  className='inline-flex items-center justify-center p-2 rounded-md
                   focus:outline-none 
                 focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden'>
                  <span className='sr-only'>Open main menu</span>
                  {/* Icono de menú hamburguesa */}
                  <svg
                    className='block h-6 w-6 text-gray-200'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        <div className={clsx(`md:hidden`, isOpen ? 'block' : 'hidden')}>
          <div className='px-2 pt-2 pb-3 space-y-1 z-20'>
            <Link
              to='/'
              className='text-gray-200 block px-3 py-2 rounded-md text-base font-medium'
              onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to='/about'
              className='text-gray-200 block px-3 py-2 rounded-md text-base font-medium'
              onClick={toggleMenu}>
              Acerca de Nosotros
            </Link>
            <Link
              to='/contact'
              className='text-gray-200 block px-3 py-2 rounded-md text-base font-medium'
              onClick={toggleMenu}>
              Contactar
            </Link>
            <button
              onClick={toggleDropdown}
              className='text-gray-200 px-3 py-2 rounded-md text-base font-base font-medium'>
              Ferias y Eventos
            </button>
            {isDropdownOpen && (
              <ul className='absolute bg-indigo-600 shadow-md rounded-md mt-2 py-1 w-48'>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/');
                  }}>
                  Objetivos
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/');
                  }}>
                  Programa eventos
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/colaboradores');
                  }}>
                  Colaboradores
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/');
                  }}>
                  Patrocinadores
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 text-gray-200'
                  onClick={() => {
                    toggleMenu();
                    toggleDropdown();
                    navigate('/');
                  }}>
                  Inscripciones
                </li>
              </ul>
            )}

            {!isAuthenticated && (
              <>
                <button
                  onClick={() => {
                    toggleMenu();
                    onOpen('login-form');
                  }}
                  className='text-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium'>
                  SingIn
                </button>
                <button onClick={() => onOpen('register-form')}>
                  <p className='text-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium'>
                    SignUp
                  </p>
                </button>
              </>
            )}

            {isAuthenticated && (
              <>
                <Link
                  to='/profile-panel'
                  className='text-gray-200 block px-3 py-2 rounded-md text-base
                  font-medium'
                  onClick={() => setIsOpen(!isOpen)}>
                  {' '}
                  User Panel
                </Link>

                <button
                  onClick={() => {
                    logOutUser();
                    toggleMenu();
                    navigate('/');
                  }}
                  className='text-gray-200 block w-full text-left px-3 py-2 rounded-md text-base font-medium'>
                  LogOut
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
