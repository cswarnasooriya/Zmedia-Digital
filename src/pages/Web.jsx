import React from "react";
import Img1 from  "../../src/assets/hero/Service_14.png";
import Img2 from  "../../src/assets/hero/a2.png";
import Img3 from  "../../src/assets/hero/a3.png";
import Img4 from  "../../src/assets/hero/a8.png";
import Img5 from  "../../src/assets/hero/a1.png";
import Img6 from  "../../src/assets/hero/Service_15.png";





const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Web Development",
    description:
      "Website Design and Development: Create and build user-friendly, visually appealing websites that are optimized for performance, usability, and conversion.",
  },
  {
    id: 2,
    img: Img2,
    title: "Digital Transformation",
    description:
      "Develop a comprehensive plan to leverage digital technologies to improve business processes, enhance customer experiences, and drive growth.",
  },
  {
    id: 3,
    img: Img3,
    title: "Competitive Analysis",
    description:
      "Analyse competitors to understand their strengths, weaknesses, and market positioning, and use these insights to refine your own strategy.",
  },
  {
    id: 4,
    img: Img4,
    title: "Audience and Personas",
    description:
      "Identify and define target audiences and create detailed personas to tailor marketing efforts and content to meet their needs and preferences.",
  },
  {
    id: 5,
    img: Img5,
    title: "Marketing Strategy",
    description:
      "Design and implement strategic marketing plans to promote products or services effectively and reach target audiences.",
  },
  {
    id: 6,
    img: Img6,
    title: "Content Strategy",
    description:
      "Plan and manage the creation, distribution, and governance of content to align with business objectives and engage audiences",
  },
  


  
];
const Web = () => {
  return (
    <div>
      <div className="container md:pt-24">

        {/* Header section */}
        <div className="text-center mb-24">

         
          <h1 className="lg:text-6xl text-4xl font-bold mb-8">
          Web Development
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
             
                <h1 className="text-2xl font-semibold mb-4">{data.title}</h1>
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

export default Web;
