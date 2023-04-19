/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from 'react-icons/ai';

export default function Itemcards({ product }) {
  const router = useRouter();
  return (
    <div className="w-[300px] min-h-[450px] rounded-3xl hover:shadow-md cursor-pointer relative">
      <img
        src={product?.image}
        alt={product?.productName}
        className="rounded-3xl w-[300px]"
        onClick={() => router.push(`/products/details/${product?.slug}`)}
      />

      <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center float-right absolute top-2 left-60">
        <AiOutlineHeart className="text-2xl" />
      </div>

      <div className=" w-full h-12 opacity-0 hover:opacity-100 flex justify-center items-center absolute top-36">
        <div className="w-[20] h-[20] bg-white p-5 flex items-center justify-center rounded-full">
          <AiOutlineShoppingCart className="text-2xl" />
        </div>
      </div>

      <div className="p-4">
        <p
          className="font-bold text-xl"
          onClick={() => router.push(`/products/details/${product?.slug}`)}
        >
          {product?.productName}
        </p>
        <p
          className="text-lg mt-3 text-gray-400"
          onClick={() => router.push(`/products/details/${product?.slug}`)}
        >
          {product?.catchyTitle}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <div
            className="border-green-600 p-1 rounded-lg border-2 text-green-600 font-bold"
            onClick={() => router.push(`/products/details/${product?.slug}`)}
          >
            ₹ {product?.price}
          </div>
          <div
            className="flex text-gray-400 text-md items-center justify-center"
            onClick={() => router.push(`/products/details/${product?.slug}`)}
          >
            <AiFillStar className="text-lg text-yellow-500" /> &nbsp;{' '}
            {product?.star} ({product?.reviewsCount} reviews)
          </div>
        </div>
      </div>
    </div>
  );
}
