import React from 'react'
import colors from '../../../utils/color'


const Homebanner = () => {
  return (
    <div id='homebanner' className="bg-cover bg-center flex flex-col pt-40 md:pt-56 gap-0 bg-black" style={{ backgroundImage: "url('Assets/Services/hero.png')" }}>
      <hr className={`w-[60%] ml-[40%] border-t-[3px] border-[${colors.mainTextColor}]`} />
      <div className='flex justify-center my-0'>
        <button className={`text-white text-[40px] md:text-[105px]`}>Services</button>
      </div>
      <hr className={`w-[56%] border-t-[3px] border-[${colors.mainTextColor}] shadow-[10px_10px_10px_rgba(0,0,0,1)]`} />
      <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
        <span className={`w-[3px] h-[100px] md:h-[200px] bg-[${colors.mainTextColor}]`}></span>
        <span className=' w-[3px]  h-[100px] md:h-[200px] bg-black'></span>
        <span className=' w-[3px]  h-[100px] md:h-[200px] bg-white'></span>
      </div>
    </div>
  )
}

export default Homebanner
