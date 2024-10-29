import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ReactWhatsapp from "react-whatsapp";


const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <h1 className="font-bold">Hire Now?</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl font-bold cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
                
              </div>

              <p className="text-gray-700 text-justify">
                 We are happy to meet your all requirements. So Please connect with Us Now! <br/>
                 <br/>

                
              </p>
              {/* form section */}
              {/* <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-full rounded-full border border-gray-700 dark:border-gray-400 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-700 dark:border-gray-400 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full rounded-full border border-gray-700 dark:border-gray-400 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center pb-4">
                  <button className="bg-gradient-to-r from-logo to-primary hover:scale-110 duration-200 text-white py-2 font-bold px-8 rounded-full">
                    Hire Now
                  </button>
                </div>
              </div> */}

              <div className="flex items-center justify-center">
              <ReactWhatsapp
                number="+94 768623225"
                message="Hello! I'm interested in learning more about your services."
                className="bg-gradient-to-r from-logo/70  to-secondary transition-all duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3 group"
              >Connect Now
              </ReactWhatsapp>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
