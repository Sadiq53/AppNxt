import AnimateImage from "../../shared/AnimateImage/AnimateImage"
import Banner from "../../shared/Banner/Banner"
import Content from "../../shared/Content/Content"
import CustomSection from "../../shared/CustomSection/CustomSection"
import Footer from "../../shared/Footer/Footer"
import Header from "../../shared/Header/Header"
import TechStack from "../../shared/Technology/TechStack"
import Development from "./Helpers/Developments/Development"
import Slider from "./Helpers/Slider/Slider"

const Service = () => {

    const content = {
        heading : `PHP Development Service`,
        content: `APPNXT PVT. LTD. is a leading custom software development firm, specializing in tailored solutions that seamlessly fit your enterprise needs. Our skilled engineers stay ahead of emerging technologies, frameworks, and trends, ensuring top-quality products and services. With a commitment to functionality and robustness, we deliver reliable, custom development solutions that align with your vision.`
    }

    const banner = {
        heading: `PHP Development`,
        content: `We boast the power and maturity of PHP to address your full spectrum requirements in astounding ways.`,
        image: `/assets/img/service-banner.svg`
    }


  return (
    <>
        <Header />

        <Banner heading={banner?.heading} content={banner?.content} bgURL={banner?.image} />

        <Content heading={content?.heading} content={content?.content} />

        <AnimateImage image={'/assets/img/lg-video-2.svg'} />

        <Slider />

        <Development />

        <TechStack />

        <CustomSection hide={'top'} />

        <Footer />
    </>
  )
}

export default Service