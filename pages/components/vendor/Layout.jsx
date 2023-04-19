import { useRouter } from 'next/router';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { GiHamburgerMenu } from 'react-icons/gi';
import { signOut } from 'next-auth/react';
import Head from 'next/head';

export default function Layout({ children, name }) {
  const router = useRouter();
  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/vendor/login' });
  };
  return (
    <div>
      <Head>
        <title>Flicart Vendor</title>
      </Head>
      <ToastContainer position="top-center" />
      <nav className="h-20 w-full shadow-lg fixed z-20 bg-white">
        <div className="container m-auto flex justify-between items-center h-20">
          <div className="flex lg:hidden">
            <GiHamburgerMenu />
          </div>
          <p
            className="text-3xl font-bold cursor-pointer"
            onClick={() => router.push('/vendor')}
          >
            Vendor
          </p>

          <div className="flex justify-between items-center">
            <div className="px-10">{name}</div>
            {/* <button className="p-3 rounded-xl border hover:bg-red-500 font-bold bg-red-400 hover:text-white">
              Logout
            </button> */}
          </div>
        </div>
      </nav>
      <section className="flex pt-20">
        <div className="bg-blue-400 min-h-[100vh] w-[15%] hidden  lg:block fixed">
          <button
            className="w-full p-5 flex justify-start hover:bg-black font-bold hover:text-white border-b-black"
            onClick={() => router.push('/vendor')}
          >
            Dashboard
          </button>
          <button
            className="w-full p-5  flex justify-start hover:bg-black font-bold hover:text-white border-b-black"
            onClick={() => router.push('/vendor/add-product')}
          >
            Add Product
          </button>
          <button
            className="w-full p-5 flex justify-start  hover:bg-black font-bold hover:text-white border-b-black"
            onClick={() => router.push('/vendor/products')}
          >
            Products List
          </button>
          <button className="w-full p-5  flex justify-start hover:bg-black font-bold hover:text-white border-b-black">
            Add Product
          </button>
          <button
            className="w-full p-5  flex justify-start hover:bg-red-500 font-bold hover:text-white border-b-black"
            onClick={(e) => logoutClickHandler()}
          >
            Logout
          </button>
        </div>
        <div className="min-h-[88vh] w-full lg:w-[85%] pl-5 pt-14 lg:ml-[15%]">
          {children}
        </div>
      </section>
    </div>
  );
}
