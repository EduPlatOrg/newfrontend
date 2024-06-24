import React from 'react';
import { Link } from 'react-router-dom';


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

        <div>
            AQUÍ LISTA DESPLEGABLE DE PREGUNTAS FRECUENTES
            {/* PREGUNTAS FRECUENTES */}
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
