// import React, { useEffect, useState } from 'react'
import Header from '../../shared/Header/Header';
import Banner from './Helpers/Banner';
import Projects from '../../shared/Projects/Projects';
import Work from './Helpers/Work';
import TechStack from '../../shared/Technology/TechStack';
import CustomSection from '../../shared/CustomSection/CustomSection';
import Footer from '../../shared/Footer/Footer';
import Content from '../../shared/Content/Content';
import AnimateImage from '../../shared/AnimateImage/AnimateImage';
import OurServices from '../Service/OurServices';

const Home = () => {

  const projectHeading = {
    highlightSize: window.innerWidth > 767 ? 88 : 55,
    normal: 'Projects!',
    normalSize: window.innerWidth > 767 ? 78 : 55,
    highlight: 'Featured WOW',
    description: 'Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.Each product is meticulously crafted to provide exceptional performance, usability, and results.'
  }

  return (
    <>
    <Header />
    <Banner />

    <Content heading={'ABOUT US'} content={'APPNXT Pvt. Ltd. offers innovative IT solutions in web and app development, digital marketing, and custom software services, helping businesses thrive.'} />

    <AnimateImage image={'/assets/img/lg-video.svg'} />

    {/* <Projects type={'center'} content={projectHeading} /> */}
    <OurServices />

    <Work />

    <TechStack />

    <CustomSection />

    <Footer />
    </>
  )
}

export default Home