import Banner from "../../shared/Banner/Banner"
import Footer from "../../shared/Footer/Footer"
import Header from "../../shared/Header/Header"
import Projects from "../../shared/Projects/Projects"

const Portfolio = () => {

  const projectHeading = {
    highlightSize: window.innerWidth >= 767 ? 88 : 45,
    normal: 'Projects!',
    normalSize: window.innerWidth >= 767 ? 78 : 40,
    highlight: 'Featured WOW',
    description: 'Explore our collection of cutting-edge products designed to empower your business and elevate your creative potential.Each product is meticulously crafted to provide exceptional performance, usability, and results.'
  }

  return (
    <>
        <Header />

        <Banner content={'APPNXT PVT. LTD. delivers custom software solutions, using advanced technologies to create robust, tailored products for your business.'} heading={'Portfolio'} bgURL={'/assets/img/portfolio-banner.svg'} />

        <Projects type={'center'} content={projectHeading} />

        <Footer />
    </>
  )
}

export default Portfolio