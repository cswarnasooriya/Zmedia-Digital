import React from "react";
import Img1 from "../../assets/shirt/Service_14.png";
import Img2 from "../../assets/shirt/ServiceNN_21.png";
import Img3 from "../../assets/shirt/Service_01.png";
import Img4 from "../../assets/shirt/audience_1.png";
import Img5 from "../../assets/shirt/marketing.png";
import Img6 from "../../assets/shirt/content.png";
import Img7 from "../../assets/shirt/campaign.png";
import Img8 from "../../assets/shirt/Service_03.png";
import Img9 from "../../assets/shirt/Service_04.png";
import Img10 from "../../assets/shirt/Service_20.png";
import Img11 from "../../assets/shirt/interface.png";
import Img12 from "../../assets/shirt/animation.png";
import Img13 from "../../assets/shirt/photography_1.png";
import Img14 from "../../assets/shirt/Service_17.png";
import Img15 from "../../assets/shirt/Service.png";
import Img16 from "../../assets/shirt/advertising.png";
import Img17 from "../../assets/shirt/Service_6.png";
import Img18 from "../../assets/shirt/Service_15.png";

import { FaStar } from "react-icons/fa";

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
    title: "Marketing Stratergy",
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
  {
    id: 7,
    img: Img7,
    title: "Brand Campaing",
    description:
      "Develop and execute marketing campaigns that communicate your brand message and engage your target audience effectively.",
  },
  {
    id: 8,
    img: Img8,
    title: "Collateral development",
    description:
      "Create branded materials such as brochures, business cards, and flyers that support marketing efforts and reinforce brand identity.",
  },
  {
    id: 9,
    img: Img9,
    title: "Brand Story",
    description:
      "Craft a compelling narrative about your brand's origin, mission, and journey to build emotional connections with your audience",
  },
  {
    id: 10,
    img: Img10,
    title: "Add Creation",
    description:
      "Design engaging and visually appealing advertisements that capture attention and drive action across various platforms.",
  },
  {
    id: 11,
    img: Img11,
    title: "Interface Designing",
    description:
      "Provide expert guidance on design and visual aesthetics to ensure creative projects align with brand identity and goals.",
  },
  {
    id: 12,
    img: Img12,
    title: "Video And Animation",
    description:
      "Produce high-quality video content and animations to convey messages, tell stories, and enhance audience engagement.",
  },
  {
    id: 13,
    img: Img13,
    title: "Photography",
    description:
      "Capture high-quality images that reflect the brand’s identity and support marketing and promotional efforts.",
  },
  {
    id: 14,
    img: Img14,
    title: "Artificial Interlligence",
    description:
      "Implement artificial intelligence technologies to improve user experience, personalize interactions, and optimize performance.",
  },
  {
    id: 15,
    img: Img15,
    title: "Social Media Strategy",
    description:
      "Develop and execute strategies to build and manage a strong social media presence, engage with followers, and achieve business objectives",
  },
  {
    id: 16,
    img: Img16,
    title: "Social Media Advertising",
    description:
      "Create and manage paid social media campaigns to reach target audiences, increase brand awareness, and drive conversions.",
  },
  {
    id: 17,
    img: Img17,
    title: "Email and CRM",
    description:
      "Develop and manage email and SMS marketing campaigns, and leverage customer relationship management (CRM) systems to nurture leads, retain customers, and drive sales.",
  },
  {
    id: 18,
    img: Img18,
    title: "Search Engine Optimization",
    description:
      "Enhance website content to ensure it ranks well in search engines and meets the needs of users.",
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

          <p data-aos="fade-up" className="text-xl text-gray-700  dark:text-gray-400 leading-7  text-[21px] pb-12 justify-center font-semibold">
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
                <div className="w-full flex items-center justify-center gap-2 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-2xl font-semibold mb-4">{data.title}</h1>
                <p className="dark:text-logo text-gray-500 group-hover:text-white duration-300 text-[16px] text-center line-clamp-2 mb-4">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-logo"
                  onClick={handleOrderPopup}
                >
                  Hire Now
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
