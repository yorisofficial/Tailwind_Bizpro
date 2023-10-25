import Button from '@/app/components/button/page'
import UnderContruction from '@/app/template/ondemaind/ondemaind'
import React from 'react'

function Support() {
    const styleAcc = 'absolute -top-2 left-2'
    return (
        <div className='w-full h-full flex justify-center items-center flex-col px-[5%] py-32 xl:px-32'>
            <div className="w-full md:p-16 rounded-xl md:bg-theme">
                <div className="header-content w-full flex flex-col items-center justify-center gap-3 py-4">
                    <h1 className="text-5xl md:text-6xl font-bold w-full text-center">Subscribe <span className="relative">ne<img src="./images/acc-heading.svg" alt="play button" className={`${styleAcc}`} /></span>wsletter</h1>
                    <p className="w-3/4 xl:w-3/5 text-center font-semibold text-basip mt-5">Businesses generally promote their brand, products, and services by identifying audience.</p>
                </div>
                <div className="form-input mt-10">
                    <form action="" method="post" className='w-full'>
                        <div className="relative w-full h-fit flex flex-col justify-center items-center">
                            <input type="text" placeholder="Enter your email" className="p-4 h-[80px] border-2 borded-[#f4f4f4] w-full rounded-md pr-32 flex-wrap" />
                            <Button variant="primary" className="w-fit h-[60px] mt-4 md:mt-0 md:absolute top-3 right-2 xl:right-4 z-10">Subscribe</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=""></div>

        </div>
    )
}

export default Support
