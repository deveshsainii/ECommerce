

import React from 'react';
import { useUserLogoutMutation } from '../userapi/userapislice';

const demo = () => {
  const [logout, { isLoading }] = useUserLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap(); // Call the logout mutation
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout} disabled={isLoading}>
      Logout
    </button>
  );
};

export default demo;