import React from "react";
import Img1 from  "../../src/assets/hero/Service_15.png";
import Img2 from  "../../src/assets/hero/s2.png";
import Img3 from  "../../src/assets/hero/a8.png";




const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "On-Site Technical SEO",
    description:
      "Optimize website structure, code, and technical elements to improve search engine visibility and performance.",
  },
  {
    id: 2,
    img: Img2,
    title: "Content SEO",
    description:
      "Enhance website content to ensure it ranks well in search engines and meets the needs of users.",
  },
  {
    id: 3,
    img: Img3,
    title: "Mobile SEO ",
    description:
      "Optimize websites for mobile devices to ensure a seamless user experience and better search engine rankings on mobile searches.lan and execute social media campaigns that align with brand goals and engage audiences through creative and compelling content",
  },
 


  
];
const SEO = () => {
  return (
    <div>
      <div className="container md:pt-16">

        {/* Header section */}
        <div className="text-center mb-24">

          
          <h1 className="lg:text-6xl text-4xl font-bold mb-8 md:mb-48">
          SEO
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
             
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">{data.title}</h1>
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

export default SEO;
