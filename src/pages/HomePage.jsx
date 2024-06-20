import LandingRandomImage from '../components/LandingRandomImage';
import ShareSocials from '../components/ShareSocials';

const HomePage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center '>
      <LandingRandomImage />
      <div className='w-full p-4 md:p-12 mt-3 md:mt-6 text-center'>
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
          es la Plataforma Educativa donde estudiantes, familias, escuelas,
          profesores y otros profesionales de la educación pueden colaborar
          compartiendo recursos.
        </span>
      </div>
      <div className='w-full '>
        <div className='w-full absolute'>
          <img
            className='w-full h-auto min-h-[350px] object-cover'
            src='/fondohome.webp'
            alt=''
          />
        </div>
        <p className=' relative top-0 right-0 p-10 mt-28 text-center text-2xl md:text-4xl lg:text-5xl'>
          Invitamos a profesores 👩🏻‍🏫👨🏻‍🏫🎓 a compartir 📚Recursos educativos y
          prácticas.
        </p>
      </div>
      <div className='w-full h-[200px]'>
        <ShareSocials />
      </div>
      <div className='w-full '>
        <div className='w-full absolute'>
          <img
            className='w-full h-auto min-h-[350px] object-cover'
            src='/fondohome.webp'
            alt=''
          />
        </div>
        <p className=' relative top-0 right-0 p-10 mt-28 text-center text-2xl md:text-4xl lg:text-5xl'>
          Aprende, colabora, comparte y enseña
        </p>
      </div>
    </div>
  );
};

export default HomePage;
