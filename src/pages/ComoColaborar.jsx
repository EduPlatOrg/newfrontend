import { FaCheckCircle } from 'react-icons/fa';
import { FaHandSparkles } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { GiPencilBrush } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Acordeon from '../components/Acordion';
import { FaPlus } from 'react-icons/fa';
const ComoColaborar = () => {
  return (
    <div className='w-full flex flex-col items-center '>
      <div className='relative w-full block h-[400px]'>
        <img
          className='w-full h-[400px] object-cover absolute'
          src='/como-colaborar.webp'
          alt=''
        />
        <p className='relative top-48 right-48 font-bold text-white text-5xl md:text-6xl translate-x-1/2 z-10 w-full h-fit'>
          ¿Cómo colaborar?
        </p>
      </div>
      <div className='mt-6 text-3xl text-black flex flex-col items-center'>
        <p className='mt-6 px-10 text-2xl'>
          Buscamos a personas y entidades que quieran colaborar en este proyecto
          de cualquiera de estas maneras:
        </p>
        <ol className='text-[15px] font-bold mt-6'>
          <li className='flex items-center gap-2'>
            {' '}
            <FaCheckCircle
              size={20}
              className='text-orange-300'
            />{' '}
            Personas que quieran participar en la Feria Recursos Educativos u
            otros eventos.
          </li>
          <li className='flex items-center gap-2'>
            <FaHandSparkles
              size={20}
              className='text-orange-300'
            />{' '}
            Profesionales del mundo educativo que deseen compartir recursos.
          </li>
          <li className='flex items-center gap-2'>
            <FaHandsHelping
              size={20}
              className='text-orange-300'
            />
            Entidades que quieran colaborar con este proyecto.
          </li>
          <li className='flex items-center gap-2'>
            <HiMiniSpeakerWave
              size={20}
              className='text-orange-300'
            />
            Voluntarios que quieran ayudar en la difusión de este proyecto.
          </li>
          <li className='flex items-center gap-2'>
            <GiPencilBrush
              size={20}
              className='text-orange-300'
            />
            Diseñadores gráficos para web y redes sociales.
          </li>
          <li className='flex items-center gap-2'>
            <MdComputer
              size={20}
              className='text-orange-300'
            />
            Programadores web dinámicas y/o aplicaciones móviles.
          </li>
        </ol>
      </div>
      <div className='mt-6 text-3xl text-black flex flex-col w-full pl-12 pb-10'>
        <p className=' font-light text-xl text-start w-full '>
          Ahora es posible entrar en el equipo de colaboradores:
        </p>
        <Link
          to='/'
          className='bg-blue-500 hover:bg-gray-400 
          py-4 px-6 rounded-lg text-white w-fit 
          flex justify-center whitespace-nowrap transition-all duration-200 cursor-pointer gap-2 text-xs mt-6 items-start'>
          <FaHandsHelping size={20} />
          QUIERO COLABORAR
        </Link>
      </div>
      <div className='pl-10 pr-10 w-[90%]'>
        <div className='w-full bg-gray-100 mb-10  '>
          <Acordeon
            className={'flex items-center gap-2 '}
            iconClassName={'text-blue-400'}
            titulo={'Algunas razones para colaborar en Eduplat'}
            Icon={FaPlus}>
            <p className='text-xs mb-2'>
              • La más importante es el altruismo y la sensación de bienestar de
              colaborar con la sociedad.
            </p>
            <p className='text-xs mb-2'>
              • Valoración del equipo de colaboradores en las fases iniciales.
            </p>
            <p className='text-xs mb-2'>
              • Valoración y reconocimiento acreditado en la plataforma de la
              comunidad educativa después del lanzamiento.
            </p>
            <p className='text-xs mb-2'>
              • Acceso y reconocimiento privilegiado en la plataforma
            </p>
          </Acordeon>
        </div>
        <div className='w-full bg-gray-100 mb-10  '>
          <Acordeon
            className={'flex items-center gap-2 '}
            iconClassName={'text-blue-400'}
            titulo={'Algunas razones para colaborar AHORA'}
            Icon={FaPlus}>
            <p className='text-xs mb-2'>
              • Posibilidad de toma de decisiones, innovación e iniciativas.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de crecimiento con la plataforma.
            </p>
            <p className='text-xs mb-2'>
              • Garantías de estar en el equipo de fundadores de la Wikipedia de
              los recursos educativos. Wikipedia admite colaboradores
              ilimitados. Fundadores fueron los pioneros. En EduPlat esto es
              todavía posible.
            </p>
          </Acordeon>
        </div>

        <div className='w-full bg-gray-100 mb-10  '>
          <Acordeon
            className={'flex items-center gap-2 '}
            iconClassName={'text-blue-400'}
            titulo={
              'Algunas razones para colaborar como programador, desarrollador web'
            }
            Icon={FaPlus}>
            <p className='text-xs mb-2'>
              • Posibilidad de decidir qué tipo de enfoque y estructura hay
              detrás del usuario. Se necesita un listado de funcionalidades
              preciso, si bien hay muchas alternativas de llegar a ellas.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de utilizar código existente en WikiMedia y/o otras
              fuentes de código libre.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad y de acreditación de modificación, instalación y
              desarrollo de ciertos accesorios, plugins o extensiones .
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de utilizar estos desarrollos en otros proyectos y/o
              ofrecer sean utilizados por otros en la comunidad de EduPlat,
              Wikipedia u otras.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de trabajar de manera remunerada una vez se haya
              superado la barrera del sostenimiento (Fase 5)
            </p>
          </Acordeon>
        </div>
        <div className='w-full bg-gray-100 mb-10  '>
          <Acordeon
            className={'flex items-center gap-2 '}
            iconClassName={'text-blue-400'}
            titulo={'Algunas razones para colaborar en el diseño gráfico'}
            Icon={FaPlus}>
            <p className='text-xs mb-2'>
              • Posibilidad de decidir qué tipo de enfoque y estilo hay detrás
              del usuario.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de utilizar recursos existentes libres.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad y de acreditación de modificación y desarrollo de
              ciertos elementos gráficos.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de utilizar estos desarrollos en otros entornos.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de trabajar de manera remunerada para usuarios
              premium de la plataforma.
            </p>
          </Acordeon>
        </div>
        <div className='w-full bg-gray-100 mb-10  '>
          <Acordeon
            className={'flex items-center gap-2 '}
            iconClassName={'text-blue-400'}
            titulo={
              'Algunas razones para colaborar en el equipo comunicación y RRSS'
            }
            Icon={FaPlus}>
            <p className='text-xs mb-2'>
              • Posibilidad de generar contactos para la red y propios.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de crecimiento unido al tejido de la red creada .
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de colaborar de manera remunerada en la
              investigación en el muy probable caso de obtener financiación para
              la misma.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de utilizar estos desarrollos en otros entornos.
            </p>
            <p className='text-xs mb-2'>
              • Posibilidad de trabajar de manera remunerada una vez se haya
              superado la barrera del sostenimiento.
            </p>
          </Acordeon>
        </div>
      </div>
    </div>
  );
};

export default ComoColaborar;
