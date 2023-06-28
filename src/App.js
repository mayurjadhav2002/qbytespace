
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"

import './App.css';
import Login from "./Components/Admin/Login";
import Signup from "./Components/Admin/Signup";
import Softwares from "./Components/Software Coupons/Softwares"
import Internships from "./Components/Blogs/internships"
import Home from "./Home";
import Footer from "./Components/Footer/Footer";
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

  </Routes>
<Footer/>
    </div>
  );
}

export default App;
