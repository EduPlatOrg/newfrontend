import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='flex m-auto min-h-[150px] bg-[#6366F1]'>

      <div className='flex-1 my-4 text-xl flex justify-center items-center'>
        <img src='../../public/images/LOGO-Eduplat-W.png' className='w-1/2' alt='Logo Eduplat' />
      </div>

      <div className='flex-1 text-white'>
        <h3 className='text-center my-4 text-2xl text-bold'>Síguenos</h3>
        <hr className='w-1/2 mx-auto h-0.5 bg-white my-4 '></hr>
        <div className='social-icons flex space-x-4 justify-center'>
        <a href='https://www.facebook.com/EduPlat.org/' aria-label='Facebook' className='text-white'>
          <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a href='https://x.com/eduplat_es/' aria-label='Twitter' className='text-white'>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
          </a>
          <a href='https://www.instagram.com/eduplat_org/' aria-label='Instagram' className='text-white'>
          <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a href='https://www.whasapp.com/' aria-label='WhatsApp' className='text-white'>
          <FontAwesomeIcon icon={faWhatsapp} size='2x' />
          </a>
          <a href='https://www.linkedin.com/company/eduplat/' aria-label='LinkedIn' className='text-white'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
        </div>
      </div>

      <div className='flex-1 text-white'>
        <h3 className='text-center my-4 text-2xl text-bold'>Recursos</h3>
        <hr className='w-1/2 mx-auto h-0.5 bg-white'></hr>
        <a href='terms-and-conditions' className='my-4 text-xl block text-center'>
          Plataforma educativa
        </a>
        <a href='terms-and-conditions' className='my-4 text-xl block text-center'>
          Ferias y otros eventos
        </a>
        <a href='terms-and-conditions' className='my-4 text-xl block text-center'>
          Colabora, participa y difunde
        </a>
      </div>

      <div className='flex-1 text-white'>
        <h3 className='text-center my-4 text-2xl text-bold'>Términos y condiciones</h3>
        <hr className='w-1/2 mx-auto h-0.5 bg-white'></hr>
        <a href='terms-and-conditions' className='my-4 text-xl block text-center'>
          Política de privacidad
        </a>
      </div>

      {/* TODO: Añadir debajo del footer */}
      {/* <div className='flex-1 text-white text-center'>
        © BienesDar.org {new Date().getFullYear()}. Todos los derechos reservados.
      </div> */}

    </div>

    );
  };

export default Footer;
