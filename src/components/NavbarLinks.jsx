import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

// Componente con enlaces a Feria de recursos educativos: objetivos, programa, colaboradores, patrocinadores, inscripciones
// Erasmus cofinanciado : https://eduplat.org/es/erasmus-cofinanciado/ --- http://www.erasmusplus.gob.es/ ---
// TODO: Hay que añadir el destino correspondiente a cada enlace!!!

const NavbarLinks = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú desplegable móvil

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linksClassNames =
    'text-gray-200 w-full p-1 rounded-b-sm text-sm flex justify-center items-center text-center font-medium hover:bg-[#FE9A00]';

  return (
    <>
      <nav className='w-full bg-indigo-500'>
        <div className='hidden md:block w-full '>
          {/* pantallas grandes */}
          <div className=' w-full h-full flex justify-between '>
            <Link
              to='/FRREE'
              className={linksClassNames}>
              FRREE
            </Link>

            <Link
              to='/objetivos'
              className={linksClassNames}>
              Objetivos
            </Link>

            <Link
              to='/'
              className={linksClassNames}>
              Programa Eventos
              <br />
              (Fechas)
            </Link>

            <Link
              to='/colaboradores'
              className={linksClassNames}>
              Colaboradores
            </Link>

            <Link
              to='/patrocinadores'
              className={linksClassNames}>
              Patrocinadores
            </Link>

            <Link
              to='/inscripciones'
              className={linksClassNames}>
              Inscripciones
            </Link>

            <Link
              to='/erasmus-cofinanciado'
              className={linksClassNames}>
              Erasmus-Cofinanciado
            </Link>
          </div>
        </div>

        {/* Menú desplegable móvil */}

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

        <div
          className={clsx(`md:hidden`, isOpen ? 'flex flex-col ' : 'hidden')}>
          <Link
            to='/'
            className={linksClassNames}>
            FREE
          </Link>
          <Link
            to='/'
            className={linksClassNames}>
            Objetivos
          </Link>

          <Link
            to='/'
            className={linksClassNames}>
            Programa Eventos
            <br />
            (Fechas)
          </Link>
          <Link
            to='/'
            className={linksClassNames}>
            Colaboradores
          </Link>

          <Link
            to='/'
            className={linksClassNames}>
            Patrocinadores
          </Link>

          <Link
            to='/'
            className={linksClassNames}>
            Inscripciones
          </Link>

          <Link
            to='/'
            className={linksClassNames}>
            Erasmus-Cofinanciado
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarLinks;
