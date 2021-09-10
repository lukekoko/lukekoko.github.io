import About from "./Components/About";
import Academic from "./Components/Academic";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Professional from "./Components/Professional";
import Research from "./Components/Research";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Capabilities from "./Components/Capabilities";
import Leadership from "./Components/Leadership";
import Goals from "./Components/Goals";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Academic />
      <Capabilities />
      <Professional />
      <Research />
      <Leadership />
      <Goals />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
