import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section id="guide" className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/FG.png" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 mt-2 mb-3 text-violet-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the Flexagram web application you will no longer get lost and get lost again and earn always 😉.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/Home.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-violet-500 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-black">Post</p>
                <p className="bold-16 text-gray-50">Apply & Dm</p>
              </div>
              <p className="bold-20 mt-2">Start Progress</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-black">Upload</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Get Reward</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide