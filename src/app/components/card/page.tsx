import React from 'react'
import dataPakages from '@/app/api/data.json'

function Card() {
    return (
        <div className='flex w-full overflow-x-scroll gap-4 py-4'>
            {dataPakages.map((item) => (
                <div key={item.id} className="card-item w-full md:w-[420px] flex flex-col gap-4 border-2 flex-shrink-0 border-basic p-4 rounded-xl hover:drop-shadow-xl bg-theme hover:bg-basic duration-700">
                    <img src={item.gambar} alt="gambar" className='object-cover w-full h-[350px] rounded-md' />
                    <h1 className='font-bold text-xl w-3/4'>{item.tittle}</h1>
                    <div className="w-full flex justify-between">
                        <div className="flex items-center rounded-xl">
                            <img src={item.imgTeam} alt="" className='' />
                            <p className=''>{item.totalRev}</p>
                        </div>
                        <div className="flex items-center">
                            <p className='text-3xl font-semibold text-green'>{item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
