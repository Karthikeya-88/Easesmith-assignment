import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

export default function ReactSlick() {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div className="slider-contents">
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729329385/Ellipse_68_pj16pt.png"
          alt="slider-image"
          className="slider-image"
        />
        <p className="slider-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
        </p>
      </div>
      <div className="slider-contents">
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729329746/Ellipse_69_s7tdhb.png"
          alt="slider-image"
          className="slider-image"
        />
        <p className="slider-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
        </p>
      </div>
      <div className="slider-contents">
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729329767/Ellipse_70_ajrepi.png"
          alt="slider-image"
          className="slider-image"
        />
        <p className="slider-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
        </p>
      </div>
      <div className="slider-contents">
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729329790/Ellipse_71_fw3war.png"
          alt="slider-image"
          className="slider-image"
        />
        <p className="slider-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
        </p>
      </div>
      <div className="slider-contents">
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729329385/Ellipse_68_pj16pt.png"
          alt="slider-image"
          className="slider-image"
        />
        <p className="slider-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
        </p>
      </div>
      <div className="slider-contents">
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729329746/Ellipse_69_s7tdhb.png"
          alt="slider-image"
          className="slider-image"
        />
        <p className="slider-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum{" "}
        </p>
      </div>
    </Slider>
  );
}
