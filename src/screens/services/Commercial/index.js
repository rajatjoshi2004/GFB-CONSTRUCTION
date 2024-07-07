import React from 'react'
import colors from '../../../utils/color'
import '../../../App.css'


const Commercial = () => {
  return (
    <div id='commercial' className='text-white md:py-10 py-16 md:pl-6 relative  2xl:pl-40 pl-0 pt-10 md:pt-20'>
      <div className='hidden md:block absolute bg-black h-[20vh] w-[90%] blur-3xl opacity-100 top-[-50px] '></div>
      <div className='hidden md:block absolute top-[-30px] right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-[15px] blur-sm'></div>

      <div className='flex md:flex-row relative flex-col-reverse justify-between gap-0 md:gap-10 xl:gap-20 2xl:gap-40  md:p-0 p-0 pt-20'>

        <div className=' w-[100%] md:w-[95%] 2xl:w-[70%] md:px-4 xl:px-20 px-4 mt-0 md:mt-28'>
          <div className='flex justify-center md:justify-start mb-10'>
            <h1 className={`text-3xl md:text-[24px] lg:text-[30px] 2xl:text-5xl md:static text-[${colors.mainTextColor}] absolute top-0 `}>Commercial</h1>
          </div>

          <p className='text-[12px] md:text-[20px] 2xl:text-2xl text-white text-center md:text-left md:px-0 px-10'>GFB excels in developing commercial spaces that are both practical and visually appealing.
            <br /> <br />
            Our expertise extends to offices, warehouses, retail stores, restaurants, and more. Focusing on providing solutions that are efficient and cost-effective.
            <br /><br />
            We work closely with you to ensure that the final space reflects your brand and needs.
            <br /><br />
            Count on us for quality work, on-schedule completion, and designed to exceed your expectations.
          </p>

          <div className='mt-10 md:block flex md:flex-row flex-col items-center gap-4 md:gap-8'>

            <div className='flex flex-row items-center md:gap-10 gap-0 md:ml-0 ml-6'>
              <img src='Assets/Services/new_commercial_builds.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[14px] tracking-wide'>New Commercial Builds</p>
            </div>

            <div className='flex flex-row items-center ml-0 md:ml-20  md:gap-10 gap-0' >
              <img src='Assets/Services/tenant_improvement.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[14px] tracking-wide'>Tenant Improvement</p>
            </div>

            <div className='flex flex-row  items-center  md:gap-10 gap-0'>
              <img src='Assets/Services/retail_construction.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[14px] tracking-wide'>Retail Construction</p>
            </div>

          </div>
        </div>

        <div className='flex justify-center items-center '>
         
          <img src='Assets/Services/commercial.png' className='md:block hidden w-[200px] 2xl:w-[600px] md:w-[700px] md:h-[500px] lg:h-[600px] 2xl:h-[650px] relative z-20 ' ></img>
          <img src='Assets/Services/img2.png' className='md:hidden w-[300px] relative z-20 ' ></img>
        </div>
      </div>
    </div>
  )
}

export default Commercial
