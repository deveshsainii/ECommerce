import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useUserLoginMutation } from '../userapi/userapislice.jsx';
import { toast } from 'react-toastify';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {search} = useLocation()
  const redirect = new URLSearchParams(search).get('redirect');


  const [login, {isloading}] = useUserLoginMutation()
  const {userinfo} = useSelector(state => state.auth)


  useEffect(() => {

    if (auth?.userinfo) {
      navigate(redirect || '/')
      
    }
  },[navigate, redirect, userinfo])


  return (

    <>

  <div>
    <section className=' pl-[10rem] flex flex-wrap'>

      <div className='mr-[4rem] mt-[5rem]'>
        <h1 className=' text-2xl font-semibold mb-4'>SIGN IN</h1>

        <form className=' conatiner w-[40rem]' >

          <div className=' my-[2rem]'>
          <label className='block text-sm font-medium text-white' >Email</label>
          <input className=' mt-1 p-2 border rounded w-full' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          </div>

          
          <div className=' my-[2rem]'>
          <label className='block text-sm font-medium text-white' >PASSWORD</label>
          <input className=' mt-1 p-2 border rounded w-full' type="email" value={password} onChange={(e) => setPassword(e.target.value)} />

          </div>
          <button disabled={isloading}  type='submit' className='bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem] '>
            {isloading ? 'SIGN IN...' : 'SIGN IN'}
          

          </button>

        </form>

      </div>

    </section>
  </div>
    </>
  )
}

export default login;
