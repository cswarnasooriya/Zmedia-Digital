

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Strategy from "./pages/Strategy";
import Brands from "./pages/Brands";
import Creative from "./pages/Creative";
import AI from "./pages/AI";
import Media from "./pages/Media";
import Content from "./pages/Content";
import SEO from "./pages/SEO";
import Email from "./pages/Email";
import Web from "./pages/Web";
import Paid from "./pages/Paid";

const App = () => {
  
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/content" element={<Content/>} />
        <Route path="/media" element={<Media />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/email" element={<Email />} />
        <Route path="/web" element={<Web />} />
        <Route path="/paid" element={<Paid />} />
        
        
      </Routes>
    </BrowserRouter>

     







    

    </div>
    
  );
};

export default App;
