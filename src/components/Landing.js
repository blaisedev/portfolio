import React from 'react';
import '../styles/style.css';

const Landing = () => {
    return (

        <div className="landing">
            <div className="ui stackable two column grid">
                <div style={{
                    marginTop: "15%",
                    borderSize: "10px",
                    marginLeft: "25%",
                    height: "30vh",
                    width: "50%",
                    backgroundColor: "grey",
                    opacity: "0.8",
                    color: "grey"
                }}>

                    <div style={{ marginTop: "10%", float: "right", width: "45%", backgroundColor: "greenyellow", opacity: "0.8"}}>
                        <p className="more-info">Get in touch</p>
                        <button>Get in touch</button>
                    </div>
                    <div style={{ marginTop: "10%", width: "45%", backgroundColor: "greenyellow", opacity: "0.8"}}> jhgghffvty</div>
                </div>

            </div>
        </div>
    );
};

export default Landing;