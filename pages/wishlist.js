import React from 'react';
import Layout from './components/Layout';
import Itemcards from './components/Itemcards';

export default function wishlist() {
  return (
    <Layout>
      <div className="container m-auto mt-10 p-2 md:p-0">
        <u>
          <p className="text-2xl md:text-4xl font-bold">Wishlist</p>
        </u>
        <hr className="w-full mt-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
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

        <div className="mt-5 flex justify-center">
          <button className="bg-blue-500 p-5 rounded-full w-[300px] font-bold text-white">
            LOAD MORE
          </button>
        </div>
      </div>
    </Layout>
  );
}
