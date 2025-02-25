import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import splitTextIntoSpans from '../../../../utils/split';

const Banner = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null); 
  const card3Ref = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const gifRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Create a main timeline
    const mainTimeline = gsap.timeline();

    // Initial position at center
    mainTimeline.set([card1Ref.current, card2Ref.current, card3Ref.current], {
      xPercent: -50,
      yPercent: -50,
      left: '50%',
      top: '50%',
      scale: 0,
      opacity: 1
    });



    // Pop in animation
    mainTimeline.to([card1Ref.current, card2Ref.current, card3Ref.current], {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      stagger: 0.3,
      ease: "power1.out",
    }, "+=2.5");

    // Initial positions animation
    mainTimeline.to(card3Ref.current, {
      left: 'unset',
      top: 'unset', 
      right: '20%',
      bottom: '5%',
      xPercent: 0,
      yPercent: 0,
      duration: 0.3,
      ease: "power1.out",
    }, "+=0.5");

    mainTimeline.to(card2Ref.current, {
      left: '10%',
      top: '10%',
      right: 'unset',
      bottom: 'unset',
      xPercent: 0,
      yPercent: 0,
      duration: 0.3,
      ease: "power1.out",
    }, "-=0.2");

    mainTimeline.to(card1Ref.current, {
      left: 'unset',
      top: '-2%',
      right: '10%',
      bottom: 'unset',
      xPercent: 0,
      yPercent: 0,
      duration: 0.3,
      ease: "power1.out",
    }, "-=0.2");

    // Parallax scroll animations
    gsap.to(card1Ref.current, {
      scrollTrigger: {
        trigger: ".main-banner",
        start: "top top",
        end: "bottom top",
        scrub: 1
      },
      y: -50,
      x: -50,
      rotation: 10
    });

    gsap.to(card2Ref.current, {
      scrollTrigger: {
        trigger: ".main-banner",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      },
      y: -200,
      x: -200,
      rotation: -15
    });

    gsap.to(card3Ref.current, {
      scrollTrigger: {
        trigger: ".main-banner",
        start: "top top",
        end: "bottom top",
        scrub: 2
      },
      y: -100,
      x: -100,
      rotation: 15
    });

    // Heading animation
    mainTimeline.fromTo(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.out"
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out"
    }, ">");

    // mainTimeline.fromTo(gifRef.current, {
    //   opacity: 0,
    //   scale: 0,
    //   duration: 1,
    //   ease: "power1.out"
    // }, {
    //   opacity: 1,
    //   scale: 1,
    //   duration: 1,
    //   ease: "power1.out"
    // }, "-=0.5");

    const paragraphText = paragraphRef.current;
    splitTextIntoSpans(paragraphText);
   

    mainTimeline.to(paragraphRef.current.querySelectorAll('span span span'), {
      opacity: 1,
      duration: 0.5,
      stagger: 0.01,
      xPercent: 0,
      ease: "power1.out"
    }, ">");

    mainTimeline.fromTo(buttonRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power1.out"
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out"
    }, ">");

  }, []);

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div className="main-banner">
                {/* <img className='gif' ref={gifRef} src="/assets/gif/banner.gif" alt="" /> */}
                <img className='blur' src="/assets/img/blur.svg" alt="" />
                <img ref={card1Ref} className='card1' src="/assets/img/card1.svg" alt="" />
                <img ref={card2Ref} className='card2' src="/assets/img/card2.svg" alt="" />
                <img ref={card3Ref} className='card3' src="/assets/img/card3.svg" alt="" />
                <div className="heading">
                  <h4 ref={headingRef} className='font-lg text-start'>Imagination <br />Meets Innovation</h4>
                </div>
              </div>
              <div className="pt-30 content-banner">
                <div>
                  <p ref={paragraphRef} className='font-sm'>At Appnxt, we merge imagination with technology to craft innovative solutions. As a forward-thinking digital agency, we bring visionary concepts to life, delivering exceptional results that shape the future.</p>
                </div>
                <div className="cs-btn">
                  <button ref={buttonRef} className='connect-btn'>Let&apos;s Connect <img src="/assets/img/arrow.svg" alt="" /></button>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner