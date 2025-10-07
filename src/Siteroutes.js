import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Video from "./Video";
import Recentvisa from "./Recentvisa";
import Studyabroad from "./Studyabroad";
import Ludhianalocation from "./Ludhianalocation";
import Canadapage from "./Canadapage";
import Australia from "./Australia";
import Newzealandpage from "./Newzealandpage";
import UKpage from "./UKpage";
import USApage from "./USApage";
import Contactus from "./Contactus";
import Appointmentform from "./Appointmentform";
import Blogspage from "./Blogspage";
import Blogdetail from "./Blogdetail";
import Categorypage from "./Categorypage";
import Mohalilocation from "./Mohalilocation";
import Socialfeeds from "./Socialfeeds";
import Overseas from "./Overseas";
import Canadavisaludh from "./Canadavisaludh";
import Ausvisaludh from "./Ausvisaludh";
import Usaludhiana from "./Usaludhiana";
import Canadaludh from "./Canadaludh";
import Nzmoh from "./Nzmoh";
import Ukludh from "./Ukludh";

// Add more pages later like About, Contact etc.
const Siteroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/videos" element={<Video/>}/>
      <Route path="/recent-visa" element={<Recentvisa/>}/>
      <Route path="/study-abroad" element={<Studyabroad/>}/>
      <Route path='/immigration-consultants-in-ludhiana' element={<Ludhianalocation/>}/>
      <Route path="/immigration-consultants-in-mohali" element={<Mohalilocation/>}/>
      <Route path="/study-abroad/canada-study-visa-consultants" element={<Canadapage/>}/>
      <Route path="/study-abroad/australia-study-visa-consultants" element={<Australia/>}/>
       <Route path="/study-abroad/newzealand-study-visa-consultants" element={<Newzealandpage/>}/>
            <Route path="/study-abroad/uk-study-visa-consultants" element={<UKpage/>}/>
            <Route path="/study-abroad/usa-study-visa-consultants" element={<USApage/>}/>
            <Route path="/contact-us" element={<Contactus/>}/>
            <Route path="/appointment" element={<Appointmentform/>}/>
            <Route path="/our-blogs" element={<Blogspage/>}/>
            <Route path="/blog/:slug" element={<Blogdetail/>}/>
            <Route path="/category/:category" element={<Categorypage />} />
            <Route path="/social-feeds" element={<Socialfeeds/>}/>
            <Route path="/overseas-manpower-solutions" element={<Overseas/>}/>
            <Route path="/canada-study-visa-consultants-in-ludhiana" element={<Canadavisaludh/>}/>
            <Route path="/australia-study-visa-consultants-in-ludhiana" element={<Ausvisaludh/>}/>
            <Route path="/usa-study-visa-consultants-in-ludhiana" element={<Usaludhiana/>}/>
            <Route path="/canada-study-visa-consultants-in-mohali" element={<Canadaludh/>}/>
            <Route path="/new-zealand-study-visa-consultants-in-mohali" element={<Nzmoh/>}/>
            <Route path="/uk-study-visa-consultants-in-ludhiana" element={<Ukludh/>}/>

    </Routes>
  );
};

export default Siteroutes;
