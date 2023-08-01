import React, { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import jupiter from '../assets/jupiter.json';
import animationData2 from '../assets/AnimationAstro.json';

const SVGTest = () => {

    const testRef = useRef<LottieRefCurrentProps>(null);
    const animationContainer = useRef(null);

    const handleShowAstronaut = () => {
        console.log(animationContainer.current.classList);

        animationContainer.current.classList.add('animated');
    }

    const stars = () => {
        let count = 200;
        let scene = document.querySelector('body');
        let i = 0;

        while (i < count) {
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let duration = Math.random() * 10;
            let size = Math.random() * 2;

            star.classList.add('star');

            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.width = 1 + size + 'px';
            star.style.height = 1 + size + 'px';

            star.style.animationDuration = 5 + duration + 's';
            star.style.animationDelay = duration + 's';

            scene.appendChild(star);
            i++;
        }
    }

    useEffect(() => {
        stars();
    }, []);

  return (
    <>
        <button onClick={handleShowAstronaut}>Show Astronaut</button>
        <div className='animationBox' ref={animationContainer}>
            <Lottie lottieRef={testRef} animationData={animationData2} />
        </div>
        <div className='jupiter'>
            <Lottie animationData={jupiter}/>
        </div>
    </>    
  )
}

export default SVGTest