"use client";
import React, { useRef, useState } from 'react';
import dataPakages from '@/app/api/data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Card() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1040: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                mousewheel={true}
                modules={[Mousewheel, Autoplay, Pagination]}
                className="mySwiper w-full h-full py-8"
            >
                {dataPakages.map((item) => (
                    <SwiperSlide key={item.id} className='flex flex-shrink-0 gap-4 border-2 bg-theme border-[#f4f4f4] rounded-xl p-4 drop-shadow-sm hover:bg-basic hover:drop-shadow-xl z-20'>
                        <img src={item.gambar} alt="gambar" className='object-cover w-full h-full rounded-md' />
                        <h2 className='text-xl md:text-3xl font-bold mt-4'>{item.tittle}</h2>
                        <div className="flex w-full items-center justify-between mt-4">
                            <div className="flex items-center flex-col">
                                <img src={item.imgTeam} alt="team" />
                                <p className='ml-4'>{item.totalRev}</p>
                            </div>
                            <p className='font-bold text-green text-2xl'>{item.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default Card
