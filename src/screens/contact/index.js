import React from 'react'
import Navbar from '../../navbar/Navbar'
import Homebanner from './Homebanner';
import Faq from './FAQ';
import ContactForm from './Contact';
import UpperFooter from '../../utils/UpperFooter';
import MiddleFooter from '../../utils/MiddleFooter';
import Footer from '../../utils/Footer';



function Contact() {
  return (
    <div className='font-orelaga'>
      <Navbar />
      <Homebanner />
      <ContactForm />
      <Faq />
      <UpperFooter />
      <MiddleFooter />
      <Footer link1="Integrated"  link2 ="Commercial" link3="Residential" />
    </div>
  )
}

export default Contact;