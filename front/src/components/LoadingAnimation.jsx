import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LoadingAnimation = () => {
  const loaderRef = useRef(null)
  const wordsRef = useRef(null)
  const photoRefs = useRef([])

  const words = ['Design.', 'Create.', 'Innovate.'];
  const repeat = 4;
  const colors = ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFE4B5', '#E6E6FA'];

  useEffect(() => {

     // Fade in animation for words container
     gsap.fromTo(wordsRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power2.out"
      });

    // Fade in animation for photos
    gsap.fromTo(photoRefs.current, {
      opacity: 0,
      y: 0,
      scale: 1.5
    }, {
        delay: 1.2,
        opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      duration: .25,
      ease: "power2.out"
    });

   

    // Optional: Fade out animation
    gsap.to(loaderRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 4,
      ease: "power4.out",
      onComplete: () => {
        if (loaderRef.current) {
          loaderRef.current.style.display = 'none'
        }
      }
    });
  }, [])

  return (
    <div ref={loaderRef} className="loading-main-container">
      <div className="content-loading">
        <div className='loading-photos-container'>
            <div className='loading-photos-wrapper'>
                {
                    Array.from({ length: 16 }, (_, index) => {
                        return (
                            <div 
                              ref={el => photoRefs.current[index] = el} 
                              key={index} 
                              style={{ 
                                transform: `rotate(${-20 + (Math.floor(Math.random() * 40))}deg)`, 
                                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                                opacity: 0
                              }} 
                              className='loading-photo-item'
                            />
                        )
                    })
                }
            </div>
        </div>
        <div ref={wordsRef} className="loading-words-container" style={{ opacity: 0 }}>
            <div className='loading-words-wrapper'>
                {
                    Array.from({ length: repeat }, () => (
                        words.map((word, index) => (
                            <span key={index} className="">{word}</span>
                        ))
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation