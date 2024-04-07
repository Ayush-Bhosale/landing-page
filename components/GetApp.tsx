
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
const GetApp = () => {
  
  
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available for all devices desktop, laptop, and mobile Devices</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/* <Button 
              type="button"
              title="For Desktops"
              variant="btn_white"
              full
              onClick={() => {
                window.location.href = 'https://flexagram.vercel.app/';
              }}
            /> */}
            <button className='btn_white rounded font-bold'>
        <Link href="https://flexagram.vercel.app">       
            <span className="flex items-center">
            <img src="/logo.svg" alt="Play icon" className="mr-2" /> 
              Relevel
            </span>
          </Link>
        </button>

     
             
            

<button className='btn_dark_green_outline rounded font-bold'>
        <Link href="https://flexagram.vercel.app">       
            <span className="flex items-center">
              For All Devices
            </span>
          </Link>
        </button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/newsl.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp