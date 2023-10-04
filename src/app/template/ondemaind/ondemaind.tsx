import Button from '@/app/components/button/page'
import Image from 'next/image'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function UnderContruction({ children }: Props) {
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
                        <Button className='w-full' variant="primary" >Go Back</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderContruction
