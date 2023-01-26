import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Prizes from "./components/Prizes";
import Domains from "./components/Domains";
import Sponsors from "./components/Sponsors"
import NewSponsors from "./components/NewSponsors";
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
      <NewSponsors />
      <Footer/>
    </div>
  );
}

export default App;