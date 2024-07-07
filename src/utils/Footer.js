import React from 'react'
import './color.js'
import colors from './color.js'

const Footer = ({ link1, link2, link3 }) => {
    return (
        <div className='bg-[rgb(0,0,0)] py-6 px-10 md:px-[60px] lg:px-[140px] xl:px-[170px] flex flex-col items-center md:items-stretch zzzzz text-white'>

            <div className='flex justify-center items-center gap-6'>
                <hr className='w-[45%] hidden md:block opacity-60' />
                <img src='Assets/logo.png'></img>
                <hr className='w-[45%] hidden md:block opacity-60' />
            </div>



            <div className='flex justify-between gap-4 md:gap-0  md:flex-row flex-col mt-14'>
                <div className='md:flex hidden  w-[350px] md:w-[280px] lg:w-[350px] gap-4 '>
                    <p className='text-[20px] md:text-[16px] lg:text-[20px] md:w-[100px] lg:w-[140px] xl:w-[180px] flex flex-col'><span>FOLLOW US</span> <span>ON SOCIAL</span></p>
                    <div className='flex gap-6 mt-2'>
                       <a href='/'> <img src='Assets/Linkedin.png' className='w-[80px] md:w-[30px] lg:w-[60px]' alt='linkedin icon' /> </a>
                       <a href='/'> <img src='Assets/facebook.png' className='w-[80px] md:w-[30px] lg:w-[60px]' alt='linkedin icon' /> </a>
                       <a href='/'> <img src='Assets/Insta.png'    className='w-[80px] md:w-[30px] lg:w-[60px]' alt='linkedin icon' /> </a>
                    </div>
                </div>

                <div className=' w-[240px] text-center md:text-left md:text-[12px] xl:text-[20px] text-[16px] md:w-[220px] xl:w-[340px]'>
                    <p><span className='text-[#EF6E16]'>License Number</span> - #1114879 </p>
                    <p><span className='text-[#EF6E16]'>Email</span> - info@gfbconstruction.com</p>
                    <p><span className='text-[#EF6E16]'>Phone Number</span> - 559-389-3646</p>
                    <p> <span className='text-[#EF6E16]'>Location</span> - Fresno California</p>
                </div>

                <div className='flex flex-col items-center md:items-start gap-4 text-gray-400 text-[14px] lg:text-[16px]'>
                    <a href='/services' className={`text-[${colors.mainTextColor}]`}>Services</a>
                    <a href={`/services`}>{link1}</a>
                    <a href={`/services`}>{link2}</a>
                    <a href={`/services`}>{link3}</a>
                   
                </div>


                <div className='flex flex-col items-center gap-4 text-gray-400 text-[14px] lg:text-[16px]'>
                    <a href='' className={`text-[${colors.mainTextColor}]`}>Quick Links</a>
                    <a href='/services' >Services</a>
                    <a href='/process' >Process</a>
                    <a href='/about' >About Us</a>
                    <a href='/contact' >Contact</a>
                </div>

            </div>

            <div className='flex  flex-col items-center gap-6 mt-10'>
                <hr className='w-[100%] md:border-t-[1px] border-t-4 md:opacity-60 opacity-90' />
                <p className='text-[12px] text-center'>© 2024 GFB Construction and Engineering. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer
