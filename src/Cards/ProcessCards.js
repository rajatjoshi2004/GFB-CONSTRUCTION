import React from 'react'
import colors from '../utils/color'

console.log(typeof(colors.mainTextColor));

const ProcessCards = ({ src, heading, desc }) => {
  return (
    <div>
      <div className=' w-[100%] md:w-[300px]  text-center  text-black md:shadow-none shadow-custom rounded-[60px] p-1'>
        <div className='h-[600px] md:h-[652px] w-[260px] md:w-[300px] relative flex flex-col items-center pt-72 md:pt-[360px] bg-cover bg-center gap-0 md:gap-4 rounded-[60px] ' style={{ backgroundImage: `url(${src})` }}>
          <h3 className={`text-[${colors.mainTextColor}] text-2xl text-[20px] md:text-[26px] `}>{heading} </h3>
          <p className='text-white px-2 md:text-[18px] text-[20px]'>{desc}</p>
          <a href="/process"> <img src='Assets/Home/btn.png' alt='' className='w-[80px]' /></a>
        </div>
      </div>
    </div>
  )
}

export default ProcessCards
