import React from 'react'
import colors from '../../../utils/color'



const Homebanner = () => {
  return (
    <div id='homebanner' className="bg-cover bg-center md:bg-top flex flex-col pt-24 md:py-0 md:pt-60 gap-0 " style={{ backgroundImage: "url('Assets/About us/about_usbg.jpeg')" }}>
      <hr className={`w-[60%] ml-[40%] border-t-[3px] border-[${colors.mainTextColor}] `} />
      <div className='flex justify-center my-2 md:my-10'>
        <button className={`text-white  text-4xl md:text-[125px] md:h-[70px]`}>About Us</button>
      </div>
      <hr className={`w-[56%] border-t-[3px] border-[${colors.mainTextColor}] `} />
      <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
        <span className={`w-[3px]  h-[100px]  md:h-[240px]  bg-[${colors.mainTextColor}]`}></span>
        <span className=' w-[3px]  h-[100px]  md:h-[240px] bg-black'></span>
        <span className=' w-[3px]  h-[100px]  md:h-[240px]  bg-white'> </span>
      </div>
    </div>
  )
}

export default Homebanner
