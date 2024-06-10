import React from "react";
import './navbar.css'
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  useUserLogoutMutation } from "../userapi/userapislice";
import { userlogout } from "../auth/userauth";
import { Qm } from './constants';  // Import Qm


const navbar = () => {

  const { userinfo } = useSelector(state => state.auth);

  const [dropdownopen, setDropdownopen] = useState(false);
  const [showsidebar, setShowsidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownopen(!dropdownopen); 
  };

  const togglesidebar = () => {
    setShowsidebar(!showsidebar);
  };

  const closesidebar = () => {
    setShowsidebar(false);
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userlogout, data, isloading } = useUserLogoutMutation(); 
// console.log(data.reverse());

  const logouthandler = async () => {
    try 
     { await userlogout().unwrap();
      dispatch(userlogout());
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div
        style={{ zIndex: 999 }}
        className={`${
          showsidebar ? ".hidden" : "flex"
        } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-black w-[4%] hover:w-[15%] h-[100vh] fixed`}
        id="navigation-container"
      >
        <div className="flex flex-col justify-center space-y-4">
          <Link
            to="/"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <AiOutlineHome className=" mr-2 mt-[3rem]" size={26}  />
            <span className=".hidden nav-items-name mt-[3rem]">HOME</span>
          </Link>
          <Link
            to="/shop"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <AiOutlineShopping size={26} className="mr-2 mt-[3rem]" />
            <span className=".hidden nav-items-name mt-[3rem]">SHOP</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <AiOutlineShoppingCart size={26} className="mr-2 mt-[3rem]" />
            <span className=".hidden nav-items-name mt-[3rem]">CART</span>
          </Link>
          <Link
            to="/favorites"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <FaHeart size={26} className="mr-2 mt-[3rem]" />
            <span className=".hidden nav-items-name mt-[3rem]">FAVORITES</span>
          </Link>
        </div>


        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center text-gray-800 focus:outline-none ">

            {userinfo && userinfo ? <span>{userinfo.name}</span> : (<></>)}

          </button>
        </div>

          <ul>
            <li>
            <Link
            to="/login"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <AiOutlineLogin size={26} className="mr-2 mt-[3rem]" />
            <span className=".hidden nav-items-name mt-[3rem]">LOGIN</span>
          </Link>
            </li>

            <li>
            <Link
            to="/register"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <AiOutlineUserAdd size={26} className="mr-2 mt-[3rem]" />
            <span className=".hidden nav-items-name mt-[3rem]">REDISTER</span>
          </Link>
            </li>
          </ul>

      </div>
    </>
  );
};

export default navbar;
