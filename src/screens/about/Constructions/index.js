import React from 'react'
import colors from '../../../utils/color'

const Constructions = () => {
  return (
    <div id='constructions' className='bg-cover bg-center flex md:flex-row flex-col-reverse  relative justify-between p-4 md:py-[105px] py-8  pt-24 md:pt-36 md:p-4'>
      <img src='Assets/About us/Assets/2.png' className='md:block hidden absolute md:h-[27%] md:w-[80%] lg:w-[70%] top-[75%] md:top-[85%] lg:top-[85%] right-[380px] md:right-[80px] lg:right-[50px] xl:right-[150px] 2xl:right-[290px] z-10' />

      <img src='Assets/About us/Assets/Group 65.png' className='h-[650px] w-[350px] xsm:w-[390px] 2xsm:w-[470px] 3xsm:w-[520px] absolute top-[-450px] md:hidden left-[-18px] xsm:left-[-10px] z-[50]'/>
      
      <div className='text-center flex flex-col w-[100%] md:w-[90%] 2xl:w-[40%] md:ml-0 xl:ml-20 gap-20 items-center md:mt-10'>
        <div className='flex flex-col items-center md:static absolute top-16 pt-8 gap-2'>
          <h1 className={`text-3xl md:text-5xl tracking-[6px] text-[${colors.mainTextColor}] relative z-[110]`}>Who We Are</h1>
          <hr className='w-[80%] md:w-[60%] xl:w-[70%] 2xl:w-[80%] border-t-4' />
        </div>
        <p className='text-white text-[12px] md:text-2xl tracking-[0px] '>
          GFB Construction is your trusted, licensed, and bonded contractor headquartered in Central California.
          <br /><br />
          We offer top-tier commercial and residential services with quality put first.
          <br /><br />
          The GFB team embodies a rich legacy of over 30+ years in the industry, ensuring that every project benefits from decades of accumulated expertise and insights.
        </p>
      </div>

      <div className='md:w-[60%] lg:w-[50%] 2xl:w-[40%] w-[100%] md:pt-0 pt-20 relative z-[1120]'>
        <img src='Assets/About us/2.png' className='w-[600px] md:h-[700px] lg:h-[700px] xl:h-[700px]'></img>
      </div>
    </div>
  )
}

export default Constructions
