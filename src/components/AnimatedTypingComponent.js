import React from 'react';
import Typing, { Backspace, Delay } from 'react-typing-animation';

const AnimatedTypingComponent = () => (
    <div>
        <Typing>
            <span className="animated-name">Blaise Devaney</span>
        </Typing>
        <div style={{marginTop: "20px"}}>
        <Typing  startDelay={1000} loop>
            <span style={{color: "white"}} className="animated-points">Software Developer</span>
            <Backspace count={19} delay={2000} />
            <Delay ms={1000} />
            <span className="animated-points">Full Stack Web Developer</span>
            <Backspace count={25} delay={2000} />
            <Delay ms={1000} />
        </Typing>
        </div>
    </div>
);

export default AnimatedTypingComponent;