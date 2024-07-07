import React from 'react'
import colors from '../../../utils/color'


const Homebanner = () => {
  return (
    <div id='homebanner' className="bg-cover bg-right md:bg-center flex flex-col pt-28 md:py-0 md:pt-56 gap-0  bg-gray-700" style={{backgroundImage:"url('Assets/Process/1.png')"}}>
   <hr className={`w-[60%] ml-[40%] border-t-[3px] border-[${colors.mainTextColor}] block`} />
      <div className='flex justify-center my-0'>
        <button className={`text-white text-[40px] md:text-[125px] `}>Process</button>
      </div>
      <hr className='w-[56%] border-t-[3px] border-orange-500 block' />
      <div className='overflow-hidden flex w-[100%] gap-4 justify-center  ' >
          <span className={`w-[3px] h-[160px] md:h-[200px] bg-[${colors.mainTextColor}]`}> </span>
          <span className='w-[3px]  h-[160px] md:h-[200px] bg-black'> </span>
          <span className='w-[3px]  h-[160px] md:h-[200px] bg-white'></span>
        </div>
  </div>
  )
}

export default Homebanner
