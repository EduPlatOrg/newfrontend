import NavbarLinks from '../components/NavbarLinks';
import { useModal } from '../hooks/use-modal-store';

const Objetivos = () => {
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
      <div className='w-full  md:w-4/5 mt-5 md:mt-10 h-auto flex flex-col gap-8 p-8'>
        <div className='p-6'>
          <h2 className='font-light text-2xl md:text-4xl mb-10 text-yellow-500'>
            Misión:
          </h2>
          <p className='text-gray-400 font-medium text-lg'>
            Facilitar a profesionales en la comunidad educativa obtener mejores
            resultados colaborando en la creación de recursos.
          </p>
        </div>
        <div className='p-6'>
          <h2 className='font-light text-2xl md:text-4xl mb-10 text-yellow-500'>
            Objetivos:{' '}
          </h2>
          <p
            className=' text-gray-400
            font-medium
            text-lg'>
            1.{' '}
            <span className='font-bold text-gray-500'>
              Promover la colaboración entre miembros de la comunidad educativa.
            </span>
          </p>
          <p className='text-gray-400 font-medium text-lg'>
            2.{' '}
            <span className='font-bold text-gray-500'>
              Facilitar la inclusión de todas las personas involucradas en el
              uso, creación, innovación y difusión de recursos educativos
              digitales.
            </span>
          </p>
          <p className='text-gray-400 font-medium text-lg'>
            3.{' '}
            <span className='font-bold text-gray-500'>
              Difundir el mensaje que las TIC y en concreto las RRSS en internet
              pueden ser utilizadas de manera muy profesional en el mundo
              educativo.
            </span>
          </p>
          <p className='text-gray-400 font-medium text-lg'>
            4.{' '}
            <span className='font-bold text-gray-500'>
              Fomentar la participación de voluntarios en el proyecto #EduPlat.
            </span>
          </p>
        </div>
        <div className='p-6'>
          <h2 className='font-light text-2xl md:text-4xl mb-10 text-yellow-500'>
            A quién va dirigida:
          </h2>
          <p className='text-gray-400 font-medium text-lg'>
            Se prevé que los asistentes de esta feria sean en su mayoría
            docentes, si bien se facilitará que cualquier persona de la
            comunidad educativa que esté interesada pueda participar
            (financiando su inscripción si lo solicita).
          </p>
        </div>
      </div>

      {/* Seccion CTA con bg y boton */}

      <div className="w-full flex mt-10 min-h-60 bg-[url('/fondohome.webp')] bg-cover justify-around items-center ">
        <p className='text-3xl '>
          ¿Quieres participar en la{' '}
          <span className='font-semibold'> #FRREE?</span>
        </p>
        <button
          onClick={() => onOpen('quiero-colaborar')}
          className='mt-4
         bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-6 rounded-lg text-l transition-all duration-200 tracking-wider'>
          PARTICIPAR
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

export default Objetivos;
