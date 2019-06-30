import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  const onButtonClick = resource => {
    setResource(resource);
  };

  return (
    <div className="ui container">
      <UserList />
      <div>
        <button
          onClick={() => onButtonClick('posts')}
          className="ui button primary"
        >
          Posts
        </button>
        <button
          onClick={() => onButtonClick('todos')}
          className="ui button primary"
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
