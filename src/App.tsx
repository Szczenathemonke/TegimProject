import "./App.css";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

import HomeHeroSection from "./components/HomeHeroSection";
import "./serviceStyle.css";
import NavbarElement from "./components/NavbarElement";
import ServicesSection from "./components/ServicesSection";
import tegimLogo1 from "./assets/tegimLogo1.png";
import Navbar from "./components/Navbar";
import NavbarBgAfterScroll from "./components/NavbarBgAfterScroll";

function App() {
  return (
    <div className="App ">
      <NavbarBgAfterScroll />
      <div className="drawer lg:justify-center lg:items-center h-auto overflow-x-hidden noScroll">
        <input id="offCanvas" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-x-hidden noScroll ">
          <Navbar />
          <HomeHeroSection />
          <ServicesSection />
          <ContactSection />
        </div>
        <div className="drawer-side  h-full ">
          <label htmlFor="offCanvas" className="drawer-overlay  "></label>
          <ul className="p-5 overflow-y-auto w-2/3 bg-base-100 text-base-content flex flex-col gap-6 lg:hidden">
            <li>
              <img src={tegimLogo1} className="h-[24px] mb-[28px]"></img>
            </li>

            <NavbarElement name="Home" link="home" />
            <NavbarElement name="Usługi" link="services" />
            <NavbarElement name="oferty" link="#" />
            <NavbarElement name="kontakt" link="contact" />
          </ul>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
