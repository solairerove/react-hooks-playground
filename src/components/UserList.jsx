import React from 'react';
import useResources from '../hooks/useResources';

const UserList = () => {
  const users = useResources('users');

  return (
    <div>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
