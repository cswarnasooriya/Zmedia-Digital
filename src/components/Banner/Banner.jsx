
import BannerImg from "../../assets/women/banner_1.png";
import { GrSecure, GrSupport } from "react-icons/gr";
import { GiCentaurHeart, GiClusterBomb, GiFireShrine, GiGroundSprout, GiHelp, GiTeamDowngrade, GiTeamIdea, GiTeamUpgrade, GiThreeFriends } from "react-icons/gi";
import { FaSuperpowers, FaTeamspeak, FaTimeline } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 mb-12 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[600px] h-[350px] w-full mx-auto drop-shadow-[-20px_10px_45px_orange] object-cover rounded-xl"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-4xl sm:text-4xl font-bold text-logo dark:text-white">
            Why Zmedia Digital Solutions (PVT) Ltd Stands Out ?
            </h1>
            <p
              data-aos="fade-up"
              className="text-md text-gray-800 dark:text-gray-400 tracking-wide leading-5 text-[20px]"
            >
              At Zmedia Digital Solutions (PVT) LTD, we distinguish ourselves through a commitment to excellence and a client-centric approach...
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center font-bold gap-4">
                <GiThreeFriends className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Exceptional Team</p>
              </div>
              <div data-aos="fade-up" className="flex items-center font-bold gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Top-Tier Quality Standards</p>
              </div>
              <div data-aos="fade-up" className="flex items-center font-bold gap-4">
                <FaTimeline className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Rapid Development</p>
              </div>
              <div data-aos="fade-up" className="flex items-center font-bold gap-4">
                <GiTeamDowngrade className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Customer-Centric Approach</p>
              </div>
              <div data-aos="fade-up" className="flex items-center font-bold gap-4">
                <GiHelp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>24/7 Online Support</p>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" className="text-[18px] text-justify font-semibold text-blue-900 dark:text-white/70">
              Choose Zmedia Digital Solutions (PVT) LTD for a Partner who combines Expertise, Quality, and Exceptional Service to Drive Your Success...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
