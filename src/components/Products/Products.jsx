import React from "react";
import Img1 from "../../assets/women/Socialservice_1.png";
import Img2 from "../../assets/women/Brandservice_4.png";
import Img3 from "../../assets/women/AIservice_1.png";
import Img4 from "../../assets/women/AIservice.png";
import Img5 from "../../assets/women/Contentservice_2.png";
import Img6 from "../../assets/women/Socialservice_6.png";
import Img7 from "../../assets/women/SEOservice_1.png";
import Img8 from "../../assets/women/Emailservice_3.png";
import Img9 from "../../assets/women/Webservice_1.png";
import Img10 from "../../assets/women/Webservice_3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Digital Stratergy",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Brands Automation",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Creative Solutions",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "AI Technologies",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Content Designs",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Media Consultency",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "SEO",
    rating: 4.8,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 8,
    img: Img8,
    title: "Email and CRM",
    rating: 4.9,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 9,
    img: Img9,
    title: "Paid Marketing",
    rating: 4.8,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 10,
    img: Img10,
    title: "Web Development",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[900px] mx-auto">
          <p data-aos="fade-up" className="text-[26px] text-logo dark:text-gray-500">
           Our Top Services for you
          </p>
          <h1 data-aos="fade-up" className="text-6xl font-bold pb-8">
            Services
          </h1>
          <p data-aos="fade-up" className="text-[18px] text-justify dark:text-gray-400 text-gray-600 font-bold m-2 pb-4 flex items-center">
          Expertly crafting websites with creative design, optimizing visibility through digital marketing and SEO, and delivering user-friendly UX/UI, all focused on enhancing your brand's success.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-4"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[320px] w-[300px] lg:h-[270px] lg:w-[200px] object-cover rounded-2xl border-b-4 border-r-2 hover:scale-[1.05] cursor-pointer"
                />
                <div>
                  <h3 className="font-semibold text-[18px]">{data.title}</h3>
                  <p className="text-sm text-gray-500">{data.color}</p>
                  <div className="flex items-center gap-1 text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
