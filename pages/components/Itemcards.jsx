import { useRouter } from 'next/router';
import React from 'react';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from 'react-icons/ai';

export default function Itemcards({ slug }) {
  const router = useRouter();

  return (
    <div
      className="min-w-[300px] h-[450px] rounded-3xl shadow-sm cursor-pointer"
      onClick={() => router.push('/products/details/product-slug')}
    >
      <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png')] w-full h-[300px] rounded-3xl bg-cover p-4">
        <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center float-right">
          <AiOutlineHeart className="text-2xl" />
        </div>

        <div className="opacity-0 w-full h-12 mt-56 hover:opacity-100 flex justify-center items-center">
          <div className="w-[20] h-[20] bg-white p-5 flex items-center justify-center rounded-full ">
            <AiOutlineShoppingCart className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="font-bold text-xl">Product Name</p>
        <p className="text-lg mt-3 text-gray-400">Catchy description</p>
        <div className="mt-3 flex justify-between items-center">
          <div className="border-green-600 p-1 rounded-lg border-2 text-green-600 font-bold">
            ₹ 300.00
          </div>
          <div className="flex text-gray-400 text-md items-center justify-center">
            <AiFillStar className="text-lg text-yellow-500" /> &nbsp; 4.5 (123
            reviews)
          </div>
        </div>
      </div>
    </div>
  );
}
