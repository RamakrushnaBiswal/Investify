import "./App.css";
import HomePage from "./Components/landing/HomePage";
import Signup from "./Components/signup/Signup";
import AboutPage from "./Components/about/AboutPage";
import Product from "./Components/product/Hero";
import { Route, Routes } from "react-router-dom";
import PricePage from "./Components/pricing/Hero";
import SupportPage from "./Components/support/Hero";
function App() {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/pricing" element={<PricePage/>} />
          <Route path="/supports" element={<SupportPage/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>    
    </>
  );
}

export default App;
