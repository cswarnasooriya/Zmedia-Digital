import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Mr. Saman Indika",
    text: "I recently hired Zmedia digital solutions for my relocation, and I couldn't be happier with their service. The entire team was professional, punctual, and efficient.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ms. Marry Anjello",
    text: "I recently hired Zmedia digital solutions for my relocation, and I couldn't be happier with their service. The entire team was professional, punctual, and efficient.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Mr. Anjana devage",
    text: "I recently hired Zmedia digital solutions for my relocation, and I couldn't be happier with their service. The entire team was professional, punctual, and efficient.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Mr. Pradeep Silva",
    text: "I recently hired Zmedia digital solutions for my relocation, and I couldn't be happier with their service. The entire team was professional, punctual, and efficient.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-[24px] dark:text-logo/90 text-logo/80">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-6xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-[19px] text-gray-600 dark:text-gray-300 text-justify font-bold py-4">
          We prioritize understanding our clients’ unique needs and crafting strategies that foster meaningful connections with their.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (<>
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-xl py-10 px-6 text-justify mx-4 rounded-2xl dark:bg-gray-700 bg-primary/30 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-[16px] text-black/60 dark:text-gray-200">{data.text}</p>
                      <h1 className="text-xl font-medium text-black/70 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-logo/60 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
