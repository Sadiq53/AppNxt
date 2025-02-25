import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';

const AnimateImage = ({ image }) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(imageRef.current, {
      scale: 0.5,
    }, {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom bottom", 
        scrub: 2.5,
        markers: false,
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <>
        <div ref={containerRef} className="container pt-cs">
            <div className="row">
                <div className="col-md-12">
                  <img ref={imageRef} src={image} alt="" className="lg-video" />
                </div>
            </div>
        </div>
    </>
  )
}

AnimateImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default AnimateImage