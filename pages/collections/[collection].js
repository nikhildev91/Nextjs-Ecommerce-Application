import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Itemcards from '../components/Itemcards';

export default function Collections() {
  const router = useRouter();
  const { collection } = router.query;
  const [priceRange, setPriceRange] = useState('500');
  return (
    <Layout>
      <div className="container m-auto p-2">
        <div className="mt-10">
          <p className="text-3xl md:text-5xl font-bold">
            {collection} Collections
          </p>
          <p className="mt-5 text-md md:text-lg text-gray-400">
            We not only help you design exceptional products, but also make it
            easy for you <br /> to share your designs with more like-minded
            people.
          </p>
          <hr className="w-full mt-5" />
        </div>
        <div className="w-full min-h-screen grid grid-cols-1 md:flex  mt-10 text-md md:text-lg">
          <div className="md:w-[25%] w-full p-3">
            <div className="categoryFilter">
              <p className="font-bold">Category</p>
              <div className="mt-3">
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label> <br />
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label> <br />
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label> <br />
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label>
              </div>
              <hr className="w-full mt-5" />
            </div>
            <div className="colorFilter mt-10">
              <p className="font-bold">Colors</p>
              <div className="mt-3">
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label> <br />
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label> <br />
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label> <br />
                <input type="checkbox" /> &nbsp; &nbsp;
                <label for="vehicle1"> I have a bike</label>
              </div>
              <hr className="w-full mt-5" />
            </div>
            {collection != 'Beauty' && (
              <div className="sizeFilter mt-10">
                <p className="font-bold">Sizes</p>
                <div className="mt-3">
                  <input type="checkbox" /> &nbsp; &nbsp;
                  <label for="vehicle1"> I have a bike</label> <br />
                  <input type="checkbox" /> &nbsp; &nbsp;
                  <label for="vehicle1"> I have a bike</label> <br />
                  <input type="checkbox" /> &nbsp; &nbsp;
                  <label for="vehicle1"> I have a bike</label> <br />
                  <input type="checkbox" /> &nbsp; &nbsp;
                  <label for="vehicle1"> I have a bike</label>
                </div>
                <hr className="w-full mt-5" />
              </div>
            )}
            <div className="priceRangeFilter mt-10">
              <p className="font-bold">Price Range</p>
              <input
                id="small-range"
                type="range"
                class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700 mt-5"
                min={0}
                max={1000}
                onChange={(e) => setPriceRange(e.target.value)}
                value={priceRange}
              />
              <div className="flex justify-between text-sm font-bold">
                <p>₹ 0</p> <p>-</p>
                <p>₹ {priceRange}</p>
              </div>
              <button className="bg-blue-500 text-white font-bold rounded-full p-[5px] text-[12px] mt-4">
                Submit
              </button>
              <hr className="w-full mt-5" />
            </div>
            <div className="sortOrder mt-10">
              <p className="font-bold">Sort Order</p>
              <div className="mt-3">
                <div>
                  <input
                    type="radio"
                    id="huey"
                    name="drone"
                    value="huey"
                    defaultChecked
                  />{' '}
                  &nbsp; &nbsp;
                  <label for="huey">Huey</label>
                </div>

                <div>
                  <input type="radio" id="dewey" name="drone" value="dewey" />
                  &nbsp; &nbsp;
                  <label for="dewey">Dewey</label>
                </div>

                <div>
                  <input type="radio" id="louie" name="drone" value="louie" />{' '}
                  &nbsp;&nbsp;
                  <label for="louie">Louie</label>
                </div>
              </div>
              <hr className="w-full mt-5" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 w-full p-5">
            <Itemcards />
            <Itemcards />
            <Itemcards />
            <Itemcards />
            <Itemcards />
            <Itemcards />
            <Itemcards />
            <Itemcards />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <button className="font-bold animate-pulse p-2 text-[15px] text-white shadow-lg md:text-xl md:p-5 bg-blue-500 md:w-[30%] rounded-2xl">
            LOAD MORE
          </button>
        </div>
      </div>
    </Layout>
  );
}
