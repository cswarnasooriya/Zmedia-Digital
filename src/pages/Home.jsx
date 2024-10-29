
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import TopProducts from '../components/TopProducts/TopProducts'
import Subscribe from '../components/Subscribe/Subscribe'
import Banner from '../components/Banner/Banner'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Popup from '../components/Popup/Popup'
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'



const Home = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">

     



    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero handleOrderPopup={handleOrderPopup} />
    <Products />
    <TopProducts handleOrderPopup={handleOrderPopup} />
    <Banner />
    <Subscribe id="#contact" />
    <Testimonials />
    <Footer />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />


    {/* < ScrollToTop smooth top="150" /> */}


      
    </div>
  )
}

export default Home
