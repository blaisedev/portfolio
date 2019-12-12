import React from 'react';
import '../styles/style.css';
import AnimatedTypingComponent from "./AnimatedTypingComponent";
import {Link} from "react-scroll/modules";

const Landing = () => {
    return (

        <div className="landing">

            <div className="ui grid">
                <div style={{
                    marginTop: "15%",
                    borderSize: "10px",
                    marginLeft: "25%",
                    height: "30vh",
                    width: "50%",
                }}>
                    <AnimatedTypingComponent/>
                    <Link
                        activeClass="active"
                        to="projects"
                        className="animated-points"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <i style={{position: "absolute", bottom: "0", fontSize: "60px"}} className="angle double down icon"></i>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Landing;