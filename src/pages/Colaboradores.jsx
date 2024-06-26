import NavbarLinks from '../components/NavbarLinks';
import { useModal } from '../hooks/use-modal-store';

const Colaboradores = () => {
  const { onOpen } = useModal();
  return (
    <div className='w-full flex flex-col items-center '>
      <div className=' w-full bg-blue-100 '>
        <img
          className='object-contain h-28 md:h-48 w-full'
          src='/images/Eduplat-feria.webp'
          alt=''
        />
      </div>

      {/* Navbar */}
      <div className='w-screen  md:w-4/5 '>
        <NavbarLinks />
      </div>

      {/* Contenedor dos columnas 60/40 */}
      <div className='w-full  md:w-4/5 mt-5 md:mt-10 h-auto flex flex-col md:flex-row'>
        {/* Columna 60% */}
        <div className=' flex flex-col p-3 md:w-4/6'>
          <p className='p-2 w-full text-xl text-justify '>
            Invitamos a escuelas, institutos y otras entidades educativas 🏫🚌📚
            a hacer la inscripción como entidades colaboradoras para que
            (algunos de sus) docentes puedan interactuar en los talleres y
            conferencias presencialmente y/o poder seleccionar a un
            🌟🎒representante que exponga un recurso educativo en una de las
            mesas redondas.
          </p>
          <p className='p-2 w-full text-xl text-justify '>
            Asimismo invitamos a cualquier persona (física o jurídica) a
            colaborar en la difusión de la FRREE 📢, colocando un póster 📃 o
            invitando a sus contactos y redes sociales a participar. Se ofrecen
            🎁 premios, regalos y recompensas 💰. por colaborar.
          </p>
          <p className='p-2 w-full text-xl text-justify '>
            Aquellas entidades y personas que quieran difundir sus servicios y
            recursos educativos premium 💎, les invitamos a hacer la inscripción
            como patrocinadores y de este modo colaborar en el sostenimiento
            económico de este proyecto sin ánimo de lucro 💰.
          </p>
        </div>

        {/* Columna 40% */}
        <div className=''>
          <img
            className='object-contain'
            src='/images/online-classroom.webp'
            alt=''
          />
        </div>
      </div>

      {/* Pie llamativo */}
      <div className='w-4/5 mt-10 h-auto flex flex-col'>
        <p className='text-3xl text-center text-blue-500 '>
          <span className='font-bold'> Inscripciones GRATUITAS</span> para las
          entidades y personas colaboradoras.
        </p>
        <p className='mt-2 text-l text-center  '>
          🎁🎁🎁 Sorteos, premios y regalos disponibles para agradecer cualquier
          colaboración. 🙏
        </p>
      </div>

      {/* Seccion CTA con bg y boton */}

      <div className="w-full flex mt-10 min-h-60 bg-[url('/fondohome.webp')] bg-cover justify-around items-center ">
        <p className='text-3xl '>
          ¿Quieres colaborar en la{' '}
          <span className='font-semibold'> #FRREE?</span>
        </p>
        <button
          onClick={() => onOpen('quiero-colaborar')}
          className='mt-4
         bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-6 rounded-lg text-l transition-all duration-200 tracking-wider'>
          COLABORAR
        </button>
        {/* TODO: funcionalidad del botón */}
      </div>

      {/* Pie organismos involucrados*/}

      <div className='m-2 md:m-6 w-full  md:text-xl text-black flex flex-col md:flex-row items-center justify-around '>
        <div className='flex flex-col max-h-32	mb-4'>
          <p className='text-center  mb-3'>COORDINA</p>
          <img
            className='object-contain h-16'
            src='/logo-bienesdar-horizontal.webp'
            alt=''
          />
        </div>
        <div className='flex flex-col max-h-32	mb-4'>
          <p className='text-center mb-3 '>PROMOCIONA</p>
          <img
            className='object-contain h-16 mb-4'
            src='/images/colaborador2.webp'
            alt=''
          />
        </div>
        <div className='flex flex-col max-h-32	mb-4'>
          <p className='text-center  mb-3'>SUBVENCIONA</p>
          <img
            className='object-contain  h-16	'
            src='/european-union.png'
            alt=''
          />
        </div>
      </div>
      {/* fin */}
    </div>
  );
};

export default Colaboradores;
