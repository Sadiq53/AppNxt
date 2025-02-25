import HeadingCenter from '../../shared/HeadingStyles/HeadingCenter'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import splitTextIntoSpans from "../../../utils/split";

const OurServices = () => {

    const headingRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Split and animate heading text
        if (headingRef.current) {
            splitTextIntoSpans(headingRef.current);
       
            gsap.fromTo(headingRef.current.querySelectorAll('span span span'), {
                opacity: 0,
                x: 20,
                filter: 'blur(10px)',
                duration: 0.8,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                }
            },
            {
                opacity: 1,
                x: 0,
                filter: 'blur(0px)',
                duration: 0.8,
                stagger: 0.05,
            }
        );
        }

        // Animate description text
        if (descriptionRef.current) {
            splitTextIntoSpans(descriptionRef.current);
            

            gsap.fromTo(descriptionRef.current.querySelectorAll('span span span'), {
                opacity: 0,
                x: 20,
                filter: 'blur(10px)',
                duration: 0.4,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                }
            },
            {
                opacity: 1,
                x: 0,
                filter: 'blur(0px)',
                duration: 0.4,
                stagger: 0.02,
            }
        );
        }
    }, []);

  return (
    <>
        <section className="pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <HeadingCenter highlight={"Our"} highlightSize={window.innerWidth > 767 ? 88 : 55} normalSize={window.innerWidth > 767 ? 78 : 55} normal={"Services"} description={"Providing innovative web and mobile app development, staff augmentation, AI, ML, quality assurance, and IT consulting services to drive business success and technological advancement."} />

                        <div className="services-grid mt-5 ">
                            <div className="services-col">
                                <img src="/assets/img/service-col-1.svg" alt="" />
                                <div className="pill font-md text-center fs-16">
                                Web App <br/>
                                Development
                                </div>
                            </div>
                            <div className="services-col">
                                <img src="/assets/img/service-col-2.svg" alt="" />
                                <div className="pill font-md text-center fs-16">
                                Staff <br/>
                                Augmentation
                                </div>
                            </div>
                            <div className="services-col">
                                <img src="/assets/img/service-col-3.svg" alt="" />
                                <div className="pill font-md text-center fs-16">
                                A1 <br />
                                Development
                                </div>
                            </div>
                            <div className="services-col">
                                <img src="/assets/img/service-col-4.svg" alt="" />
                                <div className="pill font-md text-center fs-16">
                                ML <br/>
                                Development
                                </div>
                            </div>
                            <div className="services-col">
                                <img src="/assets/img/service-col-5.svg" alt="" />
                                <div className="pill font-md text-center fs-16">
                                Mobile App <br/>
                                Development
                                </div>
                            </div>
                            <div className="services-col">
                                <img src="/assets/img/service-col-6.svg" alt="" />
                                <div className="pill font-md text-center fs-16">
                                Quality <br/>
                                Assurance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurServices