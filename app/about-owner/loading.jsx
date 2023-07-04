import React from 'react'
import Image from 'next/image'
export default function Loading() {
  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center'>
        <div className='w-48 h-48 bg-black rounded-full flex justify-center items-center animate-bounce'>
           <div className='relative w-32 h-12'>
           <Image 
            alt="logo"
            src="/images/logo.png"
            fill={true}
            />
           </div>
        </div>
    </div>
  )
}
