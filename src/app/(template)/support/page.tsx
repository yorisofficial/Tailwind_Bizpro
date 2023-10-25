import Image from 'next/image'
import React from 'react'

function Support() {
    const styleAcc = 'absolute w-8 h-8 -top-2 left-2'
    const btnPrimary = 'text-base min-w-[120px] min-h-[55px] bg-primary text-basic px-8 rounded-[6px] hover:scale-110 hover:font-semibold transform duration-700'

    return (
        <div className='w-full h-full flex justify-center items-center flex-col px-[5%] py-32 xl:px-32'>
            <div className="w-full md:p-16 rounded-xl md:bg-theme flex relative">
                <div className="flex flex-col">
                    <div className="header-content w-full flex flex-col items-center justify-center gap-3 py-4">
                        <h1 className="text-5xl md:text-6xl font-bold w-full text-center">Subscribe <span className="relative">ne<Image src="./images/acc-heading.svg" alt="play button" width={20} height={20} className={`${styleAcc}`} /></span>wsletter</h1>
                        <p className="w-3/4 xl:w-3/5 text-center font-semibold text-basip mt-5">Businesses generally promote their brand, products, and services by identifying audience.</p>
                    </div>
                    <div className="form-input mt-10 relative">
                        <form action="" method="post" className='w-full'>
                            <div className="relative w-full h-fit flex flex-col justify-center items-center">
                                <input type="text" placeholder="Enter your email" className="p-4 h-[80px] border-2 borded-[#f4f4f4] w-full rounded-md pr-32 flex-wrap" />
                                <button className={`w-fit h-[60px] mt-4 md:mt-0 md:absolute top-3 right-2 xl:right-4 z-10 ${btnPrimary}`}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="xl:flex absolute -top-[75px] right-0 hidden">
                    <Image src="./subscribe/anima-img.webp" alt="animation" width={400} height={100} className="" />
                </div>
            </div>

        </div>
    )
}

export default Support
