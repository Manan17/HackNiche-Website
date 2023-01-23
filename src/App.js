import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <HeroSection isMenuShown={isMenuShown} />
      <AboutSection />
    </div>
  );
}

export default App;
