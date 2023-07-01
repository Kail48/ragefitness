import React from 'react'
import StarRating from './StarRating'
import Image from 'next/image'
export default function TestimonialCard({name,image,text,stars}) {
  return (
    <div className='flex flex-col bg-darkblack items-center justify-center px-4 gap-y-2 py-8'>
        <div className='relative w-32 h-32 rounded-full'>
                <Image
                fill={true}
                src={image}
                alt="image"
                />
        </div>
        <h1 className='font-header text-header3'>{name}</h1>
        <StarRating rating={stars}/>
        <p className='font-para text-[14px] leading-6 text-center'>{text}</p>
    </div>
  )
}
