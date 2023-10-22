import UnderContruction from '@/app/template/ondemaind/ondemaind'
import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <>
            <div className="w-full h-full px-[5%] py-32 md:p-32 grid grid-cols-1 md:grid-cols-2 border items-center justify-center">
                <div className="w-full h-full flex justify-center items-center md:order-2">
                    <div className="w-full h-full relative">
                        <Image src="./about-work/Image-about.png" alt="ilustration image" width={500} height={500} className="object-center w-full h-full" />
                        <Image src="./about-work/acc-line.png" alt="acc-image" width={50} height={80} className="absolute bottom-16 -right-10 hidden md:inline-block" />
                        <Image src="./about-work/acc-star.png" alt="acc-image" width={100} height={100} className="absolute -top-20 -right-20 hidden md:inline-block" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-3 flex-col">
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-start md:w-3/4">Ab<span className="relative">ou<img src="./images/acc-heading.svg" alt="play button" className="absolute top-0 left-1" /></span>t us</h1>
                        <p className="w-full text-center md:text-start md:w-[431px] text-basip font-medium">
                            No wonder that promotion strategy is one of the most important processes in marketing.
                            In fact, it supports your marketing voices to reach your target audience, creates interest, and helps you to engage with them.
                        </p>
                    </div>
                    <div className="mt-10 flex w-full flex-col">
                        <div className="card-items flex w-full gap-5 py-4">
                            <div className="header-card">
                                <div className="p-2 w-20 h-20 rounded-xl bg-theme flex items-center justify-center">
                                    <img src="./about-work/footer/acc-shield.svg" alt="shield card" width={80} height={80} className="drop-shadow-xl shadow-[#a7f9d796] w-14 h-14" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary font-semibold text-2xl">Safe and secured</h4>
                                <p className="text-base text-basip font-medium w-full md:w-[371px]">
                                    Safe and secured promotion strategy is one of the most important processes in marketing.
                                </p>
                            </div>
                        </div>
                        <div className="card-items flex w-full gap-5 py-4">
                            <div className="header-card">
                                <div className="p-2 w-20 h-20 rounded-xl bg-theme flex items-center justify-center">
                                    <img src="./about-work/footer/acc-gols.svg" alt="gols card" width={80} height={80} className="drop-shadow-xl shadow-[#a7f9d796] w-14 h-14" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-primary font-semibold text-2xl">Highly expert team</h4>
                                <p className="text-base text-basip font-medium w-full md:w-[371px]">
                                    We supports your marketing voices to reach your target audience, creates interest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
