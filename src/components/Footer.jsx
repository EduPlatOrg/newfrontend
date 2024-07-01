import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [isAdminPage, setIsAdminPage] = useState(false);

  useEffect(() => {
    const isAdminRoute = location.pathname.includes('/admin-panel');
    setIsAdminPage(isAdminRoute);
  }, [location]);
  return (
    <>
      {!isAdminPage && (
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='flex flex-col md:flex-row m-auto pl-10 md:pl-0 bg-[#6366F1] px-2 md:px-4 justify-center w-full'>
            <div className='flex-1 my-4 flex justify-center items-center px-20'>
              <Link to='/'>
                <div className='flex-1 items-center justify-center'>
                  <img
                    className='w-[170px] md:w-[350px] h-auto'
                    src='/images/LOGO-Eduplat-W.png'
                    alt='LOGO'
                  />
                </div>
              </Link>
            </div>

            <div className='flex-1 text-white md:my-4 md:mx-4'>
              <h3 className='text-center my-4 text-xs sm:text-lg md:text-xl'>
                Síguenos
              </h3>
              <hr className='w-1/2 mx-auto h-0.5 bg-white my-4 '></hr>
              <div className='social-icons flex space-x-2 justify-center'>
                <a
                  href='https://www.facebook.com/EduPlat.org/'
                  aria-label='Facebook'
                  className='text-white hover:text-[#EEEDF0] text-xs md:text-lg'
                  target='_blank'>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size='2x'
                  />
                </a>
                <a
                  href='https://x.com/eduplat_es/'
                  aria-label='Twitter'
                  className='text-white hidden md:block hover:text-[#EEEDF0] text-xs md:text-lg'
                  target='_blank'>
                  <FaSquareXTwitter size={36} />
                </a>
                <a
                  href='https://x.com/eduplat_es/'
                  aria-label='Twitter'
                  className='text-white md:hidden hover:text-[#EEEDF0] text-xs md:text-lg'
                  target='_blank'>
                  <FaSquareXTwitter size={26} />
                </a>
                <a
                  href='https://www.instagram.com/eduplat_org/'
                  aria-label='Instagram'
                  className='text-white hover:text-[#EEEDF0] text-xs md:text-lg'
                  target='_blank'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='2x'
                  />
                </a>
                <a
                  href='https://www.whatsapp.com/'
                  aria-label='WhatsApp'
                  className='text-white hover:text-[#EEEDF0] text-xs md:text-lg'
                  target='_blank'>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size='2x'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/company/eduplat/'
                  aria-label='LinkedIn'
                  className='text-white hover:text-[#EEEDF0] text-xs md:text-lg '
                  target='_blank'>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size='2x'
                  />
                </a>
              </div>
            </div>

            <div className='flex-1 text-white mt-4 mx-4 mb-0 md:mb-4'>
              <h3 className='text-center my-4 text-xs sm:text-lg md:text-xl'>
                Recursos
              </h3>
              <hr className='w-1/2 mx-auto h-0.5 bg-white'></hr>
              <Link
                to='/recursos-educativos'
                className='my-1 block text-center hover:text-[#EEEDF0 text-xs sm:text-lg md:text-base'>
                Plataforma educativa.
              </Link>
              <Link
                to='/terms-and-conditions'
                className='my-1 block text-center hover:text-[#EEEDF0] text-xs sm:text-lg md:text-base'>
                Ferias y otros eventos.
              </Link>
              <Link
                to='/como-colaborar'
                className='my-1 block text-center hover:text-[#EEEDF0] text-xs sm:text-lg md:text-base'>
                <p>Colabora, participa y difunde.</p>
              </Link>
            </div>

            <div className='flex-1 text-white my-4 ml-4 mr-8'>
              <h3 className='text-center my-4 text-xs sm:text-lg md:text-xl'>
                Términos y condiciones
              </h3>
              <hr className='w-1/2 mx-auto h-0.5 bg-white'></hr>
              <Link
                to='/terms-and-conditions'
                className='my-1 block text-center hover:text-[#EEEDF0] text-xs sm:text-lg md:text-base'>
                Política de privacidad.
              </Link>
              <Link
                to='/FAQ'
                className='my-1 block text-center hover:text-[#EEEDF0] text-xs sm:text-lg md:text-base'>
                FAQ.
              </Link>
            </div>
          </div>

          <div className='w-full text-xs pl-10 text-center py-4 text-white bg-[#262626]'>
            BienesDar.org © {new Date().getFullYear()}. Todos los derechos
            reservados.
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
