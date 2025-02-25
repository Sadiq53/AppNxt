import { useState, useRef, useEffect } from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import splitTextIntoSpans from '../../../../../utils/split';

const Section1 = () => {
  const [currentStep, setCurrentStep] = useState({
    img: "assets/img/step1.svg",
    step: "Step 1", 
    heading: "Research and Content Planning",
    content:
      "Progressively foster enterprise-wide systems whereas equity invested web-readiness harness installed base bandwidth.",
  });

  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const setStepSelection = (value) => {
    setCurrentStep(value);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headingRef.current) {
      // splitTextIntoSpans(headingRef.current);
      
      gsap.fromTo(headingRef.current, {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.05,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse"
        }
      });
    }

    if (descriptionRef.current) {
      gsap.fromTo(descriptionRef.current, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  const data = [
    {
      img: "assets/img/step1.svg",
      step: "Step 1",
      heading: "Research and Content Planning",
      content:
        "Progressively foster enterprise-wide systems whereas equity invested web-readiness harness installed base bandwidth.",
    },
    {
      img: "assets/img/step1.svg", 
      step: "Step 2",
      heading: "Design and Development",
      content:
        "Continually reintermediate seamless infrastructures with efficient human capital leverage.",
    },
    {
      img: "assets/img/step1.svg",
      step: "Step 3", 
      heading: "Testing and Optimization",
      content:
        "Completely synergize scalable e-commerce without backward-compatible data.",
    },
    {
      img: "assets/img/step1.svg",
      step: "Step 4",
      heading: "Launch and Monitoring", 
      content:
        "Dramatically maintain clicks-and-mortar solutions without functional solutions.",
    },
  ];

  return (
    <>
      <div className="header">
        <h4 className="font-lg text-start" ref={headingRef}>
          <span>We Follow</span> <br />
          Our Work Process
        </h4>

        <p className="font-sm text-start" ref={descriptionRef}>
          Enthusiastically engage cross-media leadership skills for alternative
          <br />
          experiences. Proactively drive vertical systems than intuitive
          architectures.
        </p>
      </div>
      <div className="body">
        <Part1 stepSelection={currentStep} />
        <Part2
          handleStepSelection={setStepSelection}
          currentStep={currentStep}
          data={data}
        />
      </div>
    </>
  );
};

export default Section1;
