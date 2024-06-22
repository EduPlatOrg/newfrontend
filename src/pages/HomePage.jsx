import LandingRandomImage from '../components/LandingRandomImage';
import ShareSocials from '../components/ShareSocials';

import ConectButtons from '../components/ConectButtons';
import Promotores from '../components/Promotores';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
        }
      });
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => animatedElements.forEach((el) => observer.unobserve(el));
  }, []);
  return (
    <div className='w-full flex flex-col items-center justify-center mb-10'>
      <LandingRandomImage />
      <div className='w-full p-4 md:p-12 mt-3 md:mt-6 text-center block'>
        <span className='text-orange-300 font-bold text-3xl md:text-4xl lg:text-5xl'>
          E
        </span>
        <span className='font-bold text-3xl md:text-4xl  lg:text-5xl'>du</span>
        <span className='text-sky-500 font-bold text-3xl md:text-4xl lg:text-5xl'>
          P
        </span>
        <span className='font-bold text-3xl md:text-4xl lg:text-5xl'>
          lat.org
        </span>{' '}
        <span className='font-ligth text-3xl md:text-4xl lg:text-5xl'>
          es la <span className='text-sky-500 font-bold'>Plataforma</span>{' '}
          <span className='text-orange-300 font-bold '>Educativa</span> donde
          estudiantes, familias, escuelas, profesores y otros profesionales de
          la educación pueden colaborar compartiendo recursos.
        </span>
      </div>
      <div className='w-full flex h-[350px] '>
        <div className='w-full absolute flex h-[350px]'>
          <img
            className='w-full h-[350px] object-cover'
            src='/fondohome.webp'
            alt=''
          />
        </div>
        <p className='relative top-0 right-0 p-10 mt-28 text-center text-2xl md:text-2xl lg:text-4xl animate-on-scroll w-full'>
          Invitamos a profesores 👩🏻‍🏫👨🏻‍🏫🎓 a compartir 📚Recursos educativos y
          prácticas.
        </p>
      </div>
      <div className=' mt-6 '>
        <ConectButtons />
      </div>

      <div className='w-full  block h-[350px] mt-6 '>
        <div className='w-full absolute flex h-[350px]'>
          <img
            className='w-full h-[350px] object-cover'
            src='/fondohome.webp'
            alt=''
          />
        </div>
        <div className=' relative top-0 right-0 p-10 mt-28 text-center text-2xl md:text-2xl lg:text-4xl w-full'>
          <p className='h-fit animate-on-scroll'>
            Aprende, colabora, comparte y enseña
          </p>
          <button className='mt-4 bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-6 rounded-lg text-xs transition-all duration-200'>
            CONNECT
          </button>
        </div>
      </div>
      <div className='w-full h-[200px] flex items-center justify-center'>
        <ShareSocials />
      </div>
      <hr className='bg-gray-400 h-px w-full' />
      <div className='flex items-center justify-center w-full'>
        <Promotores />
      </div>
    </div>
  );
};

export default HomePage;
