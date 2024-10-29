import React from "react";
import Img1 from  "../../src/assets/hero/s2.png";
import Img2 from  "../../src/assets/hero/s3.png";
import Img3 from  "../../src/assets/hero/a2.png";


import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Ad Creative ",
    description:
      "Design engaging and visually appealing advertisements that capture attention and drive action across various platforms.",
  },
  {
    id: 2,
    img: Img2,
    title: "Design/Art Direction",
    description:
      "Provide expert guidance on design and visual aesthetics to ensure creative projects align with brand identity and goals.",
  },
  {
    id: 3,
    img: Img3,
    title: "Video & Animation",
    description:
      "Produce high-quality video content and animations to convey messages, tell stories, and enhance audience engagement.",
  },
  
  

  
];
const Creative = () => {
  return (
    <div>
      <div className="container">

        {/* Header section */}
        <div className="text-center mb-24 md:mb-72">

          <h1 className="lg:text-6xl text-4xl font-bold mb-8 md:pt-12">
          Creative Solutions
          </h1>

         
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-y-[200px] md:gap-x-[40px] place-items-center cursor-pointer ">

          {ProductsData.map((data) => (
            <>
            <div
            
            
              className="rounded-3xl bg-gray-100 dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[400px]"
            >
              {/* image section */}
              <div className="h-[150px] cursor-pointer">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[220px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-2xl "
                />
              </div>
              {/* details section */}
              <div className="p-4 mb-8 text-center">
                {/* star rating */}
                
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:pt-12">{data.title}</h1>
                <p className="dark:text-logo text-gray-500 group-hover:text-white duration-300 text-[16px]  line-clamp-8 text-justify mb-4">
                  {data.description}
                </p>
                
                
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creative;
