import { Link } from 'react-router-dom';
import NavbarLinks from '../components/NavbarLinks';

import { FaCheckCircle, FaMouse } from 'react-icons/fa';
import { LuCalendarClock } from 'react-icons/lu';
import { HiMiniChatBubbleLeftRight } from 'react-icons/hi2';
import { ImGift } from 'react-icons/im';
import { TbFreeRights } from 'react-icons/tb';

const FRREEPage = () => {
  return (
    <div className='w-full flex flex-col items-center '>
      <div className=' w-full flex items-center justify-around gap-6 m-8 '>
        <img
          src='/eduplat-home-1024x436.webp'
          alt=''
          className='object-contain h-28 md:h-48 w-full'
        />
        <img
          src='/Eduplat-feria-15-1024x583.webp'
          alt='FRREE'
          className='object-contain h-28 md:h-48 w-full'
        />
        <img
          src='/eduplat-recursos-1024x378.webp'
          alt=''
          className='object-contain h-28 md:h-48 w-full'
        />
      </div>

      {/* Navbar */}
      <div className='w-screen  md:w-4/5 '>
        <NavbarLinks />
      </div>

      {/* Contenedor dos columnas 60/40 */}
      <div className='w-full  md:w-4/5 mt-5 md:mt-10 h-auto flex flex-col gap-8 p-8'>
        <div className='p-4 flex items-start justify-start gap-4'>
          <div className=''>
            <FaMouse
              className='text-yellow-500'
              size={36}
            />
          </div>
          <div className=''>
            <h1 className='text-xl font-bold md:text-3xl lg:text-4xl text-gray-700'>
              Presencial y online
            </h1>
            <p className='text-lg mt-4 text-yellow-500'>
              Participación individual o en equipos de trabajo online o
              presencialmente en entidades colaboradoras. Conectados a través de
              la plataforma en directo y en diferido.{' '}
            </p>
          </div>
        </div>
        <div className='p-4 flex items-start justify-start gap-4'>
          <div className=''>
            <FaCheckCircle
              className='text-yellow-500'
              size={36}
            />
          </div>
          <div className=''>
            <h1 className='text-xl font-bold md:text-3xl lg:text-4xl text-gray-700'>
              Para ayudar a docentes
            </h1>
            <p className='text-lg mt-4 text-yellow-500'>
              Misión: facilitar a profesionales en la comunidad educativa
              obtener mejores resultados colaborando en la creación de recursos.
            </p>
          </div>
        </div>
        <div className='p-4 flex items-start justify-start gap-4'>
          <div className=''>
            <LuCalendarClock
              className='text-yellow-500'
              size={36}
            />
          </div>
          <div className=''>
            <h1 className='text-xl font-bold md:text-3xl lg:text-4xl text-gray-700'>
              Programa
            </h1>
            <p className='text-lg mt-4 text-yellow-500'>
              Un programa con variedad de experiencias. Posibilidad de
              participar en la feria durante unos minutos o varios días.
            </p>
          </div>
        </div>
        <div className='p-4 flex items-start justify-start gap-4'>
          <div className=''>
            <HiMiniChatBubbleLeftRight
              className='text-yellow-500'
              size={36}
            />
          </div>
          <div className=''>
            <h1 className='text-xl font-bold md:text-3xl lg:text-4xl text-gray-700'>
              Participación activa
            </h1>
            <p className='text-lg mt-4 text-yellow-500'>
              Participación pre- / feria /-post en nuestras redes sociales.
            </p>
          </div>
        </div>
        <div className='p-4 flex items-start justify-start gap-4'>
          <div className=''>
            <ImGift
              className='text-yellow-500'
              size={36}
            />
          </div>
          <div className=''>
            <h1 className='text-xl font-bold md:text-3xl lg:text-4xl text-gray-700'>
              Regalos y premios.
            </h1>
            <p className='text-lg mt-4 text-yellow-500'>
              Obsequios de nuestros generosos patrocinadores. Además tenemos
              ocho becas para subvencionar el viaje de 8 profes de España 🇪🇸 que
              quieran compartir ideas o RecursosEducativos en los Congresos
              Internacionales 🇪🇺 en Irlanda 🇮🇪, Portugal 🇵🇹, o Italia 🇮🇹.
            </p>
          </div>
        </div>
        <div className='p-4 flex items-start justify-start gap-4'>
          <div className=''>
            <TbFreeRights
              className='text-yellow-500'
              size={36}
            />
          </div>
          <div className=''>
            <h1 className='text-xl font-bold md:text-3xl lg:text-4xl text-gray-700'>
              Inscripciones gratuitas y premium (formación certificada).
            </h1>
            <p className='text-lg mt-4 text-yellow-500'>
              Posibilidad de inscripción gratuita para las personas que
              participen activamente colaborando en la difusión y/o compartiendo
              #RecursosEducativos. Posibilidad de participación premium
              (formación certificada) con una pequeña aportación económica.
            </p>
          </div>
        </div>
      </div>

      {/* Seccion CTA con bg y boton */}

      <div className="w-full flex mt-10 min-h-60 bg-[url('/fondohome.webp')] bg-cover justify-around items-center ">
        <p className='text-3xl '>
          ¿Quieres participar en la{' '}
          <span className='font-semibold'> #FRREE?</span>
        </p>
        <Link to='/inscripciones'>
          <button
            className='mt-4
         bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-6 rounded-lg text-l transition-all duration-200 tracking-wider'>
            PARTICIPAR
          </button>
        </Link>
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

export default FRREEPage;
