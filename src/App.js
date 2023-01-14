import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/Navbar";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Hero />
      <About />
    </div>
  );
}

export default App;
