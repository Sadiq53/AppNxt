import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import splitTextIntoSpans from '../../../utils/split';

const Content = ({ heading, content }) => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(headingRef.current, {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Content text animation
    const contentText = contentRef.current;
    
    splitTextIntoSpans(contentText);

    gsap.fromTo(contentRef.current.querySelectorAll('span span span'), {
      opacity: 0,
      x: 50,
     
      filter: 'blur(10px)',
     
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom-=100",
        end: "bottom center", 
        toggleActions: "play none none reverse"
      }
    }, {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      duration: 0.5,
      stagger: 0.05,
    });

  }, [content]);

  return (
    <>
        <div className="container pt-cs">
            <div className="row gap-10">
                <div className="col-md-4">
                    <h4 ref={headingRef} className='font-md fw-600'>{heading}</h4>
                </div>
                <div className="col-md-8">
                  <h4 ref={contentRef} className="font-md fs-22">
                      {content}
                  </h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Content