import React from "react";
import logo from "../logo.svg";

const Footer = () => {
  return (
    <section className="w-100">
      <div className="d-block d-lg-flex justify-content-around py-5 px-5 px-lg-0 rounded cta" style={{background:"#9158CC",marginLeft:"10%",marginRight:"10%"}}>
        <h3>Start a Project</h3>
        <p className="my-auto">Interested in working together? We should queue up a chat.</p>
        <a href="https://forms.gle/dAWW96w5it6GYn7V9" className="btn btn-lg btn-secondary mt-3 mt-lg-0 rounded">Message</a>
      </div>
      <center>
        <img src={logo} alt="logo" width="70" style={{marginTop:"100px"}}/>
        <p style={{ marginTop: "20px",marginBottom:"100px"}}>Stop Procastinating and Start Doing.</p>
        <p className="m-0 pb-2">meetkalani2002@gmail.com</p>
        </center>
    </section>
  );
};

export default Footer;
