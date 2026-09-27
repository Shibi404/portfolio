import React from "react";
import { Routes, Route} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
