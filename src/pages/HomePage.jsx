import LandingRandomImage from '../components/LandingRandomImage';

const HomePage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center '>
      <LandingRandomImage />
      <div className='w-full p-4 md:p-12 mt-3 md:mt-6'>
        <span className='text-orange-300 font-bold text-3xl md:text-4xl'>
          E
        </span>
        <span className='font-bold text-3xl md:text-4xl'>du</span>
        <span className='text-sky-500 font-bold text-3xl md:text-4xl'>P</span>
        <span className='font-bold text-3xl md:text-4xl'>lat.org</span>{' '}
        <span className='font-ligth text-3xl md:text-4xl'>
          es la Plataforma Educativa donde estudiantes, familias, escuelas,
          profesores y otros profesionales de la educación pueden colaborar
          compartiendo recursos.
        </span>
      </div>
      <div className='w-full '>
        <div className='w-full'>
          <img
            src='/fondohome.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
