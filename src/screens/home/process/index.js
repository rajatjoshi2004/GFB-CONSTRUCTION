import React from 'react'
import colors from '../../../utils/color'
import ProcessCards from '../../../Cards/ProcessCards'

const Process = () => {
  return (
    <div id='process'>
      <section className='bg-[rgb(29,30,36)] text-white text-center relative p-0 pt-8 md:pt-14 md:pb-6 pb-0'>
        <button className={`text-[${colors.textWhite}] cursor-default text-[24px] md:text-[24px] relative w-[260px] z-20  md:w-[260px]  my-8 p-3 bg-black h-[70px] md:h-[58px] leading-[31.35px] border-2`}>Process</button>

        

        <div className='md:bg-cover z-10 relative flex flex-wrap md:flex-row flex-col items-center justify-evenly px-4  md:p-0 pb-10 md:pb-20 gap-20 py-10 ' style={{ backgroundImage: "url('/Assets/Home/bg/process.png')" }}>
        
        <div className='overflow-hidden flex w-[64px] justify-between absolute left-[41%] xsm:left-[42%] 2xsm:left-[44%] top-[-30px] md:hidden z-[60]' >
          <span className={`w-[4px] h-[1905px]  bg-[${colors.mainTextColor}]`}> </span>
          <span className='w-[4px]  h-[1905px]  bg-black md:opacity-100 opacity-30'> </span>
          <span className='w-[4px]  h-[1905px] bg-white'></span>
        </div>

         <div className='overflow-hidden md:flex w-[64px] justify-between absolute left-[48.4%]  top-[-30px] hidden  z-[60]' >
          <span className={`w-[4px] h-[805px]  bg-[${colors.mainTextColor}] opacity-30`}> </span>
        </div>

          <div className=' relative z-[80] '>
            <span className='absolute md:top-10 top-20 left-16 md:left-24 text-[34px]  text-orange-500 z-30'>01</span>
            <button className=' py-2 w-[250px] cursor-default z-20  md:w-[240px] shadow-inner shadow-gray-600 p-1 text-white text-[24px] md:text-[24px] mb-0 absolute md:top-20 top-32 md:left-20 left-2  md:mb-14 tracking-wide leading-8 rounded-[15px] bg-[rgb(29,30,36)]  '>Pre-Construction</button>
            <ProcessCards src="Assets/Home/pre_construction.png" heading="Planning Your Vision" desc="From initial consultations to detailed blueprints, we set the foundation by understanding your needs, aligning with architects, and ensuring every detail is planned meticulously." />
          </div>

          <div className='mt-0 md:mt-20 relative z-[80]'>
            <span className='absolute  top-52 left-36 md:left-44 text-[34px]  text-orange-500 z-30'>02</span>
            <button className=' py-2 cursor-default w-[250px] z-20  md:w-[240px] shadow-inner shadow-gray-600 p-1 text-white text-[24px] md:text-[24px] mb-0 absolute md:top-10 top-10 md:left-8 left-2 md:mb-14 tracking-wide leading-8 rounded-[15px] bg-[rgb(29,30,36)]'>Construction</button>
            <ProcessCards title="Construction" src="Assets/Home/construction.png" count={"02"} heading="Crafting Your Dream" desc="Our team breathes life into your vision. 
            With best-in-class tools, materials, and expertise, we ensure timely execution and unmatched quality in every build." />
          </div>

          <div className=' relative z-[80] '>
            <span className='absolute md:top-10  top-20 left-44 text-[34px]  text-orange-500 z-30'>03</span>
            <button className=' py-2 w-[250px] z-20 cursor-default  md:w-[240px] shadow-inner shadow-gray-600 p-1 text-white text-[24px] md:text-[24px] mb-0 absolute md:top-20 top-32 left-2 md:left-[-18px] md:mb-14 tracking-wide leading-8 rounded-[15px] bg-[rgb(29,30,36)]'>Post-Construction</button>
            <ProcessCards title="Post-Construction" src="Assets/Home/post_onstruction.png" count={"03"} heading={"Ensuring Perfection"} desc="After the build, our commitment continues. We inspect, refine, and guarantee our work, ensuring your space stands the test of time and resonates with perfection." />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Process
