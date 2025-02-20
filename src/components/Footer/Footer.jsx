import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer_1.jpg";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Services",
    link: "#topproduct",
  },
  {
    title: "Reviews",
    link: "#reviews",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const FooterLinks2 = [
  {
    title: "FAQ",
    link: "#",
  },
  {
    title: "About",
    link: "#topproduct",
  },
  {
    title: "Projects",
    link: "#reviews",
  },
  {
    title: "Hire",
    link: "#contact",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-2">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-2 flex items-center  text-orange-500 pl-8">
              <img src={footerLogo} alt="" className="  max-w-[120px]" />
              
            </h1>
            <p className="font-mono text-[15px]">
            Emerging | Trendy | Innovative | Inspiring | Quality <br/> <br/>
            Zmedia is to deliver tailored digital marketing solutions that accelerate business success with trendy world.
            </p>
            <br/>
            <p className="text-logo">
            All Right Reserved by  King Holdings Capital (PVT) Ltd.<br/> @ 2025
          
            </p>
            
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Easy Connect
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-logo hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Easy Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-logo hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Easy Touch
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks2.map((link) => (
                    <li
                      className="cursor-pointer hover:text-logo hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-14 mt-6">
                
                <a href="https://www.facebook.com/profile.php?id=61564593424240">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="http://Wa.me/+94768623225">
                  <FaWhatsapp className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>No 18, St Micheal Street, Colombo 03.</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaEnvelope />
                  <p>info@zmediadigital.com</p>
                </div>
                
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+94 76 9026435</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
