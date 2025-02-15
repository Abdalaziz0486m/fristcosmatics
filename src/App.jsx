import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurProducts from "./Components/OurProducts/OurProducts";
import HowTo from "./Components/HowTo/HowTo";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Frequent/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourproducts" element={<OurProducts />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
