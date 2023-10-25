import UnderContruction from '@/app/template/ondemaind/ondemaind'
import Image from 'next/image'
import React from 'react'

function About() {
    const styleAcc = 'absolute w-8 h-8 -top-2 left-2'
    return (
        <>
            <div className="w-full h-full px-[5%] py-8 xl:p-32 grid grid-cols-1 xl:grid-cols-2 items-center justify-center">
                <div className="w-full flex justify-center items-center xl:order-2">
                    <div className="w-full h-full relative">
                        <Image src="./about-work/Image-about.png" alt="ilustration image" width={500} height={500} className="object-center w-full h-full" />
                        <Image src="./about-work/acc-line.png" alt="acc-image" width={50} height={80} className="absolute bottom-16 -right-10 hidden xl:inline-block" />
                        <Image src="./about-work/acc-star.png" alt="acc-image" width={100} height={100} className="absolute -top-20 -right-20 hidden xl:inline-block" />
                    </div>
                </div>
                <div className="flex flex-col w-full h-full">
                    <div className="flex gap-3 flex-col">
                        <h1 className="text-5xl xl:text-6xl font-bold text-center xl:text-start xl:w-3/4">Ab<span className="relative">ou<Image src="./images/acc-heading.svg" alt="play button" height={88} width={80} className={`${styleAcc}`} /></span>t us</h1>
                        <p className="w-full text-center xl:text-start xl:w-[431px] text-basip font-medium">
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
                                <p className="text-base text-basip font-medium w-full xl:w-[371px]">
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
                                <p className="text-base text-basip font-medium w-full xl:w-[371px]">
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
