import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import splitTextIntoSpans from '../../../../../utils/split';

const Part1 = () => {
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (headingRef.current) {
            gsap.fromTo(headingRef.current, {
                opacity: 0,
                y: 50,
                filter: 'blur(10px)'
            }, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 0.8,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                }
            });
        }

        if (descriptionRef.current) {
            splitTextIntoSpans(descriptionRef.current);
            gsap.fromTo(descriptionRef.current.querySelectorAll('span'), {
                opacity: 0,
                x: 50
            }, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }, []);

    return (
        <>
            <div className="part1">
                <h4 className="font-lg text-start fs-68" ref={headingRef}>
                    <span className="fs-82">We deliver cutting-edge</span> digital solutions to empower your business
                </h4>
                <p className="font-sm text-start" ref={descriptionRef}>
                    Transform your digital presence with our innovative IT services and robust software solutions. Each project is crafted with precision to drive growth, enhance user experience, and ensure unparalleled success.
                </p>
            </div>
        </>
    )
}

export default Part1