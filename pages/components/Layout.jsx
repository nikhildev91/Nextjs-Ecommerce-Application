import React, { useState } from 'react';
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineLogin,
} from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { TbNotes } from 'react-icons/tb';
import { BiLogOutCircle } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  return (
    <>
      <div className="fixed bg-white w-full min-h-12 shadow-md flex justify-center items-center px-4 p-5 z-10">
        <div className="container m-auto flex justify-between items-center">
          <div className="md:hidden flex">
            <GiHamburgerMenu
              className="text-xl"
              onClick={() => setShowCategoryMenu(true)}
            />
          </div>
          <p
            className="text-3xl md:text-4xl font-bold text-blue-500 flex cursor-pointer"
            onClick={() => router.push('/')}
          >
            Flipcart{' '}
            <span>
              <AiOutlineShoppingCart className="text-xl" />
            </span>
          </p>
          <ul className="hidden md:flex">
            <li className="">Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Beauty</li>
            <li>Sports</li>
          </ul>
          <div className="flex">
            <div className="mx-4 flex">
              <AiOutlineHeart className="text-3xl cursor-pointer hidden md:flex" />
              <span className="text-white text-[12px] hidden md:flex bg-blue-500 p-1 h-4 min-w-4 rounded-full ml-[-10px]  justify-center items-center">
                11
              </span>
            </div>
            <AiOutlineShoppingCart className="text-3xl cursor-pointer hidden md:flex" />{' '}
            <span className="text-white text-[12px] hidden md:flex bg-blue-500 p-1 h-4 min-w-4 rounded-full ml-[-10px]  justify-center items-center">
              11
            </span>
            <VscAccount
              className="text-3xl md:mx-4 cursor-pointer dropMenu"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </div>

      {/* menu  */}
      {showMenu && (
        <div className="w-full flex justify-end">
          <div className="bg-gray-100 p-2 min-h-60 w-52 md:mr-[250px] rounded-xl shadow-md float-right fixed top-20 z-10">
            <ul>
              <li className="w-full p-4 flex text-lg items-center float-left">
                <VscAccount className="mr-4" />
                My Account
              </li>
              <li className="w-full p-4 flex text-lg items-center float-left">
                <TbNotes className="mr-4" />
                My Orders
              </li>
              <li className="w-full p-4 flex text-lg items-center float-left">
                <AiOutlineShoppingCart className="mr-4" /> Cart
              </li>
              <li className="w-full p-4 flex text-lg items-center float-left">
                <AiOutlineHeart className="mr-4" /> Wishlist
              </li>
              <li className="w-full p-4 flex text-lg items-center float-left">
                <AiOutlineLogin className="mr-4" /> Login
              </li>
              <li className="w-full p-4 flex text-lg items-center float-left">
                <BiLogOutCircle className="mr-4" /> Logout
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* mobile menu */}
      {showCategoryMenu && (
        <div className="w-full h-screen z-20 fixed bg-white p-5">
          <FaTimes
            className="float-right text-xl cursor-pointer"
            onClick={() => setShowCategoryMenu(false)}
          />
          <div className="flex justify-center items-center h-screen">
            <ul>
              <li
                className="text-3xl my-4"
                onClick={() => {
                  router.push('/');
                  // setShowCategoryMenu(false);
                }}
              >
                Home
              </li>
              <li
                className="text-3xl my-4"
                onClick={() => {
                  router.push('/men');
                  // setShowCategoryMenu(false);
                }}
              >
                Men
              </li>
              <li className="text-3xl my-4">Women</li>
              <li className="text-3xl my-4">Kids</li>
              <li className="text-3xl my-4">Beauty</li>
              <li className="text-3xl my-4">Sports</li>
            </ul>
          </div>
        </div>
      )}
      <div className="w-full pt-20">{children}</div>
      <footer className="min-h-[50px] bg-gray-200 w-full flex justify-center items-center mt-5">
        <p>Copyright @ Nikhil Dev A S 2023</p>
      </footer>
    </>
  );
}
