import React from 'react';
import Layout from './components/Layout';
import { IoIosSearch } from 'react-icons/io';
import Itemcards from './components/Itemcards';

export default function Search() {
  return (
    <Layout>
      <div className="h-20 bg-blue-50 justify-center md:flex pt-14">
        <div className="w-[95%] m-1 md:w-[40%] h-14 border-2 rounded-full absolute flex justify-between bg-white">
          <input
            type="text"
            placeholder="Type your keywords"
            className="md:p-2 lg:p-3 rounded-s-full w-[90%]"
          />
          <button className="w-[50px] h-[50px] bg-black rounded-full flex justify-center items-center animate-pulse">
            <IoIosSearch className="text-2xl text-white" />
          </button>
        </div>
      </div>
      <div className="container m-auto mt-12 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center w-[60%]">
            <div className="w-[15px] h-[15px] text-[10px] p-3 md:text-sm md:w-[50px] md:h-[50px] flex justify-center items-center md:p-5 border-2 hover:bg-blue-500 hover:text-white mr-3 rounded-full">
              1
            </div>
            <div className="w-[15px] h-[15px] text-[10px] p-3 md:text-sm md:w-[50px] md:h-[50px] flex justify-center items-center md:p-5 border-2 hover:bg-blue-500 hover:text-white mr-3 rounded-full">
              2
            </div>
            <div className="w-[15px] h-[15px] text-[10px] p-3 md:text-sm md:w-[50px] md:h-[50px] flex justify-center items-center md:p-5 border-2 hover:bg-blue-500 hover:text-white mr-3 rounded-full">
              3
            </div>
          </div>
          <button className="text-sm p-2 border-2 md:p-5 md:w-[200px] hover:text-white hover:bg-black rounded-full">
            Show More
          </button>
        </div>
      </div>
    </Layout>
  );
}
