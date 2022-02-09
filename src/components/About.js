import React from "react";
import author from "../profile_snow.jpg";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xs-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I'm a guitar player, songwriter, touring musician, record collector,
            and DJ, with a deep interest in all things Mid-Century. I'm a dual US/Italian citizen;
            my goal is to live between the Pacific Northwest and Italy.
            My primary goal for learning web development is to assist
            fellow artists, musicians, venues, record labels, and small businesses in fulfilling
            IT-related requirements necessary to succeed in today's market, as
            well as having the ability to generate revenue independently from
            anywhere in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
