import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
    <div className="text-container">
        <p>We're the up and coming Technology Consulting assocation based in Seattle!
           Our work helps promote stability in organizations by creating 
           and implementing plans based on past data. We'd love to get to 
           know you, what you'd like out of consulting, and what brought you here!
           Find more information about how to contact us below! </p> 
    </div>
    <img src="https://media1.tenor.com/m/fm4u-L3RJjMAAAAC/cat-thousand-yard-stare-thousand-yard-stare.gif"></img>
      <div className="contacts">
        <p className="disclaimer">Please allow for up to 4 bussiness day before a response!</p>
        <p>Gmail: xxx@gmail.com</p> 
        <p>LinkedIn: somethingsomething</p>
    </div>
    </div>
  );
};

export default About;