import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Part2 = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const centerRef = useRef(null);
    const part2Ref = useRef(null);

    useEffect(() => {
        const part2 = part2Ref.current;
        const leftImg = leftRef.current;
        const rightImg = rightRef.current;
        const centerImg = centerRef.current;

        part2.addEventListener('mouseenter', () => {
            gsap.to(leftImg, {
                x: -20,
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(rightImg, {
                x: 20, 
                duration: 0.3,
                ease: 'power2.out'
            });
            gsap.to(centerImg, {
                y: -20,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        part2.addEventListener('mouseleave', () => {
            gsap.to([leftImg, rightImg, centerImg], {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }, []);

    return (
        <>
            <div className="part2" ref={part2Ref}>
                <div className="left">
                    <img ref={leftRef} src="/assets/img/anim-img-2.svg" alt="" />
                </div>
                <div className="right">
                    <img ref={rightRef} src="/assets/img/anim-img-3.svg" alt="" />
                </div>
                <div className="center">
                    <img ref={centerRef} src="/assets/img/anim-img-1.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Part2