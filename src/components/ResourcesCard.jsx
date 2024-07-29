import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useUser } from '../context/UserContext';

const ResourcesCard = ({ resources }) => {
  const { user } = useUser();
  if (!resources) return <Loader />;

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {resources.map((resource) => (
        <div
          className='min-h-fit w-64 flex flex-col justify-between p-2 rounded-lg gap-1 flex-grow'
          key={resource._id}>
          <div className='h-36 bg-gray-200 rounded-lg'>
            <img
              src={resource.image}
              alt={resource.title}
              className='w-full h-36 object-cover rounded-lg'
            />
          </div>
          <h3 className='text-center mb-2 font-bold'>{resource.title}</h3>
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
            {resource.discipline}
          </p>
          {resource.subDicipline && (
            <p className='text-xs font-medium'>
              <strong>Sub-Disciplina: </strong>
              {resource?.subDicipline.join(', ')}
            </p>
          )}
          <div className='flex justify-end mt-3 gap-2 '>
            <Link
              to={`/recursos-educativos/${resource._id}`}
              className='bg-gray-300 py-0.5 px-2 rounded-sm text-xs font-bold'>
              Ver más
            </Link>
            {user?.isBoss && (
              <>
                <Link
                  to={`/recursos-educativos/${resource._id}`}
                  className='bg-gray-300 py-0.5 px-2 rounded-sm text-xs font-bold'>
                  Eliminar
                </Link>
                <Link
                  to={`/profile-panel/my-resources/new-resource?id=${resource._id}`}
                  className='bg-gray-300 py-0.5 px-2 rounded-sm text-xs font-bold'>
                  Editar
                </Link>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcesCard;
