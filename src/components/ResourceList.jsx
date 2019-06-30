import React, { useEffect, useState } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await jsonPlaceholder.get(`/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);

  return (
    <div>
      <ul>
        {resources.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
