import { useState } from "react";
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import DevAPI from "./components/DevAPI";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <NavBar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
      <DevAPI />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
