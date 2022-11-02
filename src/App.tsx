import "./App.css";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

import HomeHeroSection from "./components/HomeHeroSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[1440px] shadow-md">
        <HomeHeroSection />
        <ServicesSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;

// left: 90.38%;
// right: -25.38%;
// top: 12.81%;
// bottom: 78.38%;

// "absolute top-[-49px] right-0"
