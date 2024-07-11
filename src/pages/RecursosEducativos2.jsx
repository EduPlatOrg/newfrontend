/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import { useResources } from '../context/ResourcesContext';
import Loader from '../components/Loader';
import ResourcesCard from '../components/ResourcesCard';
import { FaArrowAltCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import axios from 'axios';

const RecursosEducativos2 = () => {
  const { resources } = useResources();
  if (!resources) return <Loader />;
  const [showFilters, setShowFilters] = useState(false);
  const [filteredResources, setFilteredResources] = useState(
    resources?.edusources
  );
  const [page, setPage] = useState(resources?.metadata?.page);
  //const [search, setSearch] = useState('');
  const [totalPages, setTotalPages] = useState(resources?.metadata?.totalPages);
  const [loading, setLoading] = useState(false);
  const [totalResources, setTotalResources] = useState(
    resources?.metadata?.totalCount
  );

  console.log(resources);

  const handleSortByDate = () => {};
  const handleSerachByName = (e) => {
    e.preventDefault();
  };
  const handleFilterOldEvents = () => {};

  const handlePage = async (direction) => {
    setLoading(true);
    let search = '';
    if (direction === 'next') {
      if (page < totalPages) {
        setPage((prev) => prev + 1);
        search = `page=${page + 1}`;
      }
    }
    if (direction === 'prev') {
      if (page > 1) {
        setPage((prev) => prev - 1);
        search = `page=${page - 1}`;
      }
    }
    const response = await axios.get(
      `http://localhost:4000/v1/edusource/all?${search}`
    );
    setFilteredResources(response.data.edusources);
  };

  return (
    <div className='flex flex-col w-full items-center p-2 '>
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        Recursos Educativos.
      </h1>
      <div className='flex items-center justify-center gap-4 p-2'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit  text-md cursor-pointer'>
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </p>
      </div>
      {showFilters && (
        <div className='flex flex-col items-center justify-center gap-2 w-full mb-2 p-2'>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full mb-2'>
            <input
              type='text'
              onChange={handleSerachByName}
              placeholder='Buscar por nombre'
              className='md:w-[50%] w-full p-2 rounded-md border border-gray-700'
            />
          </div>
          <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full'>
            <button
              onClick={handleSortByDate}
              className='bg-[#0e2235] text-white 
            py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Ordenar por fecha
            </button>

            <button
              className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'
              onClick={handleFilterOldEvents}>
              Ocultar eventos pasados
            </button>
            <button className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
              Quitar Filtros
            </button>
          </div>
        </div>
      )}
      <div className='w-full '></div>

      <div className='w-full flex items-center justify-between flex-wrap p-10 gap-2'>
        <ResourcesCard resources={filteredResources} />
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
  );
};

export default RecursosEducativos2;
