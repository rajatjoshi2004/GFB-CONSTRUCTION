import React from 'react'
import colors from '../../../utils/color'


const Construction = () => {
  return (
    <div id='construction' className=' bg-[rgb(29,30,36)]  flex '>

      <div className=' flex w-[64px] mx-2 relative md:mx-20 justify-between  ' >
        <div className='absolute top-10 flex left-6 gap-[10px] md:left-[-8px] md:gap-[40px] text-white'>
          <span className='text-3xl'>0</span>
          <span className='text-3xl'>2</span>
        </div>
        <span className='w-[4px] h-[100%] bg-black'>
          <img src='Assets/Contact us/2.png' className='rounded-[50%] w-[40px] absolute top-[52%] left-3 bg-[rgb(29,30,36)]' />

        </span>
        <span className={`w-[4px] h-[100%] bg-[${colors.mainTextColor}]`}> </span>
        <span className='w-[4px] h-[100%] bg-black'></span>
      </div>

      <div className='p-2 md:p-4 lg:p-10 w-[80%] mt-10 md:mt-0'>

        <div className='text-2xl md:text-4xl text-white  '>
          <h1 className='ml-4 md:ml-0'>CONSTRUCTION</h1>
        </div>

        <div className='flex ml-2 md:ml-4 lg:ml-20 md:flex-row flex-col-reverse justify-between items-center p-2 relative md:pt-0 pt-14'>
          <div className='w-[100%] md:w-[70%] lg:w-[50%] mb-10'>
            <h1 className={`text-[20px] md:text-3xl text-[${colors.mainTextColor}] md:static absolute top-4 flex md:gap-4 gap-6`}><span>4.</span> <span>Construction Phase</span></h1>
            <p className='text-[14px] md:text-[20px] text-center md:text-left text-white tracking-normal md:tracking-[2px] flex flex-col gap-4'><span>We maintain transparent communication through regular updates and scheduled on-site meetings, keeping you closely connected to the project's progress.</span>
              <span>Our commitment is to uphold safety, maximize efficiency, and ensure top-quality construction at every stage.</span></p>
          </div>

          <div className='w-[100%] md:w-[30%] flex justify-center md:mr-0 mr-10'>
            <img src='Assets/Process/5.png' className='w-[220px] h-[300px] md:h-[470px] md:w-[180px]' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Construction
