import React from "react";
import Img1 from  "../../src/assets/hero/a1.png";
import Img2 from  "../../src/assets/hero/a2.png";
import Img3 from  "../../src/assets/hero/a3.png";
import Img4 from  "../../src/assets/hero/a4.png";
import Img5 from  "../../src/assets/hero/a5.png";
import Img6 from  "../../src/assets/hero/a8.png";




const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Naming",
    description:
      "Develop a unique and memorable name for your brand that reflects your business values and resonates with your target audience.",
  },
  {
    id: 2,
    img: Img2,
    title: "Identity",
    description:
      "Create a cohesive brand identity, including visual elements like logos, color schemes, and typography, to establish a recognizable and consistent brand presence.",
  },
  {
    id: 3,
    img: Img3,
    title: "Brand Story",
    description:
      ": Craft a compelling narrative about your brand’s origin, mission, and journey to build emotional connections with your audience.",
  },
  {
    id: 4,
    img: Img4,
    title: "Icon Systems Design",
    description:
      "Identify and define target audiences and create detailed personas to tailor marketing efforts and content to meet their needs and preferences.",
  },
  {
    id: 5,
    img: Img5,
    title: "Brand Campaigns",
    description:
      "Develop and execute marketing campaigns that communicate your brand message and engage your target audience effectively.",
  },
  {
    id: 6,
    img: Img6,
    title: "Collatera",
    description:
      "Create branded materials such as brochures, business cards, and flyers that support marketing efforts and reinforce brand identity.",
  },
 

  
];
const Brands = () => {
  return (
    <div>
      <div className="container md:mb-14">

        {/* Header section */}
        <div className="text-center mb-24 md:mb-48">

          
          <h1 className="lg:text-6xl text-4xl font-bold mb-8 md:pt-8">
          Brands Automation
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
                  className="max-w-[220px] md:max-w-[260px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 drop-shadow-2xl "
                />
              </div>
              {/* details section */}
              <div className="p-4 md:pt-16 mb-8 text-center">
               
                <h1 className="text-2xl md:text-3xl font-semibold mb-8">{data.title}</h1>
                <p className="dark:text-logo text-gray-500 group-hover:text-white duration-300 text-[16px]  line-clamp-4 text-justify mb-4">
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

export default Brands;
