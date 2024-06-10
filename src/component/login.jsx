import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUserLoginMutation } from '../userapi/userapislice';
import { toast } from 'react-toastify';
import { Qm } from './constants';  // Import Qm

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirect = new URLSearchParams(search).get('redirect') || '/';

  const [loginUser, { isLoading }] = useUserLoginMutation(); // Renamed to loginUser to avoid conflict
  const userInfo = useSelector(state => state.auth.userInfo); // Correctly destructured userInfo

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password }).unwrap();
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error(error.data?.message || 'Failed to login.');
    }
  };

  return (
    <div>
      <section className='pl-[10rem] flex flex-wrap'>
        <div className='mr-[4rem] mt-[5rem]'>
          <h1 className='text-2xl font-semibold mb-4'>SIGN IN</h1>
          <form className='container w-[40rem]' onSubmit={handleSubmit}>
            <div className='my-[2rem]'>
              <label className='block text-sm font-medium text-white'>Email</label>
              <input
                className='mt-1 p-2 border rounded w-full'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='my-[2rem]'>
              <label className='block text-sm font-medium text-white'>Password</label>
              <input
                className='mt-1 p-2 border rounded w-full'
                type="password" // Correct input type for password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              disabled={isLoading}
              type='submit'
              className='bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]'
            >
              {isLoading ? 'SIGN IN...' : 'SIGN IN'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
