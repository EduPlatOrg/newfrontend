/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { Suspense, useEffect, useState } from 'react';
import ResourceDetailCard from './ResourceDetailCard';
import { useResources } from '../context/ResourcesContext';

const ResourceDetail = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const { getResourceById } = useResources();

  useEffect(() => {
    async function fetchResource() {
      const response = await getResourceById(id);

      setResource(response.edusource);
    }
    if (id) {
      fetchResource();
    } else {
      setResource({});
    }
  }, [id]);
  if (!resource) {
    return <Loader />;
  }
  const updateResourceWithNewValoration = (newValoration) => {
    setResource(newValoration);
  };

  return (
    <Suspense fallback={<Loader />}>
      <ResourceDetailCard
        resource={resource}
        onNewValoration={updateResourceWithNewValoration}
      />
    </Suspense>
  );
};

export default ResourceDetail;
