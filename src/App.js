
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"

import './App.css';
import Login from "./Components/Admin/Login";
import Signup from "./Components/Admin/Signup";
import Softwares from "./Components/Software Coupons/Softwares"
import View from "./Components/Software Coupons/View"

import Internships from "./Components/Blogs/internships"
import Home from "./Home";
import Footer from "./Components/Footer/Footer";
import Disclaimer from "./Components/Company/Disclaimer";
import Udemy from "./Components/More/Udemy";
import AItools from "./Components/More/AItools";
function App() {
  return (
    <div >
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/software-discounts" element={<Softwares />} />
    <Route path="/blogs" element={<Internships />} />
    <Route path="/view/:id/:slug" element={<View />} />
    <Route path="/udemy-coupons-free-courses" element={<Udemy />} />
    <Route path="/ai-tools" element={<AItools />} />
    
    <Route path="/disclaimer" element={<Disclaimer />} />
  </Routes>
<Footer/>
    </div>
  );
}

export default App;
