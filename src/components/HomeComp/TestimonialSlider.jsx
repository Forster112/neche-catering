import React from "react";
import Slider from "react-slick";

import ava01 from "../../assets/images/ava01.jpg";
import ava02 from "../../assets/images/ava02.jpg";
import ava03 from "../../assets/images/ava03.jpg";

const TestimonialSlider = () => {
  const reviewItems = [
    {
      reviewerImage: ava01,
      reviewerName: "Mitchell Blake",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque autem porro obcaecati dicta voluptas.",
    },
    {
      reviewerImage: ava02,
      reviewerName: "Timothy Michaels",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dodeme apistame atque autem porro obcaecati dicta voluptas.",
    },
    {
      reviewerImage: ava03,
      reviewerName: "Mikenzie Obian",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur fe sswa kkdmaa adipisicing elit. Sapiente atque autem porro obcaecati dicta voluptas.",
    },
  ];

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      {reviewItems.map((item, i) => (
        <div key={i}>
          <p className="review__text">
            {item.reviewText}
          </p>
          <div className="d-flex align-items-center gap-4">
            <img
              src={item.reviewerImage}
              alt="reviewer" className="review__image"
            />
            <span className="reviewer__name">
              {item.reviewerName}
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
