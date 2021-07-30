import React from 'react';
import { BsBoxArrowRight } from "react-icons/bs";

const Project = props => {

    const openTab = () => {
        window.open(props.link, '_blank')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
                <img src={props.path} width="100%" height="100%" style={{boxShadow:"0px 0px 15px 0px rgba(0,0,0,0.75)"}} className="rounded" alt={props.alt} />
            </div>
            <div className="col-lg-8 col-12">
                <p>{props.desc}</p>
                <p className="fw-bold">Technologies Used:</p>
                <p>{props.usedTech}</p>
                <a className="btn btn-primary" href="#" onClick={openTab}>Link to Project <BsBoxArrowRight className="fw-bold" /></a>
            </div>
        </div>
    )
}

export default Project
