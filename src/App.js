import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Prizes from "./components/Prizes";
import Domains from "./components/Domains";
import Sponsors from "./components/Sponsors"
function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <NavBar />
      <HeroSection isMenuShown={isMenuShown} />
      <AboutSection />
      <Timeline />
      <Prizes />
      <Domains />
      <Sponsors />
      <Footer/>
    </div>
  );
}

export default App;