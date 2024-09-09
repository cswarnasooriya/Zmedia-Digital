import Logo from "../../assets/logo.png";
import { IoMdContact, IoMdSearch } from "react-icons/io";
import { FaCaretDown,  } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Services",
    link: "#product",
  },
  {
    id: 3,
    name: "Reviews",
    link: "#reviews",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "#contact",
  },
 
];

const DropdownLinks = [
  {
    id: 1,
    name: "Web Development",
    link: "#topproduct",
  },
  {
    id: 2,
    name: "Digital Strategy",
    link: "#topproduct",
  },
  {
    id: 3,
    name: "Competitive Analysis",
    link: "#topproduct",
  },
  {
    id: 1,
    name: "SEO",
    link: "#topproduct",
  },
  {
    id: 2,
    name: "Marketing Strategy",
    link: "#topproduct",
  },
  {
    id: 3,
    name: "Content Strategy",
    link: "#topproduct",
  },
  {
    id: 1,
    name: "Brand Campaing",
    link: "#topproduct",
  },
  {
    id: 2,
    name: "Brand Story",
    link: "#topproduct",
  },
  {
    id: 3,
    name: "Add Creation",
    link: "#topproduct",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [header,setHeader]=useState(false);
  const scrollHeader = ()=>{
    if (window.scrollY>=20){
      setHeader(true)
    }
    else {
      setHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',scrollHeader)

    return()=>{
      window.addEventListener('scroll',scrollHeader)
    }
  },[]
)

  return (
    <div className={`${
      header
        ? "fixed top-0 left-0 w-full z-[50] bg-white shadow-md dark:bg-gray-800 dark:text-white transition-all duration-300"
        : "relative"
    }`}> 
      <div className="shadow-md bg-white  dark:bg-gray-800 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="py-1 bg-gray-800 dark:bg-primary/40">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-4xl sm:text-5xl flex gap-2">
              <img src={Logo} alt="Logo" width="210px" />
              
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search More.."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-logo dark:border-gray-100 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-logo/70 to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-100 font-semibold">
                Hire Now
              </span>
              <IoMdContact className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-16 font-bold text-[19px]  hover:text-logo duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center font-bold text-[18px] gap-[8px] py-5 hover:text-logo duration-200">
              Trending Services
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[250px] rounded-lg bg-blue-50  p-4 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full font-bold rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
