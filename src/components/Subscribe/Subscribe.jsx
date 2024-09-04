
import Banner from "../../assets/logo.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  
  
  
};

const Subscribe = () => {
  return (
    <div
      data-aos="fade-down"
      className="mb-10  rounded-2xl bg-gray-900 dark:bg-gray-500 text-white "
      
      id="contact"
    >
      <div className="container backdrop-blur-[12px] py-12 lg:px-[100px] px-[25px]">
        <div className="space-y-10 max-w-[1350px] mx-auto bg-blue-50 px-12 py-8 rounded-3xl">
          <h1 className="text-3xl !text-center sm:text-left sm:text-4xl font-bold text-orange-500">
            Always Touch with Us
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border-2"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border-2"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Contact Number"
            className="w-full p-3 rounded-lg border-2"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border-2"
          />
          <div className="justify-center flex">
          <button className="text-center mb-4 cursor-pointer bg-logo/70 text-white py-3 hover:bg-logo duration-300 hover:border-red-800 hover:border-2 hover:text-black lg:px-[100px] px-[50px]  rounded-2xl text-lg font-semibold" data-aos="">
              Send
            </button>
          </div>
          

        </div>
    
          <div className="items-center justify-center flex mt-16">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.953260895031!2d79.84723217564674!3d6.912462193087039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594248d28dab%3A0x8bc3ed31183b85e4!2s18%20St%20Michaels%20Rd%2C%20Colombo%2000300!5e1!3m2!1sen!2slk!4v1724929449557!5m2!1sen!2slk" className="w-[1400px] h-[500px] rounded-2xl"></iframe>
            </div>
          
      </div>
      
    </div>
  );
};

export default Subscribe;
