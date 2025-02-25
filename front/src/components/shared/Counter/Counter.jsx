import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Counter = ({ counters }) => {

    const [isVisible, setIsVisible] = useState(false); 
    const countersRef = useRef(null);

    

    const [animatedValues, setAnimatedValues] = useState(
        counters?.map(() => 0) 
    );

    // Function to animate the counters
    const animateCounters = () => {
        const duration = 2000; 
        const steps = 60;
        const interval = duration / steps; 

        counters?.forEach((counter, index) => {
        const stepValue = Math.ceil(counter.value / steps); 
        let current = 0;

        const intervalId = setInterval(() => {
            current += stepValue;
            if (current >= counter.value) {
            current = counter.value; 
            clearInterval(intervalId);
            }

            setAnimatedValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = current;
            return newValues;
            });
        }, interval);
        });
    };

  // Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Start animation when section becomes visible
  useEffect(() => {
    if (isVisible) {
      animateCounters();
    }
  }, [isVisible]);

    return (
        <>
            <div className="counter" ref={countersRef}>
                {counters?.map((counter, index) => (
                <div className="box" key={index}>
                    <h4>
                    {animatedValues[index]}
                    {counter.suffix}
                    </h4>
                    <p>{counter.label}</p>
                </div>
                ))}
            </div>
        </>
    )
}

export default Counter