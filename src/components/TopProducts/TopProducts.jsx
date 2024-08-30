import React from "react";
import Img1 from "../../assets/shirt/Service_14.png";
import Img2 from "../../assets/shirt/Service_10.png";
import Img3 from "../../assets/shirt/Service_4.png";
import Img4 from "../../assets/shirt/Service.png";
import Img5 from "../../assets/shirt/Service_12.png";
import Img6 from "../../assets/shirt/Service_7.png";
import Img7 from "../../assets/shirt/Service_16.png";
import Img8 from "../../assets/shirt/Service_1.png";
import Img9 from "../../assets/shirt/Service_6.png";

import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img4,
    title: "Web Development",
    description:
      "Website Design and Development: Create and build user-friendly, visually appealing websites that are optimized for performance, usability, and conversion.",
  },
  {
    id: 2,
    img: Img4,
    title: "Digital Stratergy",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img4,
    title: "Creative",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Img4,
    title: "Brand Automation",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    img: Img5,
    title: "Media Consultency",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    img: Img6,
    title: "Artificial Interlligence",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    img: Img7,
    title: "SEO",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    img: Img8,
    title: "Content",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    img: Img9,
    title: "Email and CRM",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">

        {/* Header section */}
        <div className="text-center mb-24">

          <p data-aos="fade-up" className="text-3xl dark;text-primary text-logo">
            Our Featured Services For You
          </p>
          <h1 data-aos="fade-up" className="text-6xl font-bold mb-8">
          Featured Services
          </h1>

          <p data-aos="fade-up" className="text-xs text-gray-700  dark:text-gray-400  text-[20px] pb-12 justify-center font-semibold">
            Here are the our trending and very former services in past few years. It help you to get clear idea about us more over.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-y-[200px] md:gap-x-[40px] place-items-center cursor-pointer ">

          {ProductsData.map((data) => (
            <>
            <div
              data-aos="zoom-in"
              className="rounded-3xl bg-gray-100 dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[400px]"
            >
              {/* image section */}
              <div className="h-[100px] cursor-pointer">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[210px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-2xl "
                />
              </div>
              {/* details section */}
              <div className="p-4 mb-8 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-2 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-semibold mb-4">{data.title}</h1>
                <p className="dark:text-logo text-gray-500 group-hover:text-white duration-300 text-[14px] line-clamp-2 mb-4">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  See More
                </button>
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
