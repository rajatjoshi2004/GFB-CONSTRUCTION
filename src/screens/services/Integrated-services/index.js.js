import React from 'react'
import colors from '../../../utils/color'


const Integrated = () => {
  return (

    <div id='integrated' className='relative  bg-cover bg-black bg-center text-white pb-10 overflow-visible'>
      <div className='absolute top-[-30px] md:top-[-10px] md:h-full h-[50vh] right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-[15px] blur-sm shadow-integrated-shadow'></div>

      <img src='Assets/Services/Group 3620.png' alt='group 3620' className='hidden md:block absolute 
      top-[20%] md:top-[50%] lg:top-[50%] xl:top-[42%] 2xl:top-[36%] 
      left-[35%] xsm:left-[42%] 2xsm:left-[38%] 3xsm:left-[36%] md:left-28 lg:left-40 xl:left-[-50px] 2xl:left-[-4%] 
      z-20 md:z-20 
      h-[400px] xsm:h-[550px] md:h-[100%] lg:h-[85%] xl:h-[100%] 2xl:h-[108%] 
      md:w-[70%] lg:w-[72%] xl:w-[85%] 2xl:w-[85%]' />

      <div className='flex md:flex-row flex-col relative items-center gap-0 md:gap-40 2xl:gap-40 md:p-4 lg:p-20 2xl:p-20 p-6 md:pt-0 pt-32'>

        <div>
          <img src='Assets/Services/intergrated_services.png' className='hidden md:block w-[200px] xsm:w-[300px] md:w-[800px] xl:w-[450px] 2xl:w-[450px] md:h-[600px] lg:h-fit  relative z-[50]' ></img>

          <img src='Assets/Services/img1.png' className='ml-6 w-[400px] xsm:w-[500px] 3xsm:w-[600px] md:hidden ' ></img>

        </div>


        <div className='w-[100%] md:w-[95%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] md:py-10 py-0 md:pt-0 lg:pt-10 xl:pt-20  pt-0  px-0 md:px-0 lg:px-2 xl:px-18 2xl:px-24'>
          <div className='flex justify-center md:justify-start mb-10'>
            <h1 className={`text-[28px] lg:text-3xl xl:text-4xl 2xl:text-5xl md:static  text-[${colors.mainTextColor}] absolute  top-10`}>Integrated Services</h1>
          </div>

          <p className='text-[12px] md:text-[22px] 2xl:text-[28px] relative z-50 text-center md:text-left'>Our in-house Architects, Electricians, and Engineers help provide a seamless experience for you and your project.
            <br /> <br />
            While also allowing us to take on large electrical and utility-specific jobs without looking elsewhere.
            <br /> <br />
            See how our skilled professionals can help with your next project!</p>

          <div className='mt-10 md:block flex md:flex-row flex-col items-center gap-0 xsm:gap-4 2xsm:gap-8 3xsm:gap-12'>

            <div className='flex flex-row items-center md:gap-4 gap-0 h-[40px] md:h-[80px]'>
              <img src='Assets/Services/Architects.png' className='md:w-[100px] w-[40px]'></img>
              <p className='md:text-2xl text-[16px]'>Architects</p>
            </div>

            <div className='flex flex-row items-center md:ml-10 lg:ml-20 ml-2 md:gap-4 gap-0 h-[40px] md:h-[80px]' >
              <img src='Assets/Services/Electricians.png' className='md:w-[100px] w-[40px]'></img>
              <p className='md:text-2xl text-[16px]'>Electricians</p>
            </div>

            <div className='flex flex-row  items-center md:gap-4 gap-0 h-[40px] md:h-[80px] md:mr-0 mr-2'>
              <img src='Assets/Services/Engineers.png' className='md:w-[100px] w-[40px]'></img>
              <p className='md:text-2xl text-[16px]'>Engineers</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Integrated
