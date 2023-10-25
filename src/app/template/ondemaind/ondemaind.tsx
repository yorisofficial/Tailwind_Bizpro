import Image from 'next/image'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function UnderContruction({ children }: Props) {
    const btnPrimary = 'text-base min-w-[120px] min-h-[55px] bg-primary text-basic px-8 rounded-[6px] hover:scale-110 hover:font-semibold transform duration-700'

    return (
        <div>
            <div className="w-full h-screen flex flex-col justify-center items-center px-[5%] xl:px-32">
                <div className="header my-4">
                    <Image src={'./images/under-maintenance.svg'} height={500} width={500} className='w-[400px] h-[400px' alt='under maintenance' />
                </div>
                <div className="w-full flex justify-center items-center flex-col gap-4">
                    <h1 className='flex text-center text-3xl font-bold'>{children} Page</h1>
                    <p className='text-center'>Sorry the site is under construction</p>

                    <div className="flex w-3/4 items-center justify-center">
                        <button className={`w-full ${btnPrimary}`}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderContruction
