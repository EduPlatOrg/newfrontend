/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react';

import { useResources } from '../context/ResourcesContext';
import Loader from '../components/Loader';
import ResourcesCard from '../components/ResourcesCard';
import { FaArrowAltCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import axios from 'axios';

const RecursosEducativos2 = () => {
  const formRef = useRef(null);
  const { resources } = useResources();
  if (!resources) return <Loader />;
  const [showFilters, setShowFilters] = useState(false);
  const [filteredResources, setFilteredResources] = useState(
    resources?.edusources
  );
  const [page, setPage] = useState(resources?.metadata?.page);

  const [totalPages, setTotalPages] = useState(resources?.metadata?.totalPages);
  const [loading, setLoading] = useState(false);
  const [totalResources, setTotalResources] = useState(
    resources?.metadata?.totalCount
  );
  const [language, setLanguage] = useState(null);
  const [discipline, setDiscipline] = useState(null);
  const [description, setDescription] = useState(null);
  const [autor, setAutor] = useState(null);
  const [level, setLevel] = useState(null);
  const [range, setRange] = useState(null);

  console.log(resources);

  const handleSerachByDescription = (e) => {
    e.preventDefault();
    e.target.value.length <= 3
      ? setDescription(null)
      : setDescription(e.target.value);
  };

  const handleSerachByAutor = (e) => {
    e.preventDefault();
    e.target.value.length <= 3 ? setAutor(null) : setAutor(e.target.value);
  };

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
    let search = '';
    if (language) {
      search += `lang=${language}&`;
    }
    if (discipline) {
      search += `discipline=${discipline}&`;
    }
    if (description) {
      search += `description=${description}&`;
    }
    if (autor) {
      search += `autor=${autor}&`;
    }
    if (level) {
      search += `level=${level}&`;
    }
    if (range) {
      search += `range=${range}&`;
    }

    if (page) {
      search += `page=${page}&`;
    }
    console.log(search);
    setLoading(true);
    const fetchResources = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/v1/edusource/all?${search}`
      );
      console.log(data);
      setFilteredResources(data.edusources);
      setTotalPages(data.metadata.totalPages);
      setTotalResources(data.metadata.totalCount);
      setLoading(false);
    };
    fetchResources();
  }, [page, language, discipline, description, autor, level, range]);

  const handleResetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className='flex flex-col w-full items-center p-2 '>
      {loading && <Loader />}
      <h1 className='font-cinzel text-lg md:text-4xl mb-1 mt-3'>
        {totalResources} Recursos Educativos.
      </h1>
      <div className='flex items-center justify-center gap-4 p-2'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='bg-[#0e2235] text-white py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit  text-md cursor-pointer'>
          {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
        </p>
      </div>
      {showFilters && (
        <form
          className='flex flex-col items-center justify-center gap-2 w-full mb-2 p-2'
          ref={formRef}>
          <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2'>
            <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full mb-2'>
              <input
                type='text'
                onChange={handleSerachByDescription}
                placeholder='Buscar por descripción'
                className=' w-full p-2 rounded-md border border-gray-700'
              />
            </div>
            <div className='flex md:flex-row flex-col items-center gap-2 justify-center w-full mb-2'>
              <input
                type='text'
                onChange={handleSerachByAutor}
                placeholder='Buscar por autor'
                className='w-full p-2 rounded-md border border-gray-700'
              />
            </div>
          </div>
          <div className='flex flex-col items-center gap-2 justify-center w-full'>
            <div className='flex w-full flex-col md:flex-row items-center justify-around gap-1'>
              <div className='flex items-center gap-2 flex-wrap w-full'>
                <label
                  htmlFor='lang'
                  className=' whitespace-nowrap block text-sm font-medium leading-6 text-gray-900'>
                  Idioma del Recurso:{' '}
                </label>
                <select
                  onChange={(e) => setLanguage(e.target.value)}
                  id='lang'
                  name='lang'
                  required
                  className='block w-full rounded-md border-0 
               text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 py-2.5'>
                  <option value=''>Selecciona una opción</option>
                  <option value='es'>🇪🇸 Español</option>
                  <option value='it'>🇮🇹 Italiano</option>
                  <option value='pt'>🇵🇹 Portugués</option>
                  <option value='en'>🇬🇧 Inglés</option>
                  <option value='fr'>🇫🇷 Francés</option>
                  <option value='de'>🇩🇪 Alemán</option>
                  <option value='other'>🌍 Otros</option>
                </select>
              </div>

              <div className='flex items-center gap-2 flex-wrap w-full '>
                <label
                  htmlFor='discipline'
                  className=' whitespace-nowrap block text-sm font-medium leading-6 text-gray-900'>
                  Disciplina:{' '}
                </label>
                <select
                  onChange={(e) => setDiscipline(e.target.value)}
                  id='discipline'
                  name='discipline'
                  value={discipline}
                  required
                  className='block w-full rounded-md border-0 py-2.5
               text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'>
                  <option value=''>Selecciona una disciplina</option>
                  <option value='artes'>Artes</option>
                  <option value='tics'>
                    Informatica Tecnologia (TICS TEPS TRICS)
                  </option>
                  <option value='lengua'>Lenguas (Idiomas-Literatura)</option>
                  <option value='matematicas'>Matemáticas</option>
                  <option value='ciencias-naturales'>Ciencias Naturales</option>
                  <option value='ciencias-sociales'>Ciencias Sociales</option>
                  <option value='salud'>
                    Salud–NB Educación Física. Educación mental
                  </option>
                  <option value='psicopedagogia'>Psicopedagogía</option>
                  <option value='otras'>Otras Categorías</option>
                </select>
              </div>
              <div className='flex items-center gap-2 flex-wrap w-full'>
                <label
                  htmlFor='range'
                  className=' whitespace-nowrap block text-sm font-medium leading-6 text-gray-900'>
                  Rango de edad del Recurso:{' '}
                </label>
                <input
                  type='number'
                  id='range'
                  name='range'
                  min={1}
                  max={18}
                  placeholder='1-18'
                  className='block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300
              placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  onChange={(e) => setRange(e.target.value)}
                />
              </div>
            </div>

            <button
              className='bg-[#0e2235] text-white py-2 px-3 flex items-center justify-center gap-3 rounded-md w-full md:w-fit self-end text-md'
              onClick={() => {
                handleResetForm();

                setLanguage(null);
                setDiscipline(null);
                setDescription(null);
                setAutor(null);
                setLevel(null);
                setRange(null);
              }}>
              Quitar Filtros
            </button>
          </div>
        </form>
      )}

      <div className='w-full flex items-center justify-between flex-wrap p-10 gap-2'>
        <ResourcesCard resources={filteredResources} />
      </div>
      <div className='w-full h-4 flex justify-end items-center gap-2'>
        <div className='flex items-center gap-2 flex-nowrap'>
          <button
            onClick={() => handlePage('prev')}
            className='text-[#0e2235] py-2 px-3 flex items-center gap-3 rounded-md w-full md:w-fit self-end text-md'>
            <FaArrowCircleLeft />
          </button>
          <p className='text-gray-500 whitespace-nowrap text-xs md:text-[16px] '>
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
