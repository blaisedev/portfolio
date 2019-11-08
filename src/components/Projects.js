import React, {Component} from 'react';
import '../styles/style.css';
import Overlay from './Overlay';

const projectDetails = {
    list: [
        {
            image: "/images/twenty-one.jpg",
            title: "Twenty-One",
            description: "JavaScript application where you can play the game 21",
            about: "A JavaScript application built with the help of HTML and CSS. " +
                "Two players can play 21 with a winner decided by one going bust",
            github: "https://github.com/blaisedev/twenty-one",
            appLink: "https://blaisedev-twenty-one.herokuapp.com/",
            technologies: ['JavaScript', 'HTML', 'CSS'],
            id: 1
        },
        {
            image: "/images/timetable.jpg",
            title: "TimeTable",
            description: "Javascript application where you can create a weekly timetable",
            about: "JavaScript, HTML and CSS application utilising skills learned on a Udemy course" +
                ". Timetable is an application where you can create a color coded weekly timetable",
            github: "https://github.com/blaisedev/timetable",
            appLink: "https://blaisedev-timetable.herokuapp.com/",
            technologies: ['JavaScript', 'HTML', 'CSS'],
            id: 2
        },
        {
            image: "/images/profile.jpg",
            title: "Portfolio",
            description: "React application utilizing skills learned in my React course, providing details of my work/ personal projects",
            about: "React application that provides details about my work history, courses i am currently enrolled in, my personal projects and Resume.",
            github: "https://github.com/blaisedev/react-ui",
            appLink: "https://blaisedev-timetable.herokuapp.com/",
            technologies: ['React', 'React-Router', 'CSS', 'JSX'],
            id: 3
        },
        {
            image: "/images/twenty-one.jpg",
            title: "Complete Java App",
            description: "Jonas Schmedtmann, Web Developer, Designer, and Teacher",
            id: 4
        },
    ]
}


class Projects extends Component {

    state = {
        isOpen: false,
        projectData: {}
    };

    render() {
        return (

            <div className="white-background">
            <div className="ui container" id="projects">

                <header>
                    <h2>My personal projects</h2>
                    <p>Some of the my personal projects from things I learned in my courses</p>
                </header>
                <div className="wrapper">
                    <div className="ui stackable four column grid link cards">
                        {projectDetails.list.map((item) => (
                            <div className="column" key={item.id}>
                                <div className="ui card">
                                    <div className="image">
                                        <img src={item.image}/>
                                            <div className="project-image-overlay fade-in-hover">
                                                <button onClick={(e) => this.setState({isOpen: true, projectData: item})}
                                                        className="overlay-button">Click for code an live App
                                                </button>
                                            </div>
                                    </div>
                                    <div className="content">
                                        <div className="header">{item.title}</div>
                                        <div className="meta">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Overlay isOpen={this.state.isOpen} projectData={this.state.projectData} onClose={(e) => this.setState({isOpen: false})}/>
            </div>
            </div>
        );
    }
};

export default Projects;
