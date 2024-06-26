import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../hooks/use-modal-store';

const QuienesSomosPage = () => {
  const { onOpen } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div className='w-full p-0 md:p-6 lg:p-10'>
        <img
          src='/quienes-somos.png'
          alt='contact Image'
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-3 w-[80%]'>
        <div className='w-full p-4  mt-3 md:mt-6 text-center block'>
          <span className=' text-3xl md:text-4xl lg:text-5xl'>
            La Plataforma{' '}
          </span>
          <span className='text-orange-300 font-bold text-3xl md:text-4xl lg:text-5xl'>
            E
          </span>
          <span className='font-bold text-3xl md:text-4xl  lg:text-5xl'>
            du
          </span>
          <span className='text-sky-500 font-bold text-3xl md:text-4xl lg:text-5xl'>
            P
          </span>
          <span className='font-bold text-3xl md:text-4xl lg:text-5xl'>
            lat.org
          </span>{' '}
          <span className='font-ligth text-3xl md:text-4xl lg:text-5xl'>
            y la feria de{' '}
            <span className='text-sky-500 font-bold'>Recursos</span>{' '}
            <span className='text-orange-300 font-bold '>Educativos</span> son
            promocionadas bajo el paraguas de la asociación sin Ánimo de Lucro
            BienesDar.
          </span>
        </div>
        <div className='w-full p-4 mt-3 text-start block'>
          <p className='text-gray-400'>
            Con la denominación BienesDar se constituye el 23-1-2018* una
            asociación al amparo de la Ley Orgánica 1/2002, de 22 de marzo,
            reguladora del Derecho de Asociación, y normas complementarias, con
            personalidad jurídica y plena capacidad de obrar, careciendo de
            ánimo de lucro.
          </p>
          <p className='mt-6 font-medium text-gray-500'>
            La Asociación tiene como misión mejorar el bienestar de la sociedad
            al compartir actividades, recursos, habilidades y conocimientos.
          </p>
        </div>
        <div className='w-full p-4 mt-3 text-start block'>
          <p className='text-2xl md:text-3xl lg:text-4xl font-light text-start'>
            <span className='font-medium'>
              Desde finales del 2021 contamos con la colaboración de numerosas
              instituciones entre las que queremos destacar el Gobierno de
              Aragón y la Unión Europea, que ha cofinanciado el proyecto y
              facilitó la creación del consorcio
            </span>
            EduPlat-EU1 formado por 4 instituciones: Instituto Duarte de Lemos
            (🇵🇹Portugal), Istituto Europeo per lo Sviluppo Locale (🇬🇷Grecia),
            Associazione InCo (🇮🇹Italia) y BienesDar (🇪🇸 España); y el consorcio
            <span className='font-medium'>EduPlat-EU2</span> formad por 5
            partner:{' '}
            <span className='font-medium'>
              {' '}
              Centro de Profesorado Juan de Lanuza (🇪🇸 España), University
              College Dublin (🇮🇪 Irlanda), RUTIS (🇵🇹Portugal), Associazione
              Docenti e Dirigenti scolastici Italiani(🇮🇹Italia) y BienesDar (🇪🇸
              España).
            </span>
          </p>
        </div>
        <div className='w-full p-4 mt-3 text-start block'>
          <p className='text-2xl md:text-3xl lg:text-4xl font-light text-start'>
            En{' '}
            <span className='text-orange-300 font-bold text-2xl md:text-3xl lg:text-4xl'>
              E
            </span>
            <span className='font-bold text-2xl md:text-3xl  lg:text-4xl'>
              du
            </span>
            <span className='text-sky-500 font-bold text-2xl md:text-3xl lg:text-4xl'>
              P
            </span>
            <span className='font-bold text-2xl md:text-3xl lg:text-4xl'>
              lat.org
            </span>{' '}
            Estudiantes, familias, escuelas, profesores y otros profesionales de
            la educación podrán encontrar recursos, colaborar y ser valorados
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8'>
          <div className='col-span-1 flex flex-col items-center justify-start flex-grow min-h-full animate-on-scroll'>
            <img
              src='/about1.webp'
              alt='imagen aleatoria'
              className='w-24 h-24 object-cover rounded-full hover:scale-90'
            />
            <h3 className='text-xl mb-3 text-yellow-500 mt-4'>Estudiantes</h3>
            <p className='text-center text-light text-gray-500'>
              Estudiantes pueden usar actividades, valorarlas y enviar ideas y
              comentarios. Su experiencia es muy valiosa porque ellos tienen
              otra perspectiva y un gran potencial creativo. Pueden también
              ayudar a sus compañeros y motivar a los profesores a usar
              EduPlat.org
            </p>
          </div>
          <div className='col-span-1 flex flex-col items-center justify-start flex-grow min-h-full animate-on-scroll'>
            <img
              src='/about2.webp'
              alt='imagen aleatoria'
              className='w-24 h-24 object-cover rounded-full hover:scale-90'
            />
            <h3 className='text-xl mb-3 text-yellow-500 mt-4'>Profesores</h3>
            <p className='text-center text-light text-gray-500'>
              Pueden usar actividades, valorarlas y enviar ideas y comentarios.
              Sus contribuciones profesionales son muy valoradas en EduPlat.org
              lo que presenta una forma de demostrar su profesionalismo y
              habilidades de su CV. Al compartir sus perfiles en EduPlat.org
              pueden mejorar sus posibilidades profesionales mientras ayudan a
              difundir EduPlat.org
            </p>
          </div>
          <div className='col-span-1 flex flex-col items-center justify-start flex-grow min-h-full animate-on-scroll'>
            <img
              src='/about3.webp'
              alt='imagen aleatoria'
              className='w-24 h-24 object-cover rounded-full hover:scale-90'
            />
            <h3 className='text-xl mb-3 text-yellow-500 mt-4'>
              Entidades educativas
            </h3>
            <p className='text-center text-light text-gray-500'>
              Pueden beneficiarse de EduPlat.org al permitir a sus estudiantes y
              docentes colaborar. Además pueden obtener una intranet / LMS
              (Learning Management System) /CMS (Content Management System), lo
              que les puede ayudar en la organización y reducir costes de otras
              plataformas con ánimo de lucro. Al integrar EduPlat.org en su
              sistema educativo, intensifican su uso.
            </p>
          </div>
          <div className='col-span-1 flex flex-col items-center justify-start flex-grow min-h-full animate-on-scroll'>
            <img
              src='/about4.webp'
              alt='imagen aleatoria'
              className='w-24 h-24 object-cover rounded-full hover:scale-90'
            />
            <h3 className='text-xl mb-3 text-yellow-500 mt-4'>
              Centros formación
            </h3>
            <p className='text-center text-light text-gray-500'>
              Centros de formación al profesorado y facultades de educación
              ayudar a los (futuros) profesores desarrollarse con la ayuda de
              EduPlat.org. Los cursos de profesorado pueden proveer recursos
              excelentes dado que los estudiantes tienen una alta motivación y
              buenas habilidades en informática. Además, los futuros profesores
              se pueden beneficiar de EduPlat.org más puesto que su experiencia
              les puede ayudar a encontrar trabajo más rápidamente. Las nuevas
              generaciones son clave para la difusión de EduPlat.org en el
              espacio y el tiempo.
            </p>
          </div>
          <div className='col-span-1 flex flex-col items-center justify-start flex-grow min-h-full animate-on-scroll'>
            <img
              src='/about5.webp'
              alt='imagen aleatoria'
              className='w-24 h-24 object-cover rounded-full hover:scale-90'
            />
            <h3 className='text-xl mb-3 text-yellow-500 mt-4'>
              Expertos educativos
            </h3>
            <p className='text-center text-light text-gray-500'>
              Pueden publicar los resultados de sus investigaciones, sus
              conferencias y compartir sus ideas en EduPlat.org, lo que les
              beneficia mientras difunde el uso de la plataforma.
            </p>
          </div>
          <div className='col-span-1 flex flex-col items-center justify-start flex-grow min-h-full animate-on-scroll'>
            <img
              src='/about6.webp'
              alt='imagen aleatoria'
              className='w-24 h-24 object-cover rounded-full hover:scale-90'
            />
            <h3 className='text-xl mb-3 text-yellow-500 mt-4'>
              Profesionales y entidades
            </h3>
            <p className='text-center text-light text-gray-500'>
              Profesionales y entidades en el mundo educativo pueden
              beneficiarse al poder ofrecer sus servicios aquí. Se buscan
              patrocinadores para el sostenimiento económico de la plataforma
              EduPlat.org.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full block h-[350px] mt-6 '>
        <div className='w-full absolute flex h-[350px]'>
          <img
            className='w-full h-[350px] object-cover'
            src='/fondohome.webp'
            alt=''
          />
        </div>
        <div className=' relative top-0 right-0 p-10 mt-28 text-center text-2xl md:text-2xl lg:text-4xl w-full'>
          <p className='h-fit animate-on-scroll'>
            ¿Quieres añadir a la lista? ¿Te gustaría participar en #EduPlat?
          </p>
          <Link to='/contact'>
            <button className='mt-6 bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-6 rounded-lg text-xs transition-all duration-200'>
              CONTÁCTANOS
            </button>
          </Link>
        </div>
      </div>
      <div className='w-full p-0 md:p-6 lg:p-10'>
        <img
          src='/fases-cabecera.png'
          alt='contact Image'
        />
      </div>
      <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
        <div className='w-full bg-yellow-500 p-10'>
          <div className='w-full flex flex-col justify-center'>
            <h3 className='font-bold text-sky-500 text-xl'>FASE 1</h3>
            <hr className='w-full bg-gray-900 h-[2px]' />
            <h2 className='mt-6 text-2xl font-bold text-white'>
              Inicio. 2013-2019
            </h2>
            <p className='mt-3 font-medium'>
              Durante estos 6 años realizamos una investigación desde un equipo
              de educadores para evaluar necesidades de los usuarios y servicios
              disponibles. Al mismo tiempo se han estudiado posibilidades de
              lanzamiento que incluyen el lanzamiento desde un equipo de
              voluntarios
            </p>
          </div>
        </div>
        <div className='w-full bg-blue-200 p-10'>
          <div className='w-full flex flex-col justify-center'>
            <h3 className='font-bold text-yellow-500 text-xl'>FASE 2</h3>
            <hr className='w-full bg-gray-900 h-[2px]' />
            <h2 className='mt-6 text-2xl font-bold text-sky-500'>
              Lanzamiento backend y networking (2020-2022)
            </h2>
            <p className='mt-3 font-medium'>
              2.1 Lanzamiento desde la asociación sin ánimo de lucro
              bienesDar.org para soliciar ayuda de voluntarios. Colaboración con
              el Gobierno de Aragón, FrenaLaCurva.net , ayudadigital.org y otras
              entidades.
            </p>
            <p className='mt-3 font-medium'>
              2.2 Lanzamiento base prototipo en RRSS.
            </p>
            <p className='mt-3 font-medium'>
              2.3 Lanzamiento de comunicación y RRSS.
            </p>
            <p className='mt-3 font-medium'>
              2.4 Eventos para promoción : Premios y Feria de los Recursos
              Educativos.
            </p>
          </div>
        </div>
        <div className='w-full bg-blue-200 p-10'>
          <div className='w-full flex flex-col justify-center'>
            <h3 className='font-bold text-yellow-500 text-xl'>FASE 3</h3>
            <hr className='w-full bg-gray-900 h-[2px]' />
            <h2 className='mt-6 text-2xl font-bold text-sky-500'>
              Networking Internacional (2021-2023)
            </h2>
            <p className='mt-3 font-medium'>
              3.0 Solicitud participación como proyecto Europeo el 3-11-2021.
            </p>
            <p className='mt-3 font-medium'>
              3.1 Lanzamiento proyecto Europeo EduPlat-EU1, cofinanciado por la
              Unión Europea.
            </p>
            <p className='mt-3 font-medium'>
              3.2 Desarrollo de Congresos Internacionales para facilitar la
              transferencia de Recursos Educativos y prácticas innovadoras en la
              enseñanza.
            </p>
            <p className='mt-3 font-medium'>
              3.3 Desarrollo de plantillas para la publicación de Recursos
              Educativos.
            </p>
            <p className='mt-3 font-medium'>
              3.4 Desarrollo de prototipos para la plataforma .
            </p>
          </div>
        </div>
        <div className='w-full bg-blue-200 p-10'>
          <div className='w-full flex flex-col justify-center'>
            <h3 className='font-bold text-yellow-500 text-xl'>FASE 4</h3>
            <hr className='w-full bg-gray-900 h-[2px]' />
            <h2 className='mt-6 text-2xl font-bold text-sky-500'>
              Lanzamiento Frontend (2023-2024)
            </h2>
            <p className='mt-3 font-medium'>
              4.1 Lanzamiento prototipo mejorado.
            </p>
            <div className='w-full flex flex-col items-center justify-center mt-6 font-medium'>
              <p className='w-full '>
                Dependiendo de las posibilidades del equipo formado y en
                especial de la disponibilidad, competencias e intereses en
                programación y desarrollo web de las personas consideramos
                varias opciones:
              </p>
              <ol className='w-[80%] '>
                <li className='mt-3'>
                  A.) Uso de una plataforma basada en google suite. Ventajas:
                  relativa sencillez de instalación. Desventajas: dificultad de
                  adaptar a las necesidades y dependencia entidad privada.
                </li>
                <li className='mt-3'>
                  B.) Uso de una plataforma creada desde cero en PHP/ SQL o
                  derivados/ similares. Ventajas: máxima flexibilidad y
                  adaptación. Desventajas: máximo esfuerzo de programación y
                  duración proceso.
                </li>
                <li className='mt-3'>
                  C.) Uso de una plataforma creada con un CMS como Joomla o
                  WordPress para utilizar programación existente. Ventajas:
                  relativa sencillez de instalación y posibilidad de utilizar
                  plugins existentes y/o modificar o crear otros. Desventajas:
                  dificultad para adaptar.
                </li>
                <li className='mt-3'>
                  D.) Uso de una plataforma creada con MediaWiki (de Wikimedia,
                  creadores de Wikipedia). MediaWiki trabaja con PHP 7.2.9 o
                  superior y con MariaDB (un reemplazo mejorado de MySQL).
                </li>
                <li className='mt-3'>E.) Otras opciones a considerar.</li>
                <li className='mt-3'>
                  F.) Mantener uso de una plataforma basada en las RRSS.
                </li>
              </ol>
            </div>
            <p className='mt-3 font-medium'>
              4.2 Mantenimiento de la difusión RRSS.
            </p>
            <p className='mt-3 font-medium'>4.3 Desarrollo programa premios</p>
            <p className='mt-3 font-medium'>
              4.4{' '}
              <span className='font-bold'>
                Feria de los Recursos Educativos.
              </span>{' '}
              (A nivel regional, nacional e internacional).
            </p>
            <p className='mt-3 font-medium'>
              4.5 Adaptaciones a la base / plugins para permitir registro
              usuarios y recursos así como motor de búsqueda que incluya
              valoración por otros usuarios. Otras funcionalidades serán
              opcionales en esta fase.
            </p>
            <p className='mt-3 font-medium'>
              4.6 Generación de contenido avanzado y testeo plataforma,
              feedback.
            </p>
            <p className='mt-3 font-medium'>
              4.7 Planificación prototipo futuro.
            </p>
          </div>
        </div>
        <div className='w-full bg-blue-500 p-10'>
          <div className='w-full flex flex-col justify-center'>
            <h3 className='font-bold text-yellow-500 text-xl'>FASE 5+</h3>
            <hr className='w-full bg-gray-900 h-[2px]' />
            <h2 className='mt-6 text-2xl font-bold text-white'>
              Desarrollo Sostenible E Investigación
            </h2>
            <p className='mt-3 font-medium'>
              EduPlat ha sido pensada para ser sostenible y que genere
              crecimiento. Es escalable desde una comunidad muy pequeña de
              usuarios (ejemplo una escuela) hasta toda la comunidad educativa
              mundial.
            </p>

            <p className='mt-10 font-medium'>
              Una de las características de EduPlat.org es el ir asociada a una
              investigación: Liderazgo y motivación para la colaboración en RRSS
              educativas. Esta investigación se retroalimenta de la plataforma
              (feedback) y al mismo tiempo la hace más eficaz (feedforward).
              Estamos a la espera de resultados positivos en la solicitud de
              financiación de esta investigación.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full block h-[350px] mt-6 '>
        <div className='w-full absolute flex h-[350px]'>
          <img
            className='w-full h-[350px] object-cover'
            src='/fondohome.webp'
            alt=''
          />
        </div>
        <div className=' relative top-0 right-0 p-10 mt-28 text-center text-2xl md:text-2xl lg:text-4xl w-full'>
          <p className='h-fit animate-on-scroll'>
            Ahora es posible entrar en el equipo de colaboradores
          </p>

          <button
            className='mt-6 bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-6 rounded-lg text-xs transition-all duration-200'
            onClick={() => onOpen('quiero-colaborar')}>
            QUIERO COLABORAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomosPage;
