import React, {Component} from 'react';

class Overlay extends Component {


    render() {
        let technologies = this.props.projectData.technologies || [];
        let overlay = (
            <div className="overlayModal">
                <button onClick={this.props.onClose} className="overlayCloseButton">X</button>
                <div className="ui stackable two column grid">
                    <div className="column">
                        <div className="projectInfo">
                        <header><h2>{this.props.projectData.title}</h2></header>
                        <img src={this.props.projectData.image}/>
                        <p>{this.props.projectData.about}</p>
                        <div>
                            <a href={this.props.projectData.github} target="_blank">
                            <button>Click for code</button>
                            </a>
                            <a href={this.props.projectData.appLink} target="_blank">
                            <button>Click for live App</button>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="column technologies">
                        <header><h2>Technologies Used</h2></header>
                        <div>
                            <ul>
                                {technologies.map((item) => (
                                    <li>{item}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
        if(!this.props.isOpen) {
            overlay = null;
        }
        return (
            <div>{overlay}</div>
        );
    }

}

export default Overlay;