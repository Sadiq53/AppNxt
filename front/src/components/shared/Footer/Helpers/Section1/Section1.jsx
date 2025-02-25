import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'

const Section1 = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(sectionRef.current, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <>
        <div className="section-1" ref={sectionRef}>
            {
              window.innerWidth >= 767 ? (
                <>
                  <Part1 />
                  <Part2 />
                  <Part3 />
                </>
              ) : (
                <>
                  <Part2 />
                  <div className="grid-cs ">
                  <Part1 />
                  <Part3 />
                  </div>
                </>
              )
            }
        </div>
    </>
  )
}

export default Section1