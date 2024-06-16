import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';


const ComponentB = () => {

  // Use the context in any component that needs access to the shared state.
  const { user, setUser } = useContext(UserContext);
  const updateName = () => {
    setUser({ ...user, name: 'Nikola tesla' });
  };

  return (
    <div>
      <h1>ComponentB</h1>
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  )
}

export default ComponentB