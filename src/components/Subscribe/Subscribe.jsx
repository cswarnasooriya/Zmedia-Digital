import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Always Touch with Us
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Name"
            className="w-full p-3"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Email"
            className="w-full p-3"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Contact Number"
            className="w-full p-3"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Message"
            className="w-full p-3"
          />
        </div>
        <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-4 px-8 rounded-2xl text-lg font-bold">
              Send
            </button>
            
          </div> 
          <div className="items-center justify-center flex mt-16">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.953260895031!2d79.84723217564674!3d6.912462193087039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594248d28dab%3A0x8bc3ed31183b85e4!2s18%20St%20Michaels%20Rd%2C%20Colombo%2000300!5e1!3m2!1sen!2slk!4v1724929449557!5m2!1sen!2slk" className="w-[1400px] h-[500px] rounded-2xl"></iframe>
            </div>
          
      </div>
      
    </div>
  );
};

export default Subscribe;
