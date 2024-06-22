import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex m-auto min-h-[150px] bg-[#6366F1] px-4 justify-center'>
      <div className='flex-1 my-4 text-xl flex justify-center items-center px-20'>
        <Link to='/'>
          <img
            src='/images/LOGO-Eduplat-W.png'
            className=' w-1/2'
            alt='Logo Eduplat'
          />
        </Link>
      </div>

      <div className='flex-1 text-white'>
        <h3 className='text-center my-4 text-xl text-bold'>Síguenos</h3>
        <hr className='w-1/2 mx-auto h-0.5 bg-white my-4 '></hr>
        <div className='social-icons flex space-x-2 justify-center'>
          <a
            href='https://www.facebook.com/EduPlat.org/'
            aria-label='Facebook'
            className='text-white'
            target='_blank'>
            <FontAwesomeIcon
              icon={faFacebook}
              size='2x'
            />
          </a>
          <a
            href='https://x.com/eduplat_es/'
            aria-label='Twitter'
            className='text-white'
            target='_blank'>
            <FaSquareXTwitter size={32} />
          </a>
          <a
            href='https://www.instagram.com/eduplat_org/'
            aria-label='Instagram'
            className='text-white'
            target='_blank'>
            <FontAwesomeIcon
              icon={faInstagram}
              size='2x'
            />
          </a>
          <a
            href='https://www.whasapp.com/'
            aria-label='WhatsApp'
            className='text-white'>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size='2x'
            />
          </a>
          <a
            href='https://www.linkedin.com/company/eduplat/'
            aria-label='LinkedIn'
            className='text-white'
            target='_blank'>
            <FontAwesomeIcon
              icon={faLinkedin}
              size='2x'
            />
          </a>
        </div>
      </div>

      <div className='flex-1 text-white'>
        <h3 className='text-center my-4 text-xl text-bold'>Recursos</h3>
        <hr className='w-1/2 mx-auto h-0.5 bg-white'></hr>
        <Link
          to='/terms-and-conditions'
          className='my-1 text-lg block text-center'>
          Plataforma educativa.
        </Link>
        <Link
          to='/terms-and-conditions'
          className='my-1 text-lg block text-center'>
          Ferias y otros eventos.
        </Link>
        <Link
          to='/como-colaborar'
          className='my-1 text-lg block text-center'>
          Colabora, participa y difunde.
        </Link>
      </div>

      <div className='flex-1 text-white'>
        <h3 className='text-center my-4 text-xl text-bold'>
          Términos y condiciones
        </h3>
        <hr className='w-1/2 mx-auto h-0.5 bg-white'></hr>
        <Link
          to='/terms-and-conditions'
          className='my-1 text-lg block text-center'>
          Política de privacidad.
        </Link>
      </div>

      {/* TODO: Añadir debajo del footer */}
      {/* <div className='flex-1 text-white text-center'>
        © BienesDar.org {new Date().getFullYear()}. Todos los derechos reservados.
      </div> */}
    </div>
  );
};

export default Footer;
