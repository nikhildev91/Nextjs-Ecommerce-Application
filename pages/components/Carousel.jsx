import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import { IoIosSearch } from 'react-icons/io';
import { useRouter } from 'next/router';

export default function Carousel() {
  const router = useRouter();
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide>
          <div className="w-full bg-yellow-100 text-black flex justify-center items-center h-[70vh]">
            <div className="p-5 w-full md:w-[35%] flex md:justify-center items-center h-full bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] bg-cover md:bg-none">
              <div>
                <p className="text-black md:text-xl">
                  In this season, find the best 🔥
                </p>
                <p className="text-black text-4xl font-bold md:text-6xl mt-10">
                  Exclusive collection for everyone
                </p>

                <button
                  className="p-5 bg-black text-white flex justify-center items-center mt-20 rounded-full"
                  onClick={() => router.push('/search')}
                >
                  Explore Now &nbsp; &nbsp;
                  <IoIosSearch className="text-xl" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex w-[65%] bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] h-full bg-cover"></div>
          </div>
          {/* <div className="w-full bg-cover h-[70vh] bg-gray-500 text-white  bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png')]">
            image 1
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-blue-100 text-black flex justify-center items-center h-[70vh]">
            <div className="p-5 w-full md:w-[35%] flex md:justify-center items-center h-full bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] bg-cover md:bg-none">
              <div>
                <p className="text-black md:text-xl">
                  In this season, find the best 🔥
                </p>
                <p className="text-black text-4xl font-bold md:text-6xl mt-10">
                  Exclusive collection for everyone
                </p>

                <button
                  className="p-5 bg-black text-white flex justify-center items-center mt-20 rounded-full"
                  onClick={() => router.push('/search')}
                >
                  Explore Now &nbsp; &nbsp;
                  <IoIosSearch className="text-xl" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex w-[65%] bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] h-full bg-cover"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-green-100 text-black flex justify-center items-center h-[70vh]">
            <div className="p-5 w-full md:w-[35%] flex md:justify-center items-center h-full bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] bg-cover md:bg-none">
              <div>
                <p className="text-black md:text-xl">
                  In this season, find the best 🔥
                </p>
                <p className="text-black text-4xl font-bold md:text-6xl mt-10">
                  Exclusive collection for everyone
                </p>

                <button
                  className="p-5 bg-black text-white flex justify-center items-center mt-20 rounded-full"
                  onClick={() => router.push('/search')}
                >
                  Explore Now &nbsp; &nbsp;
                  <IoIosSearch className="text-xl" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex w-[65%] bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] h-full bg-cover"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-indigo-100 text-black flex justify-center items-center h-[70vh]">
            <div className="p-5 w-full md:w-[35%] flex md:justify-center items-center h-full bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] bg-cover md:bg-none">
              <div>
                <p className="text-black md:text-xl">
                  In this season, find the best 🔥
                </p>
                <p className="text-black text-4xl font-bold md:text-6xl mt-10">
                  Exclusive collection for everyone
                </p>

                <button
                  className="p-5 bg-black text-white flex justify-center items-center mt-20 rounded-full"
                  onClick={() => router.push('/search')}
                >
                  Explore Now &nbsp; &nbsp;
                  <IoIosSearch className="text-xl" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex w-[65%] bg-[url('https://res.cloudinary.com/dikpoctfq/image/upload/v1681193555/hero-right.e5d2705b7e98564ab738-removebg-preview_akyqjd.png')] h-full bg-cover"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
