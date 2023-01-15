import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/Navbar";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
