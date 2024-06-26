import NavbarLinks from '../components/NavbarLinks';
import { useModal } from '../hooks/use-modal-store';

const Patrocinadores = () => {
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
      <div className='w-[80%]   flex flex-col gap-8 p-8 items-center '>
        <h2 className='font-bold text-xl'>PATROCINAN</h2>
        <div className='w-full flex flex-wrap justify-around gap-6 gap-y-14'>
          <a
            className='flex flex-col  justify-center gap-4 max-w-[350px]'
            href='https://www.educationalpaths.com/es/home/'
            target='_blank'>
            <img
              className='object-contain h-28'
              src='/educationalpath.webp'
              alt=''
            />
            <p className='text-lg text-gray-400 text-center mt-4'>
              Formación, consultoría y coaching educativo.
            </p>
          </a>
          <a
            className='flex flex-col  justify-center gap-4 max-w-[350px]'
            href='http://enunplisplas.info/'
            target='_blank'>
            <img
              className='object-contain h-28'
              src='/enunplisplas.gif'
              alt=''
            />
            <p className='text-lg text-gray-400 text-center mt-4'>
              Clases particulares a domicilio (Idiomas, Matemáticas, Ciencias)
            </p>
          </a>
          <a
            className='flex flex-col  justify-center gap-4 max-w-[350px]'
            href='http://maese.unizar.es/'
            target='_blank'>
            <img
              className='object-contain h-16'
              src='/logounizar.webp'
              alt=''
            />
            <p className='text-lg text-gray-400 text-center mt-4'>
              Máster en Educación SocioEmocional de la Universidad de Zaragoza.
              MAESE.unizar.es
            </p>
          </a>
          <a
            className='flex flex-col  justify-center gap-4 max-w-[350px]'
            href='https://www.villanua.org/alquileraltruista/'
            target='_blank'>
            <img
              className='object-contain h-32'
              src='/logo-villanua.webp'
              alt=''
            />
            <p className='text-lg text-gray-400 text-center mt-4'>
              🏡Apartamento en alquiler altruista en el Pirineo Aragonés 🌄
            </p>
          </a>
          <a
            className='flex flex-col  justify-center gap-4 max-w-[350px]'
            href='https://eduki.com/'
            target='_blank'>
            <img
              className='object-contain h-32'
              src='/eduki-300x102.webp'
              alt=''
            />
            <p className='text-lg text-gray-400 text-center mt-4'>
              Materiales didácticos creados por profesores.
            </p>
          </a>
          <a
            className='flex flex-col  justify-center gap-4 max-w-[350px]'
            href='https://www.biopolis.world/es'
            target='_blank'>
            <img
              className='object-contain h-32'
              src='/biopolis.webp'
              alt=''
            />
            <p className='text-lg text-gray-400 text-center mt-4'>
              Biopolis es una innovadora y divertida metodología que ayuda a
              desarrollar el máximo potencial de las persona.
            </p>
          </a>
        </div>
      </div>

      {/* Contenedor dos columnas 60/40 */}
      <div className='w-full  md:w-4/5 mt-5 md:mt-10 h-auto flex flex-col gap-8 p-8'>
        <div className='p-6'>
          <h2 className=' text-2xl md:text-3xl mb-6 text-sky-500'>
            Invitamos a entidades que deseen promocionar sus servicios en la
            Feria a solicitar su inscripción como patrocinadores.
          </h2>
          <p className='text-gray-600 font-medium text-lg'>Ofrecemos:</p>
          <p className='text-gray-400 mt-2'>
            📩– Mailing de sus servicios junto al resto de Recursos Educativos
            enviados a todos los participantes.
          </p>
          <p className='text-gray-400 mt-2'>📢– Difusión en las RRSS</p>
          <p className='text-gray-400 mt-2'>
            🕑– Presentaciones durante la feria. Posibilidad de hacer una
            exposición larga y/o una entrevista y/o contestar preguntas de
            participantes.
          </p>
          <p className='text-gray-400 mt-2'>
            📖 – Inscripción gratuita en la feria para todos los participantes
            que quieran invitar.
          </p>
          <p className='text-gray-400 mt-2'>
            🎁- Posibilidad de sortear muestras de sus servicios como regalos en
            la Feria.
          </p>
          <p className='text-gray-400 mt-2'>
            La aportación a la feria por parte de los patrocinadores es de 600€,
            300€ para entidades educativas y proyectos sin ánimo de lucro.
          </p>
        </div>
      </div>

      {/* Seccion CTA con bg y boton */}

      <div className="w-full flex flex-col mt-10 min-h-64 bg-[url('/fondohome.webp')] bg-cover justify-center items-center ">
        <p className='text-3xl '>
          Oferta disponible para las
          <span className='font-semibold'> 12 primeras entidades</span> que lo
          soliciten.
        </p>
        <button
          onClick={() => onOpen('inscripciones')}
          className='mt-4
         bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-6 rounded-lg text-l transition-all duration-200 tracking-wider'>
          INSCRIPCIONES
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

export default Patrocinadores;
