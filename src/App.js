import { useEffect } from "react";
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
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/propertydetails/:id" element />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
