import { useEffect, useState } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await jsonPlaceholder.get(`/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
