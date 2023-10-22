"use client"
import React from 'react'
import dataPakages from '@/app/api/data.json';

function Service() {
    return (
        <div className="grid w-full h-full px-[5%] py-32 md:p-32 relative bg-theme">
            <div className="acc-image absolute top-5 right-0 z-0">
                <img src="./pakeges/acc-img.svg" alt="acc" className='rotate-180 object-cover' />
            </div>
            <div className="acc-image absolute bottom-0 left-0 z-0">
                <img src="./pakeges/acc-img.svg" alt="acc" className='object-cover' />
            </div>
            <div className="flex items-center justify-between z-10">
                <div className="header-items w-full">
                    <h1 className="text-5xl md:text-6xl font-bold text-center md:text-start md:w-3/4">Po<span className="relative">pu<img src="./images/acc-heading.svg" alt="play button" className="absolute top-0 left-1" /></span>lar packages</h1>
                </div>
                <div className="button-group gap-4 bg-basic p-2 rounded-xl hidden md:flex">
                    <button className="p-4 rounded-xl bg-basic hover:drop-shadow-xl duration-700 border border-[#f4f4f4]">
                        <img src="./pakeges/arrow-left.svg" alt="arrow left" className="text-basip" />
                    </button>
                    <button className="p-4 rounded-xl bg-green hover:drop-shadow-xl duration-700 border border-[#f4f4f4] text-basic">
                        <img src="./pakeges/arrow-left.svg" alt="arrow left" className="rotate-180" />
                    </button>
                </div>
            </div>
            <div className="card-items flex gap-8 mt-10 z-10 w-full flex-col md:flex-row">
                {dataPakages.map((item) => (
                    <div key={item.id} className="card-item w-full md:w-[420px] flex flex-col gap-4 border-2 border-basic p-4 rounded-xl hover:drop-shadow-xl bg-theme hover:bg-basic duration-700">
                        <img src={item.gambar} alt="gambar" className='object-cover w-full h-[350px] rounded-xl' />
                        <h1 className='font-bold text-xl w-3/4'>{item.tittle}</h1>
                        <div className="w-full flex justify-between">
                            <div className="flex items-center rounded-xl">
                                <img src={item.imgTeam} alt="" className='' />
                                <p className=''>{item.totalRev}</p>
                            </div>
                            <div className="flex items-center">
                                <p className='text-base font-semibold text-green'>{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service
