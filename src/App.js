import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <HeroSection isMenuShown={isMenuShown} />
      <AboutSection />
      <Timeline />
      <Footer/>
      <NavBar />
    </div>
  );
}

export default App;