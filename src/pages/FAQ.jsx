import React from 'react';
import { Link } from 'react-router-dom';
import Acordeon from '../components/Acordion';
import { FaPlus } from 'react-icons/fa';

export const FAQ = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex-1 text-xl flex justify-center items-center p-4'>
            <img
            src='/public/images/FAQ.PNG' 
            className='w-full'
            alt='FAQ'
            />
        </div>

        <div className='flex flex-col m-auto min-h-[150px] bg-[#ffffff] px-4 justify-center items-center w-[60%]'>
            <div className='flex-1 text-black my-4'>
                <p className='font-bold text-2xl md:text-3xl lg:text-4xl justify-center'>
                    <span>Preguntas frecuentes</span>
                </p>

                <p className='flex-1 text-black my-4 justify-center text-center text-2xl md:text-3xl lg:text-4xl'>
                    <span className='text-orange-300 font-bold'>E</span>
                    <span className='font-bold'>du</span>
                    <span className='text-sky-500 font-bold'>P</span>
                    <span className='font-bold'>lat.org</span>
                </p>
            </div>
        </div>

        <div className='pl-10 pr-10 w-[90%]'>
            <div className='w-full bg-gray-100 mb-10'>
                <Acordeon
                    className={'flex items-center gap-2 font-bold'}
                    iconClassName={'text-blue-400'}
                    titulo={'¿Qué problema concreto intenta resolver #EduPlat? ¿Cómo?'}
                    Icon={FaPlus}>
                    <p className='base mb-2 font-bold'>
                        Limitaciones en el acceso a recursos educativos
                    </p>
                    <p className='base mb-2'>
                        Tiempo limitado. Falta de valoración.
                        Soluciones:
                    </p>
                    <p className='base mb-2 font-bold'>
                        - A corto plazo:
                    </p>
                    <p className='base mb-2'>
                        Facilitar la búsqueda y difusión de Recusos Educativos a través de las Redes Sociales.
                    </p>
                    <p className='base mb-2 font-bold'>
                        - A medio plazo:
                    </p>
                    <p className='base mb-2'>
                        Posibilitar la búsqueda rápida de recursos asincrónicos específicos entre los muchos recursos educativos disponibles online mediante un directorio y motor de búsqueda entre un repositorio de sugerencias según palabras clave y campos específicos (autor, tipo de recurso, asignaturas, temas, niveles, cursos, duración, etc.).
                    </p>
                    <p className='base mb-2'>
                        - A largo plazo. Facilitar una colaboración entre todos los interesados en el mundo educativo, valorando las aportaciones de todos de forma positiva. Búsqueda de trabajo/RRHH. Congresos, comunicaciones investigaciones, Premios, WikiBooks, MultiProyectos, etc. Facilitar su integración como intranet LMS (Learning Management System) /CMS (Content Management System) para centros educativos de manera gratuita. Auto-correctores, rúbricas y valoraciones alumnado. Posibilitar también desarrollos específicos premium y formación que permitan la sostenibilidad de la plataforma y su expansión. 
                    </p>
                </Acordeon>
            </div>

            <div className='w-full bg-gray-100 mb-10  '>
                <Acordeon 
                    className={'flex items-center gap-2 font-bold'}
                    iconClassName={'text-blue-400'}
                    titulo={'¿A qué público va dirigido?'}
                    Icon={FaPlus}>
                    <p className='base mb-2'>
                        Estudiantes, familias, escuelas, profesores y otros profesionales de la educación. En #EduPlat podran encontrar recursos, colaborar y ser valorados . Ver más detalle en EduPlat.org/usuarios
                    </p>
                </Acordeon>
            </div>
            <div className='w-full bg-gray-100 mb-10  '>

                <Acordeon 
                    className={'flex items-center gap-2 font-bold'}
                    iconClassName={'text-blue-400'}
                    titulo={'¿Existen otras soluciones parecidas a #EduPlat?'}
                    Icon={FaPlus}>
                    <p className='base mb-2'>
                        Si, son muy numerosas las plataformas que resuelven algunas de las necesidades, pero no hemos encontrado ninguna que integre a todas.  Hemos hecho un estudio muy extenso sobre ello. Aquí se puede ver un resumen de las conclusiones: eduplat.org/otras.
                    </p>
                </Acordeon>
            </div>
        </div>

        <div>
            <p className='flex items-center justify-center text-xl my-8'>
                ¿Tienes otras preguntas? ¿Te gustaría participar en #EduPlat?
            </p>
        </div>

        <div className='flex items-center justify-center'>
            <button className='my-8 bg-blue-500 hover:bg-[#FE9A00] text-white py-4 px-8 rounded-lg text-sm transition-all duration-200 my-8'>
                CONTÁCTANOS
            </button>
        </div> 


      </div>

  );
};
