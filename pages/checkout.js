/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Layout from './components/Layout';
import { AiOutlineBgColors } from 'react-icons/ai';
import { RxSize } from 'react-icons/rx';

export default function CheckoutPage() {
  const [showContactEditPage, setShowContactEditPage] = useState(false);
  const [showShippingAddressEditPage, setShowShippingAddressEditPage] =
    useState(false);
  const [showPaymentMethodEditPage, setShowPaymentMethodEditPage] =
    useState(false);
  return (
    <Layout>
      <div className="container mt-10 m-auto p-2">
        <u>
          <p className="text-2xl font-bold md:text-4xl">Checkout</p>
        </u>

        <hr className="w-full mt-5" />
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:border-r-2 lg:pr-10">
              <div className="lg:h-20 w-full border-2 rounded-xl p-5 flex justify-between items-center">
                <p className="text-lg lg:text-xl font-bold">Contact Info</p>
                <button
                  onClick={() => {
                    setShowContactEditPage(true);
                    setShowShippingAddressEditPage(false);
                    setShowPaymentMethodEditPage(false);
                  }}
                  className=" text-sm p-2 md:p-3 rounded-xl hover:border-blue-500 hover:border-2 bg-gray-200"
                >
                  Change
                </button>
              </div>
              {showContactEditPage && (
                <div className="min-h-[10vh] w-full border-2 rounded-xl p-5">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm md:text-lg flex md:flex-none">
                      <span>Contact</span> &nbsp;<span>Information</span>
                    </p>
                    <p className="text-[10px] md:text-lg">
                      Do not have an account?{' '}
                      <span className="text-blue-400">Login</span>
                    </p>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="">Your Phone Number</label> <br />
                    <input
                      type="text"
                      className="p-3 rounded-full mt-2 border-2 w-full"
                      placeholder="+91"
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="">Email Address</label> <br />
                    <input
                      type="text"
                      className="p-3 rounded-full mt-2 border-2 w-full"
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <button
                      className="text-sm bg-black p-3 lg:w-[400px] rounded-full text-white flex justify-center items-center"
                      onClick={() => {
                        setShowContactEditPage(false);
                        setShowShippingAddressEditPage(true);
                      }}
                    >
                      Save and next to shipping
                    </button>
                    <button
                      className="border-2 p-3 w-[30%] text-sm rounded-full"
                      onClick={() => setShowContactEditPage(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              <div className="lg:h-20 w-full border-2 rounded-xl p-5 flex justify-between items-center mt-5">
                <p className="text-lg lg:text-xl font-bold">Shipping Address</p>
                <button
                  onClick={() => {
                    setShowShippingAddressEditPage(true);
                    setShowContactEditPage(false);
                    setShowPaymentMethodEditPage(false);
                  }}
                  className=" text-sm p-2 md:p-3 rounded-xl hover:border-blue-500 hover:border-2 bg-gray-200"
                >
                  Change
                </button>
              </div>
              {showShippingAddressEditPage && (
                <div className="min-h-[10vh] w-full border-2 rounded-xl p-5">
                  <div className="grid grid-cols-2 gap-1">
                    <div>
                      <label htmlFor="">First Name</label> <br />
                      <input
                        type="text"
                        className="p-3 rounded-full mt-2 border-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Last Name</label> <br />
                      <input
                        type="text"
                        className="p-3 rounded-full mt-2 border-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Address</label> <br />
                      <input
                        type="text"
                        className="p-3 rounded-full mt-2 border-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">City</label> <br />
                      <input
                        type="text"
                        className="p-3 rounded-full mt-2 border-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">State</label> <br />
                      <input
                        type="text"
                        className="p-3 rounded-full mt-2 border-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Pincode</label> <br />
                      <input
                        type="text"
                        className="p-3 rounded-full mt-2 border-2 w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="">Address Type</label> <br />
                    <div className="mt-2 md:flex justify-between items-center">
                      <div>
                        <input
                          type="radio"
                          id="home"
                          name="addresstype"
                          value="home"
                        />
                        &nbsp; &nbsp;
                        <label for="home">Home (All day Delivery)</label>
                      </div>

                      <div className="mt-2 md:mt-0">
                        <input
                          type="radio"
                          id="louie"
                          name="addresstype"
                          value="louie"
                        />{' '}
                        &nbsp;&nbsp;
                        <label for="louie">Office (Delivery 9AM - 5PM)</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <button
                      className="text-sm bg-black p-3 lg:w-[400px] rounded-full text-white flex justify-center items-center"
                      onClick={() => {
                        setShowShippingAddressEditPage(false);
                        setShowPaymentMethodEditPage(true);
                      }}
                    >
                      Save and next to payment
                    </button>
                    <button
                      className="border-2 p-3 w-[30%] text-sm rounded-full"
                      onClick={() => setShowShippingAddressEditPage(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="lg:h-20 w-full border-2 rounded-xl p-5 flex justify-between items-center mt-5">
                <p className="text-lg lg:text-xl font-bold">Payment Method</p>
                <button
                  onClick={() => {
                    setShowPaymentMethodEditPage(true);
                    setShowContactEditPage(false);
                    setShowShippingAddressEditPage(false);
                  }}
                  className=" text-sm p-2 md:p-3 rounded-xl hover:border-blue-500 hover:border-2 bg-gray-200"
                >
                  Change
                </button>
              </div>
              {showPaymentMethodEditPage && (
                <div className="min-h-[10vh] w-full border-2 rounded-xl p-5">
                  <div>
                    <input type="radio" name="paymentMethod" id="" /> &nbsp;
                    &nbsp;
                    <label htmlFor="">Cash on delivery</label>
                  </div>
                  <div>
                    <input type="radio" name="paymentMethod" id="" /> &nbsp;
                    &nbsp;
                    <label htmlFor="">PayPal</label>
                  </div>
                  <div>
                    <input type="radio" name="paymentMethod" id="" /> &nbsp;
                    &nbsp;
                    <label htmlFor="">Paytm</label>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <button
                      className="text-sm bg-black p-3 lg:w-[400px] rounded-full text-white flex justify-center items-center"
                      onClick={() => setShowPaymentMethodEditPage(false)}
                    >
                      Confirm Order
                    </button>
                    <button
                      className="border-2 p-3 w-[30%] text-sm rounded-full"
                      onClick={() => setShowPaymentMethodEditPage(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:pl-5 mt-10 lg:mt-0">
              <p className="text-xl md:text-2xl font-bold">Order Summary</p>
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

              <div className="w-full mt-10">
                <div className="flex justify-between">
                  <input
                    type="text"
                    className="w-[80%] p-4 border"
                    placeholder="Discount Coupon"
                  />
                  <button className="bg-gray-400 w-[18%] font-bold text-white">
                    Apply
                  </button>
                </div>

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
                  <button className="bg-black text-sm text-white p-3 w-full lg:p-5 lg:w-[50%] rounded-full lg:text-xl">
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
