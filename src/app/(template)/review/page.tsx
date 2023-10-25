import React from 'react'
import Image from "next/image";

function Review() {
    const styleAcc = 'absolute w-8 h-8 -top-2 left-2'
    return (
        <div className='w-full h-full flex flex-col justify-center items-center px-[5%] xl:px-32 py-32'>
            <div className="header-content flex w-full flex-col justify-center items-center py-4">
                <h1 className="text-5xl md:text-6xl font-bold text-center">Global p<span className="relative">ro<Image src="./images/acc-heading.svg" alt="play button" height={20} width={20} className={`${styleAcc}`} /></span>motion</h1>
                <p className="w-full xl:w-3/5 text-center font-semibold text-basip mt-5">Businesses generally promote their brand, products, and services by identifying audience. No wonder that promotion strategy is one of the most important processes in marketing.</p>
            </div>
            <div className="w-full h-full mt-20">
                <Image src='./global/imgGlobal.svg' alt="hero images" height={500} width={500} className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default Review
