import "./App.css";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

import HomeHeroSection from "./components/HomeHeroSection";
import Navbar from "./components/Navbar";
import NavbarElement from "./components/NavbarElement";
import ServicesSection from "./components/ServicesSection";
import tegimLogo1 from "./assets/TegimLogo1.png";

function App() {
  return (
    <div className="drawer lg:flex lg:flex-col lg:justify-center lg:items-center">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content max-w-[1440px] shadow-md">
        <Navbar />
        <HomeHeroSection />
        <ServicesSection />
        <ContactSection />
        <FooterSection />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-5 overflow-y-auto w-2/3 bg-base-100 text-base-content flex flex-col gap-6 lg:hidden">
          <li>
            <img src={tegimLogo1} className="h-[24px] mb-[28px]"></img>
          </li>

          <NavbarElement name="Home" link="#" />
          <NavbarElement name="Usługi" link="#" />
          <NavbarElement name="oferty" link="#" />
          <NavbarElement name="kontakt" link="#" />
        </ul>
      </div>
    </div>
  );
}

export default App;
