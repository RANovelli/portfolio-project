import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATAR IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";
const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Ullamco occaecat id labore ea aliquip sint pariatur non quis ea nisi
            eiusmod sunt ea. Consequat ullamco aliqua do labore. Et ut est
            cillum voluptate anim consectetur aliquip enim ex.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="John Doe 2" />
        <div className="myCarousel">
          <h3>Jane Doe 2</h3>
          <p>
            Ullamco occaecat id labore ea aliquip sint pariatur non quis ea nisi
            eiusmod sunt ea. Consequat ullamco aliqua do labore. Occaecat cillum
            exercitation reprehenderit officia. Culpa et anim quis magna exercitation magna deserunt sit incididunt.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>
            Ullamco occaecat id labore ea aliquip sint pariatur non quis ea nisi
            eiusmod sunt ea. Consequat ullamco aliqua do labore. Mollit
            incididunt culpa consequat ad ut excepteur commodo qui enim
            proident.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>
            Ullamco occaecat id labore ea aliquip sint pariatur non quis ea nisi
            eiusmod sunt ea. Consequat ullamco aliqua do labore. Commodo velit
            sit reprehenderit incididunt officia ea incididunt incididunt elit
            cillum consequat eiusmod ullamco.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
