import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
const photos = [
  {
    name: "photo1",
    url: "/assets/img/testmonial1.jpg",
    title: " לקוחות אינבסט לא משלמים ריבית על מינוס עד 2500 ש'ח",
    text: "נלחמים במינוס",
  },
  {
    name: "photo2",
    url: "/assets/img/testmonial2.jpg",
    title: "!מגיע לך בנק שבא לקראתך",
    text: "באים לקראתך",
  },
  {
    name: "photo3",
    url: "/assets/img/testmonial3.jpg",
    title: "אינבסט תמיד איתכם במיוחד בתקופה כזאת",
    text: "תמיד איתכם",
  },
];
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slides",
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div
        style={{
          marginBottom: "50px",
        }}
      >
        <ul style={{ marginRight: "50px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="dots-main"
        style={{
          height: "5px",
          backgroundColor: "green",
        }}
      >
        <img className="dots-img" src={photos[i].url} />

        <h3 className="dots-text">{photos[i].text}</h3>
        {/* {i + 1} */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-main">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div className="photo-card" key={photo.name}>
              <img className="photo-carousel" src={photo.url} />
              <div className="img-area">
                <div className="img-text-area">
                  <span>{photo.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
