import About from "../../components/features/About/About"
import ContactUs from "../../components/features/Contact/ContactUs"
import CyberSecurity from "../../components/features/CyberSecurity/CyberSecurity"
import Home from "../../components/features/Home/Home"
import Inner from "../../components/features/Portfolio/Inner"
import Portfolio from "../../components/features/Portfolio/Portfolio"
import Service from "../../components/features/Service/Service"


const rootRoutes = [
    {
        path : '',
        element : <Home />
    },
    {
        path : 'about',
        element : <About />
    },
    {
        path : 'service',
        element : <Service />
    },
    {
        path : 'contact',
        element : <ContactUs />
    },
    {
        path : 'portfolio',
        element : <Portfolio />
    },
    {
        path : 'portfolio/:project',
        element : <Inner />
    },
    {
        path : 'cyber-security',
        element : <CyberSecurity />
    },
]

export default rootRoutes