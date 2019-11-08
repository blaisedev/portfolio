import React from 'react';

import Nav from "./Nav";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import {BrowserRouter } from 'react-router-dom';
import Footer from "./Footer";
import Landing from './Landing';

const App = () => {
        return (
            <div>
                <BrowserRouter>
                    <Nav/>
                    <Landing/>
                    <About/>
                    <Projects/>
                    <Courses/>
                    <Contact/>
                    <Footer/>
                </BrowserRouter>
            </div>
        )

};

export default App;
