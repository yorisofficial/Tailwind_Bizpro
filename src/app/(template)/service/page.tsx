"use client"
import React from 'react'
import Card from '@/app/components/card/page';

function Service() {
    return (
        <div className="flex justify-center items-center flex-col px-[5%] xl:p-32">
            <div className="acc-image absolute top-5 right-0 z-0">
                <img src="./pakeges/acc-img.svg" alt="acc" className='rotate-180 object-cover' />
            </div>
            <div className="acc-image absolute bottom-0 left-0 z-0">
                <img src="./pakeges/acc-img.svg" alt="acc" className='object-cover' />
            </div>
            <div className="flex items-center justify-between z-10 w-full">
                <div className="header-items w-full">
                    <h1 className="text-5xl md:text-6xl font-bold text-center md:text-start md:w-3/4">Po<span className="relative">pu<img src="./images/acc-heading.svg" alt="play button" className="absolute top-0 left-1" /></span>lar packages</h1>
                </div>
            </div>
            <div className="w-full">
                <Card />
            </div>
        </div>
    )
}

export default Service
