import React from 'react'

export const Card = ({content}) => {
    const {icon,number,title,desc} = content
    return (
    <div className='card flex flex-row gap-4'>
        <img src={icon} alt="" className='w-20 h-22'/>
        <div className="card-content flex flex-col gap-1">
            <h3 className='text-red-400 text-2xl font-bold'>{number}</h3>
            <h4 className='text-slate-900 font-bold cursor-pointer hover:text-red-400'>{title}</h4>
            <p className='text-gray-500 text-sm'>{desc}</p>
        </div>
    </div>
  )
}
