import React from 'react'
import colors from '../../../utils/color'


const Philoshphy = () => {
  return (
    <div id='philosiphy' className='bg-cover p-4 md:p-20 pb-[100px] md:pb-[100px] bg-black text-center relative text-white '>

      <img src='Assets/About us/Assets/1.png' className='h-[90%] absolute hidden md:block top-[20%] md:top-[27%] lg:top-[30%] xl:top-[30%] 2xl:top-[30%] right-[80px] md:right-[150px] lg:right-[100px] xl:right-[140px] 2xl:right-[16%] 3xl:right-[22%] z-10' />

      <div className='flex flex-col items-center gap-2 mb-10 mt-10 md:mt-0'>
        <h1 className={`text-2xl md:text-5xl text-[${colors.mainTextColor}]  tracking-normal md:tracking-[4px]`}>Our Philosophy & Mindset</h1>
        <hr className='w-[53%] md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[26%] border-t-4 border-t-white' />
      </div>

      <div className='mb-10 flex justify-center relative z-[60]'>
        <img src='Assets/About us/1.png' className='rounded-[40px] bg-black w-[550px]'></img>
      </div>

      <div>
        <p className='text-white text-[12px] md:text-2xl tracking-normal md:pt-0 pt-4 md:tracking-[4px] md:px-4 lg:px-8 xl:px-[280px] 2xl:px-[340px] relative z-30'>GFB, short for “Go for Broke”, is more than just our name - it's the principle that guides us.
          <br /><br />
          Inspired by the relentless determination of the 442nd Regimental Combat Team in WWII, we commit wholeheartedly to each and every project.
          <br /><br />
          Embracing the “all or nothing” spirit in everything we do. </p>
      </div>

    </div>
  )
}

export default Philoshphy
