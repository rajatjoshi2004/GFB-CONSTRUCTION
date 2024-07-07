import React from 'react'

const Homebanner = () => {
  return (
    <div id='homebanner' className="bg-cover bg-`center` flex  flex-col py-0  md:py-0 pt-28 md:pt-56 gap-0  bg-gray-700" style={{ backgroundImage: "url('Assets/Contact us/1.png')" }}>
      <hr className='w-[60%] ml-[40%] border-t-[3px] border-orange-500 ' />
      <div className='flex justify-center my-4'>
        <button className='text-white  text-4xl md:text-[125px]  md:h-[100px]'>Contact Us</button>
      </div>
      <hr className='w-[57%] border-t-[3px] border-orange-500 ' />
      <div className='overflow-hidden flex w-[100%] gap-6 justify-center' >
        <span className='w-[3px] h-[140px] md:h-[240px] bg-orange-500'></span>
        <span className='w-[3px] h-[140px] md:h-[240px] bg-black'></span>
        <span className='w-[3px] h-[140px] md:h-[240px] bg-white'></span>
      </div>
    </div>
  )
}

export default Homebanner
