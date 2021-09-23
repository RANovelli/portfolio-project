import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Seattle, WA 98122</p>
            </div>
            <div className="d-flex">
              <a href="tel: 555-555-5555">+1(206)555-5555</a>
            </div>
            <div className="d-flex">
              <p>ryan@example.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="#" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="#" className="footer-nav">
                  About
                </a>
                <br />
                <a href="#" className="footer-nav">
                  Services
                </a>
              </div>
              <div className="col">
                <a href="#" className="footer-nav">
                  Experience
                </a>
                <br />
                <a href="#" className="footer-nav">
                  Portfolio
                </a>
                <br />
                <a href="#" className="footer-nav">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://novellidesign.org/wigout/index.html"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://novellidesign.org/wigout/index.html"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://novellidesign.org/wigout/index.html"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://novellidesign.org/wigout/index.html"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;Novelli Design | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
