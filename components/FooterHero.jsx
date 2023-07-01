import React from 'react'
import Button from './Button'

export default function FooterHero()
 {
  return (
    <div className='my-24'>
        <div className="font-header text-header2 md:text-header text-center mt-12 mb-12 md:mt-6 ">
                <span className="text-lightyellow">ARE YOU READY</span>
                <br />
                <span className="text-red">TO GET FIT?</span>
               
              </div>
              <Button
                text="SIGN UP FOR 1 WEEK TRIAL PASS"
                size="lg"
                fill={true}
                />
    </div>
  )
}
