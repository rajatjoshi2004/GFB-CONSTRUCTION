import React from 'react'
import colors from '../../../utils/color'
import ServicesCards from '../../../Cards/ServicesCards'
import '../../../App.css'

const Services = () => {
    return (
        <section id='services' className='  bg-[rgb(29,30,36)] text-white p-0  text-center '>
            <button className={`text-[${colors.textWhite}] cursor-default border-y-0 text-[32px] md:text-[28px] w-[250px] my-4 p-4 bg-black relative z-20 md:top-[-18px] top-[20px] leading-[31.35px] border-2`}>Services</button>

            <div className='servicediv bg-cover z-10 relative flex md:flex-row flex-col flex-wrap items-center justify-evenly p-0  md:p-0 pb-0 md:pb-20 sm:bg-none' >
                <div className='mt-8 md:mt-20'> <ServicesCards title="Integrated Services" src="Assets/Home/integrated_services.png" mdstyle ="py-1" smstyle="py-3"/></div>
                <div className='mb-10'><ServicesCards title="Commercial" src="Assets/Home/commercial.png" mdstyle ="py-6" smstyle="py-3"/></div>
                <div className='mt-[-35px] md:mt-20'> <ServicesCards title="Residental" src="Assets/Home/residential.png" mdstyle ="py-6" smstyle="py-3" /> </div>
            </div>
        </section>
    )
}

export default Services
