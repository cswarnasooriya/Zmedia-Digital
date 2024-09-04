import React from "react";
import Image1 from "../../assets/hero/hero_1.png";
import Image2 from "../../assets/hero/hero_2.png";
import Image3 from "../../assets/hero/hero_3.png";
import Image4 from "../../assets/hero/hero_4.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Deliver Digital Marketing Solutions",
    description:
      "Our mission at Zmedia is to deliver tailored digital marketing solutions that accelerate business success. ",
  },
  {
    id: 2,
    img: Image2,
    title: "Understanding Our Clients’ Needs ",
    description:
      "We prioritize understanding our clients’ unique needs and crafting strategies that foster meaningful connections with their target audience.",
  },
  {
    id: 3,
    img: Image3,
    title: "Setting And Driving Innovation",
    description:
      "Our vision at Zmedia is to be recognized as the leading digital marketing agency known for setting industry standards and driving innovation.",
  },
  {
    id: 4,
    img: Image4,
    title: "Delivering Ground Breaking Solutions ",
    description:
      "We aspire to shape the future of digital marketing by consistently delivering ground-breaking solutions that inspire and transform businesses..",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-200 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-logo/90 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="lg:text-[18px] text-[16px]"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="ml-2"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-2 px-10 rounded-full"
                    >
                      Hire Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
