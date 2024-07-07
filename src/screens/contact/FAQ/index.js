import React from 'react'

const Faq = () => {
  return (
    <>
      <div id='FAQ' className='w-[100%] bg-gray-200 py-10'>
        <h1 className='text-[24px] md:text-5xl text-center '>Frequently Asked Questions</h1>
      </div>

      <div className='bg-[rgb(29,30,36)] flex pb-0 '>

        <div className='w-[10%] ml-9 md:block hidden bg-no-repeat' style={{ backgroundImage: "url('Assets/Contact us/Lines/3.png')" }}></div>

        <div className='flex flex-col text-white w-[100%] md:w-[80%] md:px-0 px-4  py-10 gap-10'>
            
            <div className='flex flex-col items-center text-center gap-4'>
              <img src='Assets/Contact us/2.png' className='w-[30px] md:w-[50px] rounded-[40%]'/>
              <h1 className='text-[12px] md:text-[26px] text-[#EF6E16] tracking-normal md:tracking-[3px]'>How Do I Start My project with GFB?</h1>
              <p className='text-[12px] md:text-2xl tracking-normal md:tracking-[4px]'>Start by filling out our contact form above, or give us a call. We'll set up a no-obligation consultation to discuss your project and guide you through our process.
              </p>
            </div>


            <div className='flex flex-col items-center text-center gap-4'>
            <img src='Assets/Contact us/2.png' className='w-[30px] md:w-[50px] rounded-[40%]'/>
              <h1 className='text-[12px] md:text-[26px] text-[#EF6E16] tracking-normal md:tracking-[3px]'>Do you provide consultation for both residential and commercial projects?</h1>
              <p className='text-[12px] md:text-2xl tracking-normal md:tracking-[4px]'>Absolutely, we cater to both residential and commercial construction needs, offering tailored solutions </p>
            </div>


            <div className='flex flex-col items-center text-center gap-4'>
            <img src='Assets/Contact us/2.png' className='w-[30px] md:w-[50px] rounded-[40%]'/>
              <h1 className='text-[12px] md:text-[26px] text-[#EF6E16] tracking-normal md:tracking-[3px]'>Can I provide my own designs or sketches?</h1>
              <p className='text-[12px] md:text-2xl tracking-normal md:tracking-[4px]'>Certainly! We work closely with our clients, ensuring their vision is realized. Our in-house architects can also help refine or develop your design concepts further. Remember to bring this up during your consultation!</p>
            </div>


        </div>

      </div>
    </>
  )
}

export default Faq
