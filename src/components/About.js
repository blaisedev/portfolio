import React from 'react';
import '../styles/style.css';

const About = () => {
    return (
        <div className="white-background">
        <div className="ui container" id="about">

            <header style={{marginBottom: '20px'}}>
                <h2>About Me</h2>
            </header>
            <div className="ui stackable two column row">
                <div className="column">
                    <p>
                        Blaise started his journey in software development by completing a Higher Diploma in software
                        Development from GMIT. Gaining experience in the automotive industry he has worked as a
                        fullstack developer on a range const
                        of projects on a global team such as Struts remediation, GreenField , small change and Angularjs
                        to Angular 6+ upgrades.
                    </p>

                    <p>
                        Like all developers , Blaise likes to spend most of his free time increasing his knowledge of
                        new technologies
                        while also developing his own personal projects.
                    </p>

                </div>
                <header style={{marginTop: "20px", marginBottom: "20px"}}>
                    <h2>Skills</h2>
                </header>

                <div className="column">
                    <table className="ui very compact table">
                        <thead>
                        <tr>
                            <th>Languages</th>
                            <th>Frameworks / Libraries</th>
                            <th>Tools</th>
                            <th>Testing</th>
                            <th>Build / CI</th>
                            <th>Web Servers</th>
                            <th>Model</th>
                            <th>Database</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Java</td>
                            <td>Spring</td>
                            <td>Intellij</td>
                            <td>JUnit</td>
                            <td>Maven</td>
                            <td>Weblogic</td>
                            <td>UML</td>
                            <td>SQL Developer</td>
                        </tr>
                        <tr className="positive">
                            <td>JavaScript</td>
                            <td>Hibernate</td>
                            <td>BitBucket</td>
                            <td>Mockito</td>
                            <td>Gradle</td>
                            <td>Tomcat</td>
                            <td>JSON</td>
                            <td>SQL Server</td>
                        </tr>
                        <tr>
                            <td>SQL</td>
                            <td>React / Redux</td>
                            <td>Eclipse</td>
                            <td>Selenium</td>
                            <td>Jenkins</td>
                            <td>Heroku</td>
                            <td>XML</td>
                            <td>Toad</td>
                        </tr>
                        <tr className="positive">
                            <td>Android</td>
                            <td>Angular 2+ / Angular JS</td>
                            <td>UpSource</td>
                            <td>Cobertura</td>
                            <td>Docker</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>MySQL</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>Struts</td>
                            <td>GitHub</td>
                            <td>Jasmine</td>
                            <td>BitBucket-Pipelines</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>H2</td>
                        </tr>
                        <tr className="positive">
                            <td>CSS</td>
                            <td>Kendo UI</td>
                            <td>SVN</td>
                            <td>Soap-UI</td>
                            <td>Heroku-Pipeline</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>PL SQL</td>
                            <td>jQuery</td>
                            <td>&nbsp;</td>
                            <td>Postman</td>
                            <td>AWS</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </div>
    );
};

export default About;
