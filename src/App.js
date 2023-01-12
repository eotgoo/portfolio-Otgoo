import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/Navbar";
import About from "./components/pages/About";
import Hero from "./components/pages/Hero";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <About />
      <Hero />
    </div>
  );
}

export default App;
