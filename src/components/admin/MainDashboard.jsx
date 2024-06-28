import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainDashboard = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className='flex flex-col w-full items-center p-2 '>
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        Detalle de los eventos.
      </h1>
      <p
        onClick={() => setShowFilters(!showFilters)}
        className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit  text-md cursor-pointer'>
        {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
      </p>
      {showFilters && (
        <div className='flex flex-col items-center justify-center gap-2 w-full mb-2 p-2'>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full mb-2'>
            <input
              type='text'
              placeholder='Buscar por nombre'
              className='md:w-[50%] w-full p-2 rounded-md border border-gray-700'
              onChange={() => {}}
            />
            <input
              type='text'
              placeholder='Buscar por ID'
              className='md:w-[50%] w-full p-2 rounded-md border border-gray-700'
              onChange={() => {}}
            />
          </div>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full'>
            <Link to='/admin-panel/create-event'>
              <button
                className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
                Crear evento
              </button>
            </Link>
            <button
              className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Ordenar por fecha
            </button>

            <button className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Fecha de Creacion
            </button>
            <button className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Ocultar eventos pasados
            </button>
            <button className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Quitar Filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDashboard;
