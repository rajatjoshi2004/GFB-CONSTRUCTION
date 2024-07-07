import React from 'react'
import Navbar from '../../navbar/Navbar';
import Homebanner from './HomeBanner/index.js';
import Builder from './Builder/index.js';
import Integrated from './Integrated-services/index.js.js';
import Commercial from './Commercial/index.js';
import Residental from './Residental/index.js';
import UpperFooter from '../../utils/UpperFooter.js'
import MiddleFooter from '../../utils/MiddleFooter.js'
import Footer from '../../utils/Footer.js'

// bg-[rgb(29,30,36)]

function Services() {
  return (
    <div className='font-orelaga'>
      <Navbar />
      <Homebanner />
      <Builder />
      <Integrated />
      <Commercial />
      <Residental />
      <UpperFooter />
      <MiddleFooter />
      <Footer link1="Integrated"  link2 ="Commercial" link3="Residential"/>
    </div>
  )
}

export default Services;