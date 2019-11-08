import React from 'react';
import '../styles/style.css';

const Courses = () => {
    return (

        <div className="ui container" id="contact">
            <header>
                <h2>Contact</h2>
            </header>
            <div className="wrapper">
                <div className="ui stackable two column grid">
                    <div className="column">
                        <h3>Want to get in contact? Email or connect on Linkedin >></h3>
                    </div>
                    <div className="column">
                        <div className="contact-icons">
                            <a href="http://github.com/blaisedev/" target="_blank">
                                <i className="github icon"></i>
                            </a>
                            <a href="https://ie.linkedin.com/in/blaise-devaney-07205b114/" target="_blank">
                                <i className="linkedin icon"></i>
                            </a>
                            <a href="mailto:blaisedevaney@gmail.com" target="_blank">
                                <i className="envelope outline icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
