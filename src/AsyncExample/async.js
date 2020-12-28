import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const Async = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, avatar_url } = user;
          return (
            <li key={id}>
                <h2>{id}</h2>
              <img src={avatar_url} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Async
