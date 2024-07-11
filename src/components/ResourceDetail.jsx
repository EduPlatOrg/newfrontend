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
  console.log(id);
  useEffect(() => {
    async function fetchResource() {
      const response = await getResourceById(id);
      console.log(response);
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

  return (
    <Suspense fallback={<Loader />}>
      <ResourceDetailCard resource={resource} />
    </Suspense>
  );
};

export default ResourceDetail;
