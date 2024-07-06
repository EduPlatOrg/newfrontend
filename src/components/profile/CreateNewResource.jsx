import { useState, useEffect, Suspense } from 'react';

import Loader from '../Loader';
import { useSearchParams } from 'react-router-dom';
import CreateEditResourceForm from './CreateEditResourceForm';
import { getResourceByIdRequest } from '../../api/resources';
const CreateNewResource = () => {
  const [resource, setResource] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id'); // Ahora accedes correctamente a 'id'
  console.log(id);

  useEffect(() => {
    async function fetchEvent() {
      const resourceData = await getResourceByIdRequest(id);

      setResource(resourceData?.data?.edusource);
    }
    if (id) {
      fetchEvent();
    } else {
      setResource({});
    }
  }, [id]); // El array vacío asegura que esto se ejecute solo una vez, al montar el componente.

  if (!resource) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <CreateEditResourceForm resource={resource} />
    </Suspense>
  );
};

export default CreateNewResource;
