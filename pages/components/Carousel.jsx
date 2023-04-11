import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function Carousel() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        className="w-full"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide className="w-full">
          <div className="w-full bg-cover h-[70vh] bg-gray-500 text-white  bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png')]">
            image 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-cover h-[70vh] bg-gray-500 text-white bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png')]">
            image 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-cover h-[70vh] bg-gray-500 text-white bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png')]">
            image 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-cover h-[70vh] bg-gray-500 text-white bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png')]">
            image 4
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
