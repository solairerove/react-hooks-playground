import { useEffect, useState } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (type) => {
      const response = await jsonPlaceholder.get(`/${type}`);
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
