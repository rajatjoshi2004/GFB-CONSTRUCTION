import React from 'react'
import colors from '../../../utils/color'


const PreConstruction = () => {
  return (
    <div className='bg-gray-200 flex relative '>

      <div className='rounded-[50%] w-[30px] h-[30px] absolute md:top-[21%] top-[100px] left-1 md:left-[66px] z-[60] border-black border-4 bg-gray-200'>
        <div className='rounded-[50%] w-[40px] h-[40px] top-[-10px] left-[-10px] relative  border-orange-500 border-4 blur-sm'></div>
      </div>

      <div className='rounded-[50%] w-[30px] h-[30px] absolute md:top-[47%] top-[36%] left-0 md:left-[66px] z-[60]  border-black border-4 bg-gray-200'>
        <div className='rounded-[50%] w-[40px] h-[40px] top-[-10px] left-[-10px] relative  border-orange-500 border-4 blur-sm'></div>
      </div>

      <div className='rounded-[50%] w-[30px] h-[30px] absolute md:top-[77%] top-[69%] left-0 md:left-[66px] z-[60]  border-black border-4 bg-gray-200'>
        <div className='rounded-[50%] w-[40px] h-[40px] top-[-10px] left-[-10px] relative  border-orange-500 border-4 blur-sm'></div>
      </div>


      <div id='preconstruction' className=' flex w-[64px] mx-4 md:mx-20 relative z-50 justify-between'>
        <div className='absolute top-8 md:top-10 flex left-6 gap-3'>
          <span className='text-3xl'>0</span>
          <span className='text-3xl'>1</span>
        </div>

        <span className='w-[4px] h-[100%] bg-black'>


        </span>
        <span className='w-[4px] h-[100%] bg-white'></span>
        <span className='w-[4px] h-[100%] bg-white'></span>
      </div>

      <div className='p-2 md:p-4 xl:p-10 pt-8 md:pt-0 w-[80%] mt-0 flex flex-col gap-4 md:gap-8 relative z-10'>

        <div className='text-[24px] md:text-[28px] lg:text-3xl xl:text-4xl '>
          <h1 className=' '>PRE-CONSTRUCTION</h1>
        </div>

        <div className='flex m-0 md:ml-4 lg:ml-20 md:flex-row md:pt-0 pt-14 flex-col-reverse gap-0 md:gap-20 items-center relative '>
          <div className='w-[100%] md:w-[90%] xl:w-[80%]'>
            <h1 className={`text-[20px] md:text-[30px] xl:text-3xl text-[${colors.mainTextColor}] md:static absolute top-4 flex gap-4`}><span>1.</span> <span>Consultation & Discovery</span></h1>
            <p className=' text-[14px] md:text-2xl tracking-[2px] flex flex-col gap-4'><span className='pr-0 xl:pr-20'>We begin with a thorough assessment of your job site, project scope, and feasibility.</span>
            
             <span> Our goal is to meticulously understand your vision, ensuring a solid, informed start to every project.</span></p>
          </div>

          <div className='w-[100%] md:w-[70%] lg:w-[30%]'>
            <img src='Assets/Process/2.png' />
          </div>
        </div>

        <div className='flex m-2 md:ml-0 lg:ml-16 md:pt-0 pt-20 md:flex-row flex-col gap-0 md:gap-20  relative'>

          <div className='w-[100%]  md:w-[70%] lg:w-[30%] xl:w-[30%]'>
            <img src='Assets/Process/3.png' />
          </div>

          <div className='w-[100%] md:w-[90%] lg:w-[70%] xl:w-[80%] mt-10'>
            <h1 className={`text-[20px] md:text-3xl text-[${colors.mainTextColor}] md:static absolute top-10 flex md:gap-4 gap-6`}><span>2.</span> <span>Design & Planning</span></h1>
            <p className=' text-[14px] md:text-2xl tracking-[2px] xl:pr-40 flex flex-col gap-4'><span>At this stage, our in-house architects and engineers take the lead, transforming your ideas into actionable blueprints.</span>
             <span> We ensure every design is efficient, innovative, and tailored to your needs.</span></p>
          </div>

        </div>

        <div className='flex m-2 md:ml-4 lg:ml-20 md:pt-0 pt-20 md:flex-row flex-col-reverse gap-0 md:gap-20 items-center relative '>
          <div className='w-[100%] md:w-[70%] xl:w-[90%]'>
            <h1 className={`text-[20px] md:text-3xl text-[${colors.mainTextColor}] md:static absolute top-4 flex gap-6`}><span>3.</span> <span>Permitting & Approvals</span></h1>
            <p className=' text-[14px] md:text-2xl tracking-[2px] mb-10 flex flex-col gap-4'><span>Navigating regulatory requirements can be tricky, but we've got you covered.</span>
             <span> We ensure all plans adhere to local building codes, obtaining the necessary permits to kickstart construction.</span></p>
          </div>
          <div className='md:w-[50%] lg:w-[30%]'>
            <img src='Assets/Process/4.png' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default PreConstruction
