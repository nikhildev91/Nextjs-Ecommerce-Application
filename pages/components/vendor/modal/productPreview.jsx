/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { use } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import Layout from '../components/vendor/Layout';

export default function ProductPreview({ showModal, setShowModal, product }) {
  const router = useRouter();
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
            <div className="relative w-auto my-6 mx-auto mt-[700px] max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Product Preview</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black border opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="w-full">
                    <Image
                      src={product.image}
                      alt={product.productName}
                      width={500}
                      height={500}
                      className="w-full"
                    />

                    <div className="mt-10">
                      <h1>{product.productName}</h1>
                      <p className="mt-3 text-gray-300 text-xl">
                        {product.catchyTitle}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="mt-3">
                          <span className="font-bold">Color : </span>
                          {product.color}
                        </div>
                        <p className="font-bold">Price : ₹{product.price}</p>
                      </div>

                      <div className="mt-3 flex justify-between">
                        <p>Total Stock : {product.totalStock}</p>
                        <p>Sold Stock : {product.purchaseCount}</p>
                      </div>
                      <div className="mt-3">
                        <span className="font-bold">Short Description : </span>
                        <p>{product.description}</p>
                      </div>
                      <div className="mt-3">
                        <span className="font-bold">Product Details : </span>
                        <p>{product.productDetails}</p>
                      </div>
                      <div className="mt-3">
                        <p className="font-bold">Sizes:</p>
                        <div className="flex items-center">
                          {product.size.map((size, index) => {
                            return (
                              <button
                                className="p-3 text-white bg-gray-400 ml-1"
                                key={index}
                              >
                                {size}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="font-bold">Tags:</p>
                        <div className="flex items-center">
                          {product.tags.map((tag, index) => {
                            return (
                              <button
                                className="p-3 text-white bg-gray-400 ml-1"
                                key={index}
                              >
                                {tag}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* <pre>{JSON.stringify(product, null, 4)}</pre> */}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
