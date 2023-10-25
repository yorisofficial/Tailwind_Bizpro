import React from 'react'
import Card from '@/app/components/card/page';
import Image from 'next/image';

function Service() {
    const styleAcc = 'absolute w-8 h-8 -top-2 left-2'
    return (
        <div className="flex justify-center items-center flex-col px-[5%] py-32 xl:p-32 w-full h-full bg-theme relative">
            <div className="flex items-center justify-between z-10 w-full">
                <div className="header-items w-full">
                    <h1 className="text-5xl md:text-6xl font-bold text-center md:text-start md:w-3/4">Po<span className="relative">pu<Image src="./images/acc-heading.svg" alt="play button" height={80} width={80} className={`${styleAcc}`} /></span>lar packages</h1>
                </div>
            </div>
            <div className="w-full mt-10">
                <Card />
            </div>
        </div>
    )
}

export default Service
