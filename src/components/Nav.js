import React from 'react';
import '../styles/style.css';
import resume from '../BlaiseDevaneyPDF.pdf';
import {Link} from 'react-scroll';


const Nav = () => {

    return (
        <div className="ui  fixed inverted massive menu grey">

            <Link
                activeClass="active"
                to="projects"
                className="item"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Projects
            </Link>
            <Link
                activeClass="active"
                to="courses"
                className="item"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Courses
            </Link>
            <Link
                activeClass="active"
                to="about"
                className="item"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                About Me
            </Link>
            <Link
                activeClass="active"
                to="contact"
                className="item"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Contact
            </Link>
            <div className="right menu">
                <a className="item" href="http://github.com/blaisedev/" target="_blank">
                    <i className="github icon"></i>
                </a>
                <a className="item" href="https://ie.linkedin.com/in/blaise-devaney-07205b114/" target="_blank">
                    <i className="linkedin icon"></i>
                </a>
                <a className="item" href={resume} download>
                    Resume
                    <i className="download icon"></i>
                </a>
            </div>
        </div>
    );
};

export default Nav;