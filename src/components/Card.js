import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

const Card = (props) => {
  const cardStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/card-bg.png)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    borderRadius:"10px",
    width: "300px",
    height:"450px",
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75)",
  };

  return (
    <div className="h-100 w-100 mt-5">
      <div className="card text-center border-0 mx-auto" style={cardStyle}>
        <FaFreeCodeCamp
          className="mx-auto my-2 card-img-top"
          style={{ width: "100px", height:"100px" }}
        />
        <div className="card-body">
          <h4>{props.title}</h4>
          <p className="card-text">{props.desc}</p>
          <p className="fw-bold">Technologies</p>
          {props.technologies.map((t) => (
            <p className="mb-0">{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;