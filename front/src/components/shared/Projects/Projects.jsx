import { NavLink } from "react-router-dom";
import HeadingStart from "../HeadingStyles/HeadingStart";
import HeadingCenter from "../HeadingStyles/HeadingCenter";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import splitTextIntoSpans from "../../../utils/split";

const Cards = ({ image, label, project, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Different y offset based on index
        const yOffset = 100 + (index * 50);
        const yOffsetNormal = -0 + (index * 5);

        gsap.fromTo(cardRef.current, {
            y: yOffset,
        }, {
            y: yOffsetNormal,
            duration: 1,
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
                toggleActions: "play none none reverse"
            }
        });
    }, [index]);

    return (
        <NavLink to={`/portfolio/${project}`} className="cards" ref={cardRef}>
            <div>
                <img src={image} alt={`${label} - ${project}`} />
            </div>
            <div className="footer">
                <h3>{label}</h3>
                <h4 className="font-md fs-20">{project}</h4>
            </div>
        </NavLink>
    );
};

const Projects = ({ content, type }) => {
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

    const cardData = [
        {
        image: "/assets/img/image1.svg",
        label: "Spice Money",
        project: "Banking",
        },
        {
        image: "/assets/img/image2.svg",
        label: "Cadbury",
        project: "Confectionery",
        },
        {
        image: "/assets/img/image3.svg",
        label: "Myglamm",
        project: "Beauty & Personal Care",
        },
    ];

    return (
        <>
            <div className="container pt-cs">
                <div className="row">
                    <div className="col-md-12">
                        <div >
                            {
                                type === 'center' ? (
                                    <HeadingCenter descriptionRef={descriptionRef} headingRef={headingRef} highlightSize={content?.highlightSize} normal={content?.normal} normalSize={content?.normalSize} highlight={content?.highlight} description={content?.description} />
                                ) : (
                                    <HeadingStart descriptionRef={descriptionRef} headingRef={headingRef} width={content?.width} highlightSize={content?.highlightSize} normal={content?.normal} normalSize={content?.normalSize} highlight={content?.highlight} />
                                )
                            }
                        </div>
                        <div className="featured-cards-layout">
                            {cardData.map((value, index) => (
                                <Cards
                                key={index}
                                label={value.label}
                                image={value.image}
                                project={value.project}
                                index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
