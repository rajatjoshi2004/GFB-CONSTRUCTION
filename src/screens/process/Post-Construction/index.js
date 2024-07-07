import React from 'react'
import colors from '../../../utils/color'


const PostConstruction = () => {
  return (
    <div id='postConstruction' className='bg-gray-200 flex relative'>

      <div className='absolute top-10 flex left-[17px] md:left-14 md:gap-20 gap-[18px]'>
        <span className='text-3xl'>0</span>
        <span className='text-3xl'>3</span>
      </div>

      <div className='rounded-[50%] w-[30px] h-[30px] absolute md:top-[30%] top-[110px] left-[53px] md:left-[125px] z-[60] border-orange-500 border-4 bg-gray-200'>
        <div className='rounded-[50%] w-[40px] h-[40px] top-[-10px] left-[-10px] relative  border-orange-500 border-4 blur-sm'></div>
      </div>

      <div className='rounded-[50%] w-[30px] h-[30px] absolute md:top-[75%] top-[52%] left-[53px] md:left-[125px] z-[60] border-orange-500 border-4 bg-gray-200'>
        <div className='rounded-[50%] w-[40px] h-[40px] top-[-10px] left-[-10px] relative  border-orange-500 border-4 blur-sm'></div>
      </div>

      <div className='overflow-hidden flex w-[64px] relative mx-2 md:mx-20 justify-between  ' >
        <span className='w-[4px] h-[100%] bg-black '></span>
        <span className='w-[4px] h-[100%] bg-black'></span>
        <span className={`w-[4px] h-[100%] bg-[${colors.mainTextColor}]`}></span>
      </div>

      <div className='p-2 md:p-4 lg:p-10 w-[80%] md:mt-0 mt-10'>

        <div className='text-2xl md:text-[32px]  '>
          <h1 className=''>POST-CONSTRUCTION</h1>
        </div>

        <div className='flex ml-0 md:ml-4 lg:ml-20 md:flex-row flex-col-reverse gap-0 md:gap-20 items-center relative md:pt-0 pt-24'>
          <div className='w-[100%] md:w-[90%] lg:w-[90%]'>
            <h1 className={`text-[20px] md:text-[24px] lg:text-3xl text-[${colors.mainTextColor}] md:static absolute top-8 flex gap-4`}><span>5.</span> <span>Quality Control & Inspection</span></h1>
            <p className=' text-[14px] md:text-[20px] font-[400] lg:text-2xl tracking-[2px] flex flex-col gap-4'><span>Following construction, our team conducts comprehensive inspections to ensure every aspect of the project meets our high-quality standards.</span>
              <span> Utilizing advanced tools and proven techniques, we meticulously verify the integrity of every component of your project.</span></p>
          </div>

          <div className='w-[80%] md:w-[40%] lg:w-[50%] pb-10'>
            <img src='Assets/Process/6.png' />
          </div>
        </div>




        <div className='flex ml-2 md:ml-4 mt-0 md:mt-8 lg:ml-16 md:flex-row flex-col justify-between gap-0 md:gap-20  items-center relative md:pt-0 pt-32 mb-20 md:mb-10'>

          <div className='w-[80%] md:w-[60%] lg:w-[30%] py-10'>
            <img src='Assets/Process/7.png' />
          </div>

          <div className='w-[100%] md:w-[100%] lg:w-[70%]'>
            <h1 className={`text-[20px] md:text-[24px] lg:text-3xl text-[${colors.mainTextColor}] md:static absolute top-20 flex gap-4`}><span>6.</span> <span>Project Handover & Post-Construction Care</span></h1>
            <p className=' text-[14px] font-[400] md:text-[20px] lg:text-2xl tracking-[2px] flex flex-col gap-4'><span>Your new space is ready! We hand over all essential documents and detailed maintenance guidelines.</span>

              <span> But our service doesn’t stop there! We remain readily available for any post-construction questions or support you may need.</span>

              <span>Our commitment extends beyond project completion. We're here to ensure your space remains exceptional for years to come.</span></p>
          </div>

        </div>



      </div>

    </div>
  )
}

export default PostConstruction
