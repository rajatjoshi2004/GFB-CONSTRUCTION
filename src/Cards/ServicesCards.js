import React from 'react'

const ServicesCards = ({title,src, mdstyle, smstyle}) => {
  return (
    <div className=' w-[100%] md:w-[300px] text-center '>
      <button className={`w-[190px] cursor-default md:w-[200px] ${smstyle} md:${mdstyle} shadow-inner shadow-gray-600 p-1 text-[20px] md:text-[24px] mb-0 relative md:top-0 top-6 md:mb-14 tracking-tight leading-5 rounded-[15px] bg-[rgb(29,30,36)]`}>{title}</button>
      <div className='h-[450px] md:h-[602px] w-[260px] md:w-[300px] flex flex-col items-center justify-end bg-cover  rounded-[30px] md:rounded-[60px]' style={{backgroundImage:`url(${src})`}}>
            <a href="/services" > <img src='Assets/Home/btn.png' alt='' className='w-[80px] md:w-[120px] ml-4'/></a>
      </div>
    </div>
  )
}

export default ServicesCards
