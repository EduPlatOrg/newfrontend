import React from 'react'
import { Link } from 'react-router-dom';


export const RecursosEducativos = () => {
  return (
    <div className='flex flex-col items-center'>

        <div className='flex-1 text-xl flex justify-center items-center'>
            <Link to='/'>
                <img
                src='/cabecerahome.webp' // IMAGEN PROVISIONAL
                className=''
                alt='Logo Eduplat'
                />
            </Link>
        </div>
        
      <div className='flex m-auto min-h-[150px] bg-[#ffffff] px-4 justify-center items-center'>
            <div className='flex-1 text-black my-8'>
                <p className='flex-1 text-black my-8'>
                    <span className='text-orange-300 font-bold text-lg md:text-xl lg:text-2xl'>
                    E
                    </span>
                    <span className='font-bold text-lg md:text-xl lg:text-2xl'>
                    du
                    </span>
                    <span className='text-sky-500 font-bold text-lg md:text-xl lg:text-2xl'>
                    P
                    </span>
                    <span className='font-bold text-lg md:text-xl lg:text-2xl'>
                    lat.org
                    </span>{' '}
                    <span className='font-light text-lg md:text-xl lg:text-2xl'>
                    es la <span className='text-sky-500 font-bold'>Plataforma</span>{' '}
                    <span className='text-orange-300 font-bold'>Educativa</span> donde
                    estudiantes, familias, escuelas, profesores y otros profesionales de
                    la educación pueden colaborar compartiendo recursos.
                    </span>
                </p>
                <p className='flex-1 text-black my-8'>
                    Estamos trabajando en la construcción de la plataforma y su contenido. Muy pronto esta página tendrá enlaces directos a los recursos. Por el momento la mejor forma de encontrarlos es a través de nuestras redes sociales:
                </p>
            </div>

            <div className='flex-1 text-black my-8'>
                <div className='flex-1 text-black'>
                    <h3 className='flex-1 text-black mt-8 mb-2 font-bold'>Más información:</h3>
                        <Link
                            to=''
                            className=''>
                            Preguntas frecuentes (FAQ)
                        </Link>
                        <br/>
                        <Link
                            to=''
                            className=''>
                            Usuarios
                        </Link>
                        <br/>
                        <Link
                            to=''
                            className=''>
                            Alternativas
                        </Link>
                        <Link
                            to=''
                            className=''>
                            Fases (Plan de Acción)
                        </Link>
                </div>

                <div className='flex-1 text-black my-4'>
                    <h3 className='flex-1 text-black mb-2 font-bold'>Vídeos:</h3>
                        <Link
                            to=''
                            className=''>
                            Introducción rápida a EduPlat (1)
                        </Link>
                        <br/>
                        <Link
                            to=''
                            className=''>
                            Razones que suman para crear EduPlat (4)
                        </Link>
                        <br/>
                        <Link
                            to=''
                            className=''>
                            Vídeo presentación EduPlat para colaboradores (5)
                        </Link>
                </div>

                <div className='flex-1 text-black my-4'>
                    <h3 className='flex-1 text-black mb-2 font-bold'>Vídeos:</h3>
                        <Link
                            to=''
                            className=''>
                            Presentación en PDF
                        </Link>
                </div>

            </div>

        </div>

    </div>
  )
}
