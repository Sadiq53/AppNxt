import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'
import TechStack from '../../shared/Technology/TechStack'
import CustomSection from '../../shared/CustomSection/CustomSection'
import Info from './Helpers/Information/Info'
import StackCard from './Helpers/Stack-Card/StackCard'
import Banner from '../../shared/Banner/Banner'
import Slider from './Helpers/Stack-Card/Slider'


const About = () => {
  return (
    <>
        <Header />

        <Banner heading={'About Us'} bgURL={'/assets/img/about-banner.svg'} />

        <Info />

        {
          window.innerWidth >= 767 ? (<StackCard />) : (<Slider />)
        }

        <TechStack />

        <CustomSection />

        <Footer />
    </>
  )
}

export default About