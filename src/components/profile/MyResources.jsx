import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import MyOwnRecources from './MyOwnRecources';
import { useUser } from '../../context/UserContext';
import { useRecources } from '../../context/RecourcesContext';

const MyResources = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredRecources, setFilteredRecources] = useState([]);
  const { user } = useUser();
  const { getOwnRecources } = useRecources();

  useEffect(() => {
    if (user && user._id) {
      const fetchOwnRecources = async () => {
        const response = await getOwnRecources(user._id);
        console.log(response);
        setFilteredRecources(response.edusources);
      };
      fetchOwnRecources();
    }
  }, [user]);

  return (
    <div className='flex flex-col w-full items-center p-2 '>
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        Detalle de mis recursos.
      </h1>
      <div className='flex items-center justify-center gap-4 p-2'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit  text-md cursor-pointer'>
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </p>
        <Link to='/profile-panel/my-recources/new-recource'>
          <button
            className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md whitespace-nowrap'>
            Crear recurso
          </button>
        </Link>
      </div>
      {showFilters && (
        <div className='flex flex-col items-center justify-center gap-2 w-full mb-2 p-2'>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full mb-2'>
            <input
              type='text'
              placeholder='Buscar por nombre'
              className='md:w-[50%] w-full p-2 rounded-md border border-gray-700'
              onChange={() => {}}
            />
          </div>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full'>
            <button
              className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Buscar por tema
            </button>

            <button className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Buscar en la descripcion
            </button>
            <button className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Buscar por idioma
            </button>
            <button className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Quitar Filtros
            </button>
          </div>
        </div>
      )}

      <div className={clsx('w-full pl-8 mt-8')}>
        <MyOwnRecources recources={filteredRecources} />
      </div>
    </div>
  );
};

export default MyResources;
