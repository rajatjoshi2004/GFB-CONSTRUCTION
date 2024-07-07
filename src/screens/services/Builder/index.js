import React from 'react'
import colors from '../../../utils/color'

const Builder = () => {
  return (
    <div id='builder' className='bg-[rgb(29,30,36)] relative  ' >
      <div className='absolute bg-black h-[1vh] w-[100%] blur-[100px] backdrop-blur-[50px] opacity-80 bottom-[-10px] shadow-service-shadow'></div>
         <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className={`w-[3px] h-[100px] md:h-[180px] bg-[${colors.mainTextColor}]`}></span>
          <span className='w-[3px]  h-[100px] md:h-[180px] bg-black'> </span>
          <span className='w-[3px]  h-[100px] md:h-[180px] bg-white'></span>
        </div>
        
        <div  className='w-[100%] '>
            <hr className={`h-fit border-t-[3px] border-[${colors.mainTextColor}] ml-[40%]`} />
        </div>

        <div className='flex justify-center'>
          <p className='text-white [text-16px] md:text-[28px] text-center w-[100%] xsm:w-[95%] 2xsm:w-[80%] 3xsm:w-[70%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[80%] my-10 md:my-6 md:mt-6 px-6  leading-12 md:leading-12 tracking-[0px] md:tracking-[3px]'>
          We’re not just builders; we’re visionaries. GFB specializes in new Commercial and Residential construction, allowing us to build for the future. Let us see how we can help you with your Tenant Improvement, Paving, Custom Homes, Residential Complexes. and more.   
          </p>
        </div>

        <div  className='w-[60%]  '>
            <hr className={`h-fit border-t-[3px] border-[${colors.mainTextColor}] `} />
        </div>

        <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className={`w-[3px] h-[120px] md:h-[210px] bg-[${colors.mainTextColor}]`}></span>
          <span className='w-[3px]  h-[120px] md:h-[210px] bg-black'></span>
          <span className='w-[3px]  h-[120px] md:h-[210px] bg-white'></span>
        </div>

    </div>
  )
}

export default Builder
