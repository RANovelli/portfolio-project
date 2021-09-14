import React from "react";
import wigout from "../wigout.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //WIGOUT
  const openPopupboxWigout = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={wigout}
          alt="WigOut Website"
        />
        <p>Mollit eu laboris mollit magna.</p>
        <b>Website: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://novellidesign.org/wigout/index.html")
          }
        >
          https://novellidesign.org/wigout/index.html
        </a>
        <br/>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/RANovelli/w21-it161/tree/main/fp")
          }
        >
          https://github.com/RANovelli/w21-it161/tree/main/fp
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigWigout = {
      titleBar: {
          enable: true,
          text: "Wig Out Website"
      },
      fadeIn: true,
      fadeInSpeed: 500
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxWigout}>
            <img
              className="portfolio-image"
              src={wigout}
              alt="WigOut Website"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxWigout}>
            <img
              className="portfolio-image"
              src={wigout}
              alt="WigOut Website"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxWigout}>
            <img
              className="portfolio-image"
              src={wigout}
              alt="WigOut Website"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxWigout}>
            <img
              className="portfolio-image"
              src={wigout}
              alt="WigOut Website"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigWigout} />
      {/* additional containers for each portfolio item here */}
    </div>
  );
};

export default Portfolio;
