'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const images = [
    '/comp1.png',
    '/comp2.png',
    '/comp3.png',
    '/comp4.png',
    '/comp5.png',
    '/comp6.png',
    '/comp7.png',
    '/comp8.png',
    '/comp9.png',
    '/comp10.png',
];

export default function OurCustomers() {
    return (
<div className='py-8 bg-black'>

<p className='text-white bg-black text-center text-3xl font-bold'>Our Customers</p>
        <div className=' h-36 sm:h-48  text-2xl font-bold bg-black py-4 text-center flex  justify-center align-middle overflow-hidden'>
           
            <Swiper
                spaceBetween={1}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className=" w-32 h-16 sm:w-96 sm:h-32 mx-auto">
                            <img className='w-full h-full  object-contain' src={image} alt="error" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
</div>
    );
}
