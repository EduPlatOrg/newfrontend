import NavbarLinks from '../components/NavbarLinks';

const ErasmusCofinanciado = () => {
  return (
    <div className='w-full flex flex-col items-center bg-gray-200 flex-grow min-h-[calc(100vh-340px)] '>
      {/* Navbar */}
      <div className='w-screen  md:w-4/5 '>
        <NavbarLinks />
      </div>

      {/* Contenedor dos columnas  */}
      <div className='w-4/5 mt-5 md:mt-10 h-auto flex flex-col lg:flex-row '>
        <div className=' flex flex-col lg:items-center lg:justify-center lg:w-4/6 '>
          <img
            className='object-cover'
            src='/european-union.png'
            alt=''
          />
        </div>

        <div className='lg:w-3/4'>
          <p className='p-2 w-full text-lg md:text-xl text-justify '>
            Este proyecto ha sido financiado con el apoyo de la Comisión
            Europea. Este sitio web y sus recursos reflejan únicamente las
            opiniones de sus autores, y la Comisión no se hace responsable del
            uso que pueda hacerse de la información contenida en él.
          </p>
        </div>

        {/* fin */}
      </div>
      <div className=' flex flex-col my-5 w-4/5 md:w-2/6'>
        <img
          className='object-contain'
          src='/SEPIE_erasmus_plus.gif'
          alt=''
        />
      </div>
    </div>
  );
};

export default ErasmusCofinanciado;
