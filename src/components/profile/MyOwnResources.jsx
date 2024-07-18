import { Check } from 'lucide-react';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const MyOwnResources = ({ resources }) => {
  if (resources) console.log(resources);
  return (
    <>
      {resources ? (
        <div className='container md:divide-y-4'>
          {resources.length > 0 &&
            resources.map((resource) => (
              <div
                className='flex md:flex-row flex-col md:items-start items-center gap-2 w-full mb-10 min-h-1 flex-grow '
                key={resource._id}>
                <div className=''>
                  <img
                    src={resource.image}
                    alt='Imagen del Recurso'
                    className='max-w-[200px] max-h-[120px] rounded-md min-w-[200px] object-contain'
                  />
                </div>
                <div className='flex flex-col md:items-start items-center gap-2 leading-6 w-full'>
                  <h3 className='text-md font-serif'>{resource.title}</h3>
                  <p className='text-xs gap-2'>
                    Disciplina:{' '}
                    <span>
                      <em>{resource.discipline}</em>
                    </span>
                  </p>
                  <p className='text-xs gap-2'>
                    Sub-disciplina:{' '}
                    {resource.subDicipline.map((dis, index) => (
                      <span key={index}>
                        <em>{dis}</em>
                      </span>
                    ))}
                  </p>
                  <p className='flex items-center gap-2 text-xs'>
                    Contiene PDF:{' '}
                    {resource.pdfDocument !== undefined ? (
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
                    {resource.externalLink !== undefined ? (
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
                    to={`/profile-panel/my-resources/new-resource?id=${resource._id}`}
                    className='flex w-full  md:items-end justify-center  md:justify-end h-full self-end'>
                    <button
                      className='bg-[#0e2235] text-white py-2 px-3 
              flex items-center justify-center gap-3 rounded-md md:w-full w-[200px] text-xs whitespace-nowrap'>
                      Editar Recurso
                    </button>
                  </Link>
                  <Link
                    to={`/recursos-educativos/${resource._id}`}
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

export default MyOwnResources;
