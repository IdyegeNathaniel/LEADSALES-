import About from "./About";
import Agent from "./Agent";
import "./App.css";
import Footer from "./Footer";
import Contact from "./Contact";
import Home from "./Home";
import Listing from "./Listing";
import News from "./News";
import Service from "./Service";
import System from "./System";
import Testimonial from "./Testimonial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Listing />
      <Agent />
      <System />
      <About />
      <Service />
      <Testimonial />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
