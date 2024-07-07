import React, { useState } from 'react'

const ContactForm = () => {

  const [userInfo, setUserInfo] = useState({})
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [hearAbout, setHearAbout] = useState("")

  // states for the type of service needed buttons
  const [residental, setResidental] = useState(false)
  const [commercial, setCommercial] = useState(false)

  // states for thesubject buttons
  const [inquiry, setInquiry] = useState(false)
  const [quote, setQuote] = useState(false)
  const [other, setother] = useState(false)


  function handleSubmit(e) {
    e.preventDefault()
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      serviceType: serviceType,
      subject: subject,
      message: message,
      hearAbout: hearAbout
    }

    setUserInfo(obj)
    alert("Form Submitted")
  }


  return (
    <div id='Contactform' className='bg-[rgb(29,30,36)] flex gap-0 md:gap-10 xl:gap-40 font-orelaga justify-center md:justify-start'>

      <div className='w-[20%] md:w-[9%] xl:w-[5%] ml-2 xl:ml-10 md:flex flex-col hidden'>
        <div className='h-[90%] bg-no-repeat' style={{ backgroundImage: "url('Assets/Contact us/Lines/3.png')" }}></div>
        <div className='h-[100%] bg-no-repeat' style={{ backgroundImage: "url('Assets/Contact us/Lines/2.png')" }}></div>
      </div>

      <div className='text-white w-[65%] md:w-[80%] lg:w-[80%] xl:w-[70%] md:ml-0 ml-4 md:mr-0 mr-4 py-10 p-4 pr-0 xl:p-20 '>

        <div className='flex flex-col items-center mb-20 gap-2'>
          <h1 className='text-center text-[24px] md:text-5xl '>Contact Us</h1>
          <hr className='w-[50%] md:w-[30%] border-t-4 border-[#EF6E16]' />
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='flex md:flex-row flex-col md:gap-20 xl:gap-0 gap-8 p-0 md:p-6 justify-between md:mb-0 mb-10'>
            <div className='flex flex-col md:gap-6 gap-2'>
              <label htmlFor='name' className='text-[14px] md:text-2xl text-center md:text-left mb-2 md:mb-0'>First Name</label>
              <input onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type='text'
                placeholder='Enter your first name here '
                className='border-none  bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[110%] xl:w-[200%] shadow-md shadow-black' />
            </div>
            <div className='flex flex-col md:gap-6 gap-2px-0 md:px-20'>
              <label htmlFor='name' className='text-[14px] md:text-2xl text-center md:text-left mb-2 md:mb-0'>Last Name</label>
              <input onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type='text'
                placeholder='Enter your last name here '
                className='border-none  bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[110%] xl:w-[200%] shadow-md shadow-black' />
            </div>
          </div>


          <div className='flex md:flex-row flex-col gap-8  md:gap-20 xl:gap-0 p-0 md:p-6 justify-between md:mb-0 mb-10'>
            <div className='flex flex-col md:gap-6 gap-2 '>
              <label htmlFor='name' className='text-[14px] md:text-2xl text-center md:text-left mb-2 md:mb-0'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)}
                type='email'
                value={email}
                placeholder='Enter your email here'
                className='border-none bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[110%] xl:w-[200%] shadow-md shadow-black' />
            </div>
            <div className='flex flex-col md:gap-6 gap-2 px-0 md:px-20'>
              <label htmlFor='name' className='text-[14px] md:text-2xl text-center md:text-left mb-2 md:mb-0'>Phone Number</label>
              <input onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type='number'
                placeholder='Enter your phone number here'
                className='border-none bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[110%] xl:w-[200%] shadow-md shadow-black' />
            </div>
          </div>


          <div className='flex md:flex-row flex-col  md:gap-20 gap-8 p-0 md:p-6  justify-between'>
            <div className='flex flex-col md:gap-6 gap-2'>
              <label htmlFor='name' className=' md:text-2xl text-left hidden md:block'>Project Address </label>
              <label htmlFor='name' className='text-[14px] md:text-2xl text-center mb-2 md:hidden '>Project Address (optional)</label>
              <input onChange={(e) => setAddress(e.target.value)}
                value={address}
                type='text'
                placeholder='(optiional)'
                className='border-none bg-[rgb(29,30,36)] md:block hidden ' />

              <input onChange={(e) => setAddress(e.target.value)}
                value={address}
                type='text'
                placeholder='Enter your Project Address here'
                className='border-none bg-[rgb(29,30,36)] md:hidden' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[110%] xl:w-[200%] shadow-md shadow-black' />
            </div>
            <div className='flex flex-col gap-6 px-0 md:pl-20 lg:pl-0'>
              <h1 className='text-[14px] md:text-[24px] lg:text-[28px] text-center'>Type of service needed</h1>

              <div className='flex justify-between md:gap-2 gap-4'>
                <button
                  type="button"
                  onClick={(e) => { setServiceType(e.target.value); setCommercial(false); setResidental(true) }}
                  value={"Residental"}
                  className={`cursor-pointer text-[12px] md:text-[18px] px-4 py-2 border-4 border-[#EF6E16] ${residental ? "bg-[#EF6E16]" : "bg-none"}`}>Residental
                </button>

                <button
                  type="button"
                  onClick={(e) => { setServiceType(e.target.value); setCommercial(true); setResidental(false) }}
                  value={"Commercial"}
                  className={`cursor-pointer text-[12px] md:text-[18px] px-4 py-2 border-4 border-[#EF6E16] ${commercial ? "bg-[#EF6E16]" : "bg-none"}`}>Commercial
                </button>

              </div>
            </div>
          </div>

          <div className='flex flex-col text-white w-[100%]  py-10 md:p-6 gap-10'>
            <h1 className='text-[24px] md:text-[40px] text-center md:text-left'>SUBJECT</h1>

            <div className='flex md:flex-row flex-col items-center md:gap-20 xl:gap-0 gap-10 justify-between'>
              <button
                type="button"
                onClick={(e) => { setSubject(e.target.value); setInquiry(true); setQuote(false); setother(false) }}
                value={"General Inquiry"}
                className={`cursor-pointer text-[12px] md:text-[24px] w-[200px] py-1 border-4 border-[#EF6E16] ${inquiry ? "bg-[#EF6E16]" : "bg-none"}`}>General Inquiry
              </button>

              <button
                type="button"
                onClick={(e) => { setSubject(e.target.value); setInquiry(false); setQuote(true); setother(false) }}
                value={"Project Quote"}
                className={`cursor-pointer text-[12px] md:text-[24px] w-[200px] py-1 border-4 border-[#EF6E16] ${quote ? "bg-[#EF6E16]" : "bg-none"}`}>Project Quote
              </button>

              <button
                type="button"
                onClick={(e) => { setSubject(e.target.value); setInquiry(false); setQuote(false); setother(true) }}
                value={"other"}
                className={`cursor-pointer text-[12px] md:text-[24px] w-[200px] md:w-[180px] py-1 border-4 border-[#EF6E16] ${other ? "bg-[#EF6E16]" : "bg-none"}`}>Other
              </button>

            </div>

            <div className='flex flex-col  md:gap-6 gap-2'>
              <label className='text-[14px] md:text-3xl text-center md:text-left mb-2 md:mb-0'>Message</label>
              <input type='text'
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type your message here'
                className='border-none bg-[rgb(29,30,36)]' />
              < hr className=' border-t-4 border-[#EF6E16]' shadow-md shadow-black/>
            </div>

            <div className='flex flex-col  md:gap-6 gap-2 '>
              <label className=' md:text-[26px] md:block hidden'>How Did You Hear About Us?</label>
              <label className='text-[14px]  md:hidden mb-2'>How Did You Hear About Us (optional)</label>
              <input type='text'
                onChange={(e) => setHearAbout(e.target.value)}
                placeholder='(optional)'
                className='border-none bg-[rgb(29,30,36)] md:block hidden' />
                 <input type='text'
                onChange={(e) => setHearAbout(e.target.value)}
                placeholder='Type your answer here'
                className='border-none bg-[rgb(29,30,36)] md:hidden ' />
              <hr className=' border-t-4 border-[#EF6E16] w-[100%] md:w-[55%] lg:w-[55%] xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%]' />
            </div>

            <div className='flex justify-center mt-10'>
              <button type='submit' className='w-[140px] md:w-[200px] py-2 text-[14px] md:text-2xl rounded-lg bg-[#EF6E16] '>Submit</button>
            </div>

          </div>
        </form>

      </div>
    </div>
  )
}

export default ContactForm
