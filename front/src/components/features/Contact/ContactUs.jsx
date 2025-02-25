import Footer from "../../shared/Footer/Footer"
import Header from "../../shared/Header/Header"
import Banner from "../../shared/Banner/Banner"
import CardSection from "./Helpers/CardSection"
import FormSection from "./Helpers/FormSection/FormSection"

const ContactUs = () => {
  return (
    <>
        <Header />

        <Banner bgURL={'/assets/img/contact-banner.svg'} heading={'Contact Us'} content={`If You have any questions , Concerns or issues, We're here to help. Find the answers to your questions here and get in touch with us if you need to.`} />

        <CardSection />

        <FormSection />

        <Footer />
    </>
  )
}

export default ContactUs