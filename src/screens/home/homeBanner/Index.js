import React from 'react'
import colors from '../../../utils/color'

const Homebanner = () => {

  function handleFreeConsultation() {

  }


  return (
    <main id='homebanner' className='md:bg-cover bg-center bg-cover pb-36 bg-gray-900 flex flex-col items-center gap-8' style={{ backgroundImage: "url('/Assets/Home/Hero.png')" }}>

      <div className={`text-[${colors.mainTextColor}] text-[30px] md:text-[46px] lg:text-[76px]  w-[100%] text-center  px-2  pt-[200px] leading-[36px] md:leading-[86px] tracking-[2px]  md:tracking-[4px]`}>
        <h1><span className='text-white' >G</span>uided by expertise</h1>
        <h1><span className='text-white' >F</span>ueled by passion</h1>
        <h1><span className='text-white' >B</span>uilt on trust</h1>
      </div>

      <div className='text-white text-[20px] md:text-[30px] lg:text-[36px] w-[100%]  text-center  md:leading-[40px] tracking-[2px]'>
        <h3>California's Commercial and</h3>
        <h3>Residential Specialists.</h3>
      </div>

      <a href='/contact'>
        <button onClick={handleFreeConsultation()} className={`text-[${colors.mainTextColor}] cursor-pointer text-[20px] rounded-md text-center md:text-[24px] md:mt-[20px]  w-[190px] md:w-[235px] p-2 bg-black bg-opacity-70 md:tracking-[1px] tracking-normal  border-2 `}>Free Consultation</button>
      </a>

    </main>
  )
}

export default Homebanner

