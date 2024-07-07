import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='font-orelaga'>
            {/* Desktop Navbar */}
            <div className='hidden md:flex md:absolute md:top-4 md:w-[100%] md:bg-black md:bg-opacity-60 md:justify-evenly md:items-center md:text-white md:py-6 md:text-[22px]'>
                <a href="/services"> Services</a>
                <a href="/process"> Process</a>
                <a href='/'><img src='/Assets/logo.png' className='w-[100px] h-[44px]' alt="Logo" /></a>
                <a href="/about">About us</a>
                <a href="/contact"> Contact</a>
            </div>

            <div className='absolute top-0 md:hidden text-white w-[100%] flex justify-between items-center p-4'>
                <a href='/'><img src='/Assets/logo.png' className='w-[100px] h-[44px] ml-10 mt-4' alt="Logo" /></a>
                <button onClick={() => setOpen(true)} className='mr-10 mt-4'><MenuIcon fontSize='large' /></button>
            </div>

            <div className={`fixed top-0 right-0 w-[100%] bg-black text-white p-8 z-[100] h-full transition-transform duration-500 transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex justify-between'>
                    <a href='/'><img src='/Assets/logo.png' className='w-[100px] h-[44px]' alt="Logo" /></a>
                    <button onClick={() => setOpen(false)}> <CloseIcon fontSize='large' /> </button>
                </div>

                <div className='flex flex-col mt-10 gap-6 p-4 mb-44'>
                    <a href="/services" onClick={() => setOpen(false)}> Services</a>
                    <hr className='w-[95%]' />
                    <a href="/process" onClick={() => setOpen(false)}> Process</a>
                    <hr className='w-[95%]' />
                    <a href="/about" onClick={() => setOpen(false)}>About us</a>
                    <hr className='w-[95%]' />
                    <a href="/contact" onClick={() => setOpen(false)}> Contact</a>
                    <hr className='w-[95%]' />
                </div>
                <div className='flex justify-center mt-10'>
                    <a href='/contact'><button className='w-[300px] p-2 text-[24px] bg-[#EF6E16] rounded-lg'>Free Consultation</button></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
