import React from "react";
import "./Banner.css";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Nav } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="hero-image" 
    // style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('+banner+')'}}
    >
      <div className="hero-text" >
        <h1 style={{fontSize: '70px', width:"70%", paddingBottom:"50px"}}>CREATE YOUR OUTDOOR ADVENTURE </h1>
        <Nav.Link as={HashLink} to="/home#fascilities">
        <Button variant="warning" className="p-3" style={{fontWeight: 'bolder', fontSize: "18px", color:'white'}}>Explore our amazing offers</Button>
        </Nav.Link>
      </div>
    </div>
  );
};

export default Banner;