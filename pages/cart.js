/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import Layout from './components/Layout';
import { AiOutlineBgColors } from 'react-icons/ai';
import { RxSize } from 'react-icons/rx';
import { useRouter } from 'next/router';
import { Store } from './utils/store';
import Link from 'next/link';

export default function Cart() {
  const router = useRouter();

  const [cartItem, setCartItem] = useState([]);

  const { state, dispatch } = useContext(Store);
  const { cart: cartItems } = state;

  const decreaseQty = (product) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quatity = existItem ? existItem.quatity - 1 : 1;

    if (quatity === 0) {
      removeItemHandler(product);
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quatity } });
  };
  const increaseQty = (product) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quatity = existItem ? existItem.quatity + 1 : 1;

    if (product.totalStock < quatity) {
      alert('Sorry. Product out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quatity } });
  };

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  return (
    <Layout>
      <div className="container m-auto mt-10 p-3 md:p-0">
        <u>
          <p className="text-xl md:text-3xl font-bold">Shopping Cart</p>
        </u>
        <hr className="w-full mt-10" />
        {cartItems && cartItems.cartItems.length === 0 ? (
          <div className="flex justify-center h-[50vh] items-center">
            Cart is empty :{' '}
            <Link
              href="/"
              className="hover:bg-black hover:text-white font-bold border ml-2 p-3 rounded-xl"
            >
              Go To Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5">
            <div className="w-full lg:pr-20 lg:border-r-2 min-h-[60vh]">
              {cartItems.cartItems.map((product, index) => {
                return (
                  <div className="cartItem mt-5" key={index}>
                    <div className="flex justify-between w-[100% ]">
                      <div className="w-[51%] flex">
                        <img
                          src={product.image}
                          alt=""
                          className="w-[60px] md:w-[150px]"
                        />
                        <div className="ml-1">
                          <p className="text-[12px] font-bold md:text-[16px]">
                            {product.productName.substring(0, 27)}...
                          </p>
                          <p className="flex items-center text-[12px]">
                            <AiOutlineBgColors /> &nbsp; Black &nbsp; &nbsp;
                            <span className="text-gray-400">|</span>&nbsp;
                            &nbsp; <RxSize /> &nbsp; XS
                          </p>

                          {/* <div className="mt-5 text-sm md:mt-[40px]">sfs</div> */}
                        </div>
                      </div>
                      <div className="w-[24%] flex justify-between p-1">
                        <button
                          className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl"
                          onClick={() => decreaseQty(product)}
                        >
                          -
                        </button>
                        <span className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl">
                          {product.quatity}
                        </span>
                        <button
                          className=" h-[23px] bg-white border rounded-full flex items-center justify-center text-sm w-[33.33%] md:text-xl"
                          onClick={() => increaseQty(product)}
                        >
                          +
                        </button>
                      </div>
                      <div className="w-[25%]">
                        <div className="border-green-600 p-1 text-sm flex items-center justify-center rounded-lg border-2 text-green-600 float-right font-bold md:w-[50%]">
                          ₹ {product.price}
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
                      <button
                        className="text-[13px] text-blue-400 md:text-lg"
                        onClick={() => removeItemHandler(product)}
                      >
                        Remove
                      </button>
                    </div>
                    <hr className="w-full mt-5" />
                  </div>
                );
              })}
            </div>
            <div className="w-full p-5 flex justify-center ">
              <div className="w-full md:w-[60%]">
                <p className="font-bold text-lg md:text-2xl">Order Summary</p>

                <div className="mt-7">
                  <div className="flex justify-between">
                    <p>
                      Subtotal (
                      {cartItems &&
                        cartItems.cartItems.reduce((a, c) => a + c.quatity, 0)}
                      )
                    </p>
                    <p className="font-bold">
                      ₹{' '}
                      {cartItems &&
                        cartItems.cartItems.reduce(
                          (a, c) => a + c.quatity * c.price,
                          0
                        )}
                    </p>
                  </div>
                  <hr className="w-full" />
                </div>
                {/* <div className="mt-7">
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
                </div> */}
                <div className="mt-7">
                  <div className="flex justify-between font-bold text-xl">
                    <p>Order Total</p>
                    <p>
                      ₹{' '}
                      {cartItems &&
                        cartItems.cartItems.reduce(
                          (a, c) => a + c.quatity * c.price,
                          0
                        )}
                    </p>
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
        )}
      </div>

      {/* <pre>{JSON.stringify(cartItems, null, 4)}</pre> */}
    </Layout>
  );
}
