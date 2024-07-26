import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import MyOwnResources from './MyOwnResources';
import { useUser } from '../../context/UserContext';
import { useResources } from '../../context/ResourcesContext';
import { FaArrowAltCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import Loader from '../Loader';

const MyResources = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredResources, setFilteredResources] = useState([]);
  const { user } = useUser();
  const { getOwnResources } = useResources();
  const [page, setPage] = useState();
  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState();

  const [totalResources, setTotalResources] = useState();
  const handlePage = async (direction) => {
    setLoading(true);

    if (direction === 'next') {
      if (page < totalPages) {
        setPage((prev) => prev + 1);
      }
    }
    if (direction === 'prev') {
      if (page > 1) {
        setPage((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    if (user && user._id) {
      const fetchOwnResources = async () => {
        const response = await getOwnResources(page);

        if (response.success) {
          setFilteredResources(response.edusources);
          setPage(response.metadata.page);
          setTotalPages(response.metadata.totalPages);
          setTotalResources(response.metadata.totalCount);
        }
      };
      fetchOwnResources();
    }
  }, [user]);

  return (
    <>
      {loading && <Loader />}
      <div className='flex flex-col w-full items-center p-2 '>
        <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
          Detalle de mis {totalResources && totalResources} recursos.
        </h1>
        <div className='flex items-center justify-center gap-4 p-2'>
          <p
            onClick={() => setShowFilters(!showFilters)}
            className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit  text-md cursor-pointer'>
            {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </p>
          <Link to='/profile-panel/my-resources/new-resource'>
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
          <MyOwnResources resources={filteredResources} />
        </div>
        <div className='w-full h-4 flex justify-end items-center gap-2'>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => handlePage('prev')}
              className='text-[#0e2235] py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              <FaArrowCircleLeft />
            </button>
            <p className='text-gray-500'>
              {page} de {totalPages}
            </p>
            <button
              onClick={() => handlePage('next')}
              className='text-[#0e2235] py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyResources;
