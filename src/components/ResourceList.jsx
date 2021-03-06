import PropTypes from 'prop-types';
import React from 'react';
import useResources from '../hooks/useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

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

ResourceList.propTypes = {
  resource: PropTypes.string.isRequired,
};

export default ResourceList;
