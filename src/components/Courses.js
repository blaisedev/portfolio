import React from 'react';
import '../styles/style.css';


const courseDetails = {
    list: [
        {
            link: "https://www.udemy.com/course/the-complete-javascript-course/",
            image: "/images/complete-javascript.jpg",
            title: "The Complete JavaScript Course 2019: Build Real Projects!",
            author: "Jonas Schmedtmann, Web Developer, Designer, and Teacher",
            id: 1
        },
        {
            link: "https://www.udemy.com/course/react-redux/",
            image: "/images/modern-react.jpg",
            title: "Modern React with Redux [2019 Update]",
            author: "Stephen Grider, Engineering Architect",
            id: 2
        },
        {
            link: "https://www.udemy.com/course/react-redux-tutorial/",
            image: "/images/advanced-react.jpg",
            title: "Advanced React and Redux: 2018 Edition",
            author: "Stephen Grider, Engineering Architect",
            id: 3
        },
        {
            link: "https://www.udemy.com/course/learn-java-se-8-and-prepare-for-the-java-associate-exam/",
            image: "/images/java-8.jpg",
            title: "Complete Java SE 8 Developer Bootcamp - OCA Prep Included",
            author: "Intertech Training",
            id: 4
        },
    ]
}


const Courses = () => {
    return (

        <div className="grey-background">
        <div className="ui container" id="courses">

            <header>
                <h2>My latest courses</h2>
                <p>Some of the latest courses I am enrolled in</p>
            </header>
            <div className="wrapper">
                <div className="ui stackable four column grid link cards">
                    {courseDetails.list.map((item) => (
                        <div className="column" key={item.id}>
                            <a className="ui card" href={item.link}
                               target="_blank">
                                <div className="image">
                                    <img src={item.image}/>
                                </div>
                                <div className="content">
                                    <div className="header">{item.title}</div>
                                    <div className="meta">
                                        <p>{item.author}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>

    );
};

export default Courses;
