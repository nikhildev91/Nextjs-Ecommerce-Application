/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Carousel from './components/Carousel';
import Itemcards from './components/Itemcards';
import Layout from './components/Layout';
import { BsArrowRight } from 'react-icons/bs';

function Home({ products }) {
  return (
    <Layout>
      <Carousel />
      <div className="container min-h-[10vh] m-auto w-full">
        <p className="text-4xl font-bold mt-10">New Arrivals.</p>
        {/* <pre>{JSON.stringify(products, null, 4)}</pre> */}
        <div className=" w-full ml-2 md:ml-0 removeHScroll mt-5 flex flex-row overflow-x-auto gap-4">
          {products &&
            products.map((product, index) => {
              return <Itemcards key={index} product={product} />;
            })}
        </div>
        <section className="mt-5 min-h-screen w-full bg-gray-100 rounded-3xl p-10">
          <div className="w-full h-20 flex items-center justify-center mt-10">
            <p className="font-bold text-4xl md:text-5xl">Start Exploring.</p>
          </div>
          <div className="w-full flex items-center justify-center mt-10">
            <div className="shadow-md bg-white pl-2 pr-2 h-10 rounded-full w-full md:w-[50%] flex items-center justify-center">
              <div className="flex flex-row overflow-x-auto gap-4 h-10 removeHScroll items-center ml-5">
                <div className="text-sm md:px-10 cursor-pointer p-3 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Men
                </div>
                <div className="text-sm md:px-10 cursor-pointer p-3 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Women
                </div>
                <div className="text-sm md:px-10 cursor-pointer p-3 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Kids
                </div>
                <div className="text-sm md:px-10 cursor-pointer p-3 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Beauty
                </div>
                <div className="text-sm md:px-10 cursor-pointer p-3 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Sports
                </div>
              </div>
            </div>
          </div>
          <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="w-full min-h-[200px] bg-white rounded-3xl hover:shadow-lg p-3">
              <div className="flex justify-between items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                  className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-full"
                  alt=""
                />

                <p className="md:text-md font-bold text-sm text-gray-400">
                  1283 Products
                </p>
              </div>

              <div className="mt-10">
                <p className="text-lg text-gray-300">Manufacture</p>
                <p className="text-xl font-bold mt-1">Category Name</p>
                <div className="flex justify-end mt-5 items-center font-bold text-blue-500 ">
                  <p>See Collections</p> &nbsp; &nbsp;
                  <BsArrowRight className="font-bold" />
                </div>
              </div>
            </div>
            <div className="w-full min-h-[200px] bg-white rounded-3xl hover:shadow-lg p-3">
              <div className="flex justify-between items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                  className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-full"
                  alt=""
                />

                <p className="md:text-md font-bold text-sm text-gray-400">
                  1283 Products
                </p>
              </div>

              <div className="mt-10">
                <p className="text-lg text-gray-300">Manufacture</p>
                <p className="text-xl font-bold mt-1">Category Name</p>
                <div className="flex justify-end mt-5 items-center font-bold text-blue-500 ">
                  <p>See Collections</p> &nbsp; &nbsp;
                  <BsArrowRight className="font-bold" />
                </div>
              </div>
            </div>
            <div className="w-full min-h-[200px] bg-white rounded-3xl hover:shadow-lg p-3">
              <div className="flex justify-between items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                  className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-full"
                  alt=""
                />

                <p className="md:text-md font-bold text-sm text-gray-400">
                  1283 Products
                </p>
              </div>

              <div className="mt-10">
                <p className="text-lg text-gray-300">Manufacture</p>
                <p className="text-xl font-bold mt-1">Category Name</p>
                <div className="flex justify-end mt-5 items-center font-bold text-blue-500 ">
                  <p>See Collections</p> &nbsp; &nbsp;
                  <BsArrowRight className="font-bold" />
                </div>
              </div>
            </div>
            <div className="w-full min-h-[200px] bg-white rounded-3xl hover:shadow-lg p-3">
              <div className="flex justify-between items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                  className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-full"
                  alt=""
                />

                <p className="md:text-md font-bold text-sm text-gray-400">
                  1283 Products
                </p>
              </div>

              <div className="mt-10">
                <p className="text-lg text-gray-300">Manufacture</p>
                <p className="text-xl font-bold mt-1">Category Name</p>
                <div className="flex justify-end mt-5 items-center font-bold text-blue-500 ">
                  <p>See Collections</p> &nbsp; &nbsp;
                  <BsArrowRight className="font-bold" />
                </div>
              </div>
            </div>
            <div className="w-full min-h-[200px] bg-white rounded-3xl hover:shadow-lg p-3">
              <div className="flex justify-between items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                  className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-full"
                  alt=""
                />

                <p className="md:text-md font-bold text-sm text-gray-400">
                  1283 Products
                </p>
              </div>

              <div className="mt-10">
                <p className="text-lg text-gray-300">Manufacture</p>
                <p className="text-xl font-bold mt-1">Category Name</p>
                <div className="flex justify-end mt-10 items-center font-bold text-blue-500 ">
                  <p>See Collections</p> &nbsp; &nbsp;
                  <BsArrowRight className="font-bold" />
                </div>
              </div>
            </div>
            <div className="w-full min-h-[200px] bg-white rounded-3xl hover:shadow-lg p-3">
              <div className="flex justify-between items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                  className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-full"
                  alt=""
                />

                <p className="md:text-md font-bold text-sm text-gray-400">
                  1283 Products
                </p>
              </div>

              <div className="mt-10">
                <p className="text-lg text-gray-300">Manufacture</p>
                <p className="text-xl font-bold mt-1">Category Name</p>
                <div className="flex justify-end mt-5 items-center font-bold text-blue-500 ">
                  <p>See Collections</p> &nbsp; &nbsp;
                  <BsArrowRight className="font-bold" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-[70vh] rounded-3xl bg-yellow-100 mt-10"></section>

        <p className="text-3xl md:text-4xl font-bold mt-5 md:mt-20">
          Best Sellers.{' '}
          <span className="text-gray-400">Best selling of the month</span>
        </p>
        <div className=" w-full ml-2 md:ml-0 removeHScroll mt-10  md:mt-20 flex flex-row overflow-x-auto gap-4">
          {products &&
            products.map((product, index) => {
              return <Itemcards key={index} product={product} />;
            })}
        </div>

        <section className="w-full h-[70vh] rounded-3xl bg-yellow-100 mt-10"></section>
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/customer/products`);

  if (res) {
    var products = await res.json();
  }

  // Pass data to the page via props
  return { props: { products } };
}

export default Home;
