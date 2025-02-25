import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import { useParams } from "react-router-dom";
import Topic from "./Helpers/Topic";
import HeadingStart from "../../shared/HeadingStyles/HeadingStart";
import Content from '../../shared/Content/Content'
import Projects from "../../shared/Projects/Projects";
import Advertise from "./Helpers/Advertise";

const Inner = () => {
    const { project } = useParams();

    const projectContent = {
        normal: "More Projects",
        normalSize: window.innerWidth >= 767 ? 78 : 55,
        highlight: "Explore Our",
        highlightSize: window.innerWidth >= 767 ? 88 : 55,
        width: window.innerWidth >= 767 ? 50 : 100
    }

    return (
        <>
            <Header />

            <Topic project={project} />

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <HeadingStart highlight={'Empowering Rural India'} normal={'with Digital Financial Solutions'} normalSize={window.innerWidth >= 767 ? 78 : 40} highlightSize={window.innerWidth >= 767 ? 88 : 45} width={window.innerWidth >= 767 ? 90 : 100} />
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <Advertise img={'/assets/img/portfolio-img-1.svg'} bg={'244F99'} padding={20} imgHeight={window.innerWidth >= 767 ? 650 : 300} objectFit={'contain'} />
            </div>

            <Content heading={'The Objective'} content={'Spice Money aims to bridge the financial inclusion gap in rural India by providing accessible and secure digital financial services.'}/>

            <div className="pt-cs">
                <Advertise img={'/assets/img/portfolio-img-2.svg'} bg={'DD2928'} padding={15} imgHeight={window.innerWidth >= 767 ? 600 : 300} objectFit={'contain'} />
            </div>

            <Content heading={'Solution'} content={'AppNxt developed a comprehensive digital platform for Spice Money, enabling seamless transactions and services for rural customers.'} />

            <div className="pt-cs">
                <Advertise img={'/assets/img/portfolio-img-3.svg'} bg={'244F99'} padding={0} imgHeight={window.innerWidth >= 767 ? 960 : 400} objectFit={'cover'} />
            </div>

            <Content heading={'Results'} content={'The platform has successfully onboarded over 1.4 million Adhikaris (agents) across 18,900+ pincodes, covering 95% of rural India, and serving over 150 million customers.'} />
            
            <div className="pt-cs">
                <Advertise img={'/assets/img/portfolio-img-4.svg'} bg={'DD2928'} padding={15} imgHeight={window.innerWidth >= 767 ? 380 : 115} objectFit={window.innerWidth >= 767 ? 'contain' : 'cover'} />
            </div>

            <Projects type={'start'} content={projectContent} />

            <Footer />
        </>
    );
};

export default Inner;
