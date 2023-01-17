import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/Navbar";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";
import Skills from "./components/pages/Skills";
import Eductaion from "./components/pages/education";
import Projects from "./components/pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Eductaion />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* <Hero />
      <About />
      <Skills /> */}
    </div>
  );
}

export default App;
