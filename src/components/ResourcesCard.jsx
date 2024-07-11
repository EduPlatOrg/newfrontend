import { Link } from 'react-router-dom';
import Loader from './Loader';

const ResourcesCard = ({ resources }) => {
  if (!resources) return <Loader />;
  console.log(resources);
  return (
    <>
      {resources.map((resource) => (
        <div
          className='h-64 w-64 flex flex-col justify-between p-2 rounded-lg gap-1'
          key={resource._id}>
          <h3 className='text-center mb-2 font-bold'>{resource.title}</h3>
          <div className='h-36 bg-gray-200 rounded-lg'>
            <img
              src={resource.image}
              alt={resource.title}
              className='w-full h-36 object-cover rounded-lg'
            />
          </div>
          <div className='flex justify-between w-full items-center'>
            <p className='text-xs font-medium mt-2 '>
              <strong>Edades entre: </strong>
              1-3
            </p>
            <p className='text-xs font-medium mt-2 '>
              <strong>Nivel: </strong>
              {resource.level}
            </p>
          </div>
          <p className='text-xs font-medium'>
            <strong>Disciplina: </strong>
            {resource.discipline[0]}
          </p>
          {resource.subDicipline && (
            <p className='text-xs font-medium'>
              <strong>Sub-Disciplina: </strong>
              {resource?.subDicipline.join(', ')}
            </p>
          )}
          <div className='flex justify-end mt-auto'>
            <Link
              to={`/recursos-educativos/${resource._id}`}
              className='bg-gray-300 py-0.5 px-2 rounded-sm text-xs font-bold'>
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResourcesCard;
