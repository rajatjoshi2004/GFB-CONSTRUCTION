import React from 'react'
import colors from '../../../utils/color'


const Residental = () => {
  return (
    <div id='residental' className='bg-cover bg-center bg-black text-white py-20 pt-28 md:pt-20 relative '>

      <div className='absolute bottom-[-40px]  h-[102%] md:hidden w-full  bg-[rgba(77,61,44,0.1)] opacity-100 backdrop-blur-[25px] blur-sm z-[20] shadow-integrated-shadow'></div>

      <div className='flex relative md:flex-row flex-col gap-0 md:gap-20 xl:gap-36 z-[50] '>


        <div className='flex justify-center'>
          <img src='Assets/Services/residentaial.png' className='hidden md:block w-[300px] xsm:w-[350px] 2xsm:w-[400px] md:w-[800px] h-[500px] md:h-[600px] lg:h-full 2xl:w-[500px]'></img>
          <img src='Assets/Services/residentaial2.png' className='md:hidden  w-[200px] xsm:w-[250px] 2xsm:w-[300px] md:w-[800px] h-[300px] md:h-[600px] lg:h-full 2xl:w-[500px]'></img>
        </div>

        <div className='w-[100%] md:w-[95%] lg:w-[60%] 2xl:w-[50%]  py-6 2xl:px-24 pr-4 md:pr-10 xl:pr-40 px-6'>
          <div className='flex justify-center md:justify-start mb-10'>
            <h1 className={`text-[32px] lg:text-3xl xl:text-4xl 2xl:text-5xl md:static text-center text-[${colors.mainTextColor}] absolute  top-[-90px]`}>Residental</h1>
          </div>

          <p className='text-[12x] md:text-2xl text-center md:text-left'>
            Our services include custom home builds, multi-family complexes, versatile ADUs, and full-scale remodels.
            <br /> <br />
            We're dedicated to creating homes that are not just visually appealing, but also highly functional.
            <br /><br />
            Our approach? Unwavering attention to detail and a commitment to superior craftsmanship.
          </p>

          <div className='mt-10 md:block flex md:flex-row flex-col items-center'>

            <div className='flex flex-row items-center md:gap-4 xl:gap-4 gap-0 h-[75px]'>
              <img src='Assets/Services/custom_builds_&_remodels.png' className='md:w-[100px] w-[70px]'></img>
              <p className='text-[12px] md:text-2xl'>Custom Builds & Remodels</p>
            </div>

            <div className='flex flex-row items-center md:gap-0 xl:gap-0 gap-0 ml-0 md:ml-16 h-[75px] md:mr-0 mr-6' >
              <img src='Assets/Services/residential_complexes.png' className='md:w-[100px] w-[70px]'></img>
              <p className='text-[12px] md:text-2xl'>Residential Complexes </p>
            </div>

            <div className='flex flex-row items-center md:gap-4 xl:gap-4 gap-0 h-[75px]'>
              <img src='Assets/Services/accessory_dwelling_units.png' className='md:w-[100px] w-[70px]'></img>
              <p className='text-[12px] md:text-2xl'>Accessory Dwelling Units </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Residental
