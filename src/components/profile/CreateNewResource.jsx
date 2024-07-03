import { useState, useEffect, Suspense } from 'react';

import Loader from '../Loader';
import { useSearchParams } from 'react-router-dom';
import CreateEditRecourceForm from './CreateEditRecourceForm';
import { getRecourceByIdRequest } from '../../api/recources';
const CreateNewResource = () => {
  const [recource, setRecource] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id'); // Ahora accedes correctamente a 'id'
  console.log(id);

  useEffect(() => {
    async function fetchEvent() {
      const recourceData = await getRecourceByIdRequest(id);

      setRecource(recourceData?.data?.edusource);
    }
    if (id) {
      fetchEvent();
    } else {
      setRecource({});
    }
  }, [id]); // El array vacío asegura que esto se ejecute solo una vez, al montar el componente.

  if (!recource) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <CreateEditRecourceForm recource={recource} />
    </Suspense>
  );
};

export default CreateNewResource;
