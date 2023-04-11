import React from 'react';
import Layout from './components/Layout';
import { AiOutlineBgColors } from 'react-icons/ai';
import { RxSize } from 'react-icons/rx';
import { useRouter } from 'next/router';

export default function Cart() {
  const router = useRouter();
  return (
    <Layout>
      <div className="container m-auto mt-10 p-3 md:p-0">
        <u>
          <p className="text-xl md:text-3xl font-bold">Shopping Cart</p>
        </u>
        <hr className="w-full mt-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5">
          <div className="w-full lg:pr-20 lg:border-r-2 min-h-[60vh]">
            <div className="cartItem mt-5">
              <div className="flex justify-between w-[100% ]">
                <div className="w-[51%] flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] md:w-[150px]"
                  />
                  <div className="ml-1">
                    <p className="text-[12px] font-bold md:text-[16px]">
                      Product Name
                    </p>
                    <p className="flex items-center text-[12px]">
                      <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                      <span className="text-gray-400">|</span>&nbsp; &nbsp;{' '}
                      <RxSize /> &nbsp; XS
                    </p>

                    {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                  </div>
                </div>
                <div className="w-[24%] flex justify-between p-1">
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    -
                  </button>
                  <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    1
                  </span>
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    +
                  </button>
                </div>
                <div className="w-[25%]">
                  <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold md:w-[50%]">
                    ₹ 300.00
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-1 items-center">
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[55px] md:w-[100px] flex justify-center items-center">
                  In Stock
                </div>
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[70px] md:w-[150px] flex justify-center items-center">
                  Out of Stock
                </div>
                <div className="text-[13px] text-blue-400 md:text-lg">
                  Remove
                </div>
              </div>
              <hr className="w-full mt-5" />
            </div>
            <div className="cartItem mt-5">
              <div className="flex justify-between w-[100% ]">
                <div className="w-[51%] flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] md:w-[150px]"
                  />
                  <div className="ml-1">
                    <p className="text-[12px] font-bold md:text-[16px]">
                      Product Name
                    </p>
                    <p className="flex items-center text-[12px]">
                      <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                      <span className="text-gray-400">|</span>&nbsp; &nbsp;{' '}
                      <RxSize /> &nbsp; XS
                    </p>

                    {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                  </div>
                </div>
                <div className="w-[24%] flex justify-between p-1">
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    -
                  </button>
                  <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    1
                  </span>
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    +
                  </button>
                </div>
                <div className="w-[25%]">
                  <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold md:w-[50%]">
                    ₹ 300.00
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-1 items-center">
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[55px] md:w-[100px] flex justify-center items-center">
                  In Stock
                </div>
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[70px] md:w-[150px] flex justify-center items-center">
                  Out of Stock
                </div>
                <div className="text-[13px] text-blue-400 md:text-lg">
                  Remove
                </div>
              </div>
              <hr className="w-full mt-5" />
            </div>
            <div className="cartItem mt-5">
              <div className="flex justify-between w-[100% ]">
                <div className="w-[51%] flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] md:w-[150px]"
                  />
                  <div className="ml-1">
                    <p className="text-[12px] font-bold md:text-[16px]">
                      Product Name
                    </p>
                    <p className="flex items-center text-[12px]">
                      <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                      <span className="text-gray-400">|</span>&nbsp; &nbsp;{' '}
                      <RxSize /> &nbsp; XS
                    </p>

                    {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                  </div>
                </div>
                <div className="w-[24%] flex justify-between p-1">
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    -
                  </button>
                  <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    1
                  </span>
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    +
                  </button>
                </div>
                <div className="w-[25%]">
                  <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold md:w-[50%]">
                    ₹ 300.00
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-1 items-center">
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[55px] md:w-[100px] flex justify-center items-center">
                  In Stock
                </div>
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[70px] md:w-[150px] flex justify-center items-center">
                  Out of Stock
                </div>
                <div className="text-[13px] text-blue-400 md:text-lg">
                  Remove
                </div>
              </div>
              <hr className="w-full mt-5" />
            </div>
            <div className="cartItem mt-5">
              <div className="flex justify-between w-[100% ]">
                <div className="w-[51%] flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                    alt=""
                    className="w-[60px] md:w-[150px]"
                  />
                  <div className="ml-1">
                    <p className="text-[12px] font-bold md:text-[16px]">
                      Product Name
                    </p>
                    <p className="flex items-center text-[12px]">
                      <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                      <span className="text-gray-400">|</span>&nbsp; &nbsp;{' '}
                      <RxSize /> &nbsp; XS
                    </p>

                    {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                  </div>
                </div>
                <div className="w-[24%] flex justify-between p-1">
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    -
                  </button>
                  <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    1
                  </span>
                  <button className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                    +
                  </button>
                </div>
                <div className="w-[25%]">
                  <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold md:w-[50%]">
                    ₹ 300.00
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-1 items-center">
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[55px] md:w-[100px] flex justify-center items-center">
                  In Stock
                </div>
                <div className="text-[10px] md:text-[15px] border rounded-full p-1 w-[70px] md:w-[150px] flex justify-center items-center">
                  Out of Stock
                </div>
                <div className="text-[13px] text-blue-400 md:text-lg">
                  Remove
                </div>
              </div>
              <hr className="w-full mt-5" />
            </div>
          </div>
          <div className="w-full p-5 flex justify-center ">
            <div className="w-full md:w-[60%]">
              <p className="font-bold text-lg md:text-2xl">Order Summary</p>

              <div className="mt-7">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-bold">₹ 100.00</p>
                </div>
                <hr className="w-full" />
              </div>
              <div className="mt-7">
                <div className="flex justify-between">
                  <p>Shpping estimate</p>
                  <p className="font-bold">₹ 100.00</p>
                </div>
                <hr className="w-full" />
              </div>
              <div className="mt-7">
                <div className="flex justify-between">
                  <p>Tax estimate</p>
                  <p className="font-bold">₹ 100.00</p>
                </div>
                <hr className="w-full" />
              </div>
              <div className="mt-7">
                <div className="flex justify-between font-bold text-xl">
                  <p>Order Total</p>
                  <p>₹ 100.00</p>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => router.push('/checkout')}
                  className="bg-black text-sm text-white p-3 w-full lg:p-5 lg:w-[50%] rounded-full lg:text-xl"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
