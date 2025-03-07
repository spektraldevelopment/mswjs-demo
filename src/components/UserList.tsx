import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { User } from '../interfaces';

const UserList: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);
  const { fetchUsers } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.users);

  useEffect(() => {
    fetchUsers();
  }, []);

  // * Assign the fetched data to the state
  useEffect(() => {
    if(data) {
      setUsers(data);
    }
  }, [data]);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      );
    });
  };  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {renderUsers()}
      </ul>
    </div>
  );
};

export default UserList;
