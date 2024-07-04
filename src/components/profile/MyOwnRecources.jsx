import { Check } from 'lucide-react';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const MyOwnRecources = ({ recources }) => {
  if (recources) console.log(recources);
  return (
    <>
      {recources ? (
        <div className='container md:divide-y-4'>
          {recources.length > 0 &&
            recources.map((recource) => (
              <div
                className='flex md:flex-row flex-col md:items-start items-center gap-2 w-full mb-10 min-h-1 flex-grow '
                key={recource._id}>
                <div className=''>
                  <img
                    src={recource.image}
                    alt='Imagen del Recurso'
                    className='max-w-[200px]'
                  />
                </div>
                <div className='flex flex-col md:items-start items-center gap-2 leading-6 w-full'>
                  <h3 className='text-md font-serif'>{recource.title}</h3>
                  <p className='text-xs gap-2'>
                    Disciplina:{' '}
                    {recource.discipline.map((dis, index) => (
                      <span key={index}>
                        <em>{dis}</em>
                      </span>
                    ))}
                  </p>
                  <p className='text-xs gap-2'>
                    Sub-disciplina:{' '}
                    {recource.subDicipline.map((dis, index) => (
                      <span key={index}>
                        <em>{dis}</em>
                      </span>
                    ))}
                  </p>
                  <p className='flex items-center gap-2 text-xs'>
                    Contiene PDF:{' '}
                    {recource.pdfDocument !== undefined ? (
                      <Check
                        className='text-green-500'
                        size={18}
                      />
                    ) : (
                      <RxCross1
                        className='text-red-500'
                        size={18}
                      />
                    )}
                  </p>
                  <p className='flex items-center gap-2 text-xs'>
                    Contiene Link externo:{' '}
                    {recource.externalLink !== undefined ? (
                      <Check
                        className='text-green-500'
                        size={18}
                      />
                    ) : (
                      <RxCross1
                        className='text-red-500'
                        size={18}
                      />
                    )}
                  </p>
                </div>
                <div className='flex flex-col gap-2 w-[200px] md:w-[100px] md:self-end'>
                  <Link
                    to={`/profile-panel/my-recources/new-recource?id=${recource._id}`}
                    className='flex w-full  md:items-end justify-center  md:justify-end h-full self-end'>
                    <button
                      className='bg-[#0e2235] text-white py-2 px-3 
              flex items-center justify-center gap-3 rounded-md md:w-full w-[200px] text-xs whitespace-nowrap'>
                      Editar Recurso
                    </button>
                  </Link>
                  <Link
                    to={`/recursos-educativos/${recource._id}`}
                    className='flex w-full  md:items-end justify-center  md:justify-end h-full self-end'>
                    <button
                      className='bg-[#0e2235] text-white py-2 px-3 
              flex items-center justify-center gap-3 rounded-md md:w-full w-[200px] text-xs whitespace-nowrap'>
                      Ver Detalles
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <h1>No tienes recursos</h1>
      )}
    </>
  );
};

export default MyOwnRecources;
