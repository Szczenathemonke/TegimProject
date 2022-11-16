import "./App.css";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

import HomeHeroSection from "./components/HomeHeroSection";
import "./serviceStyle.css";
import NavbarElement from "./components/NavbarElement";
import ServicesSection from "./components/ServicesSection";
import tegimLogo1 from "./assets/tegimLogo1.png";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [navbarChange, setChange] = useState(false);

  const scrollChange = () => {
    if (window.pageYOffset >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", scrollChange, true);
  console.log(window.scrollY);
  return (
    <div className="App ">
      <div className="drawer lg:justify-center lg:items-center h-auto overflow-x-hidden noScroll">
        <input id="offCanvas" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  overflow-x-hidden noScroll">
          <Navbar />
          <HomeHeroSection />
          <ServicesSection />
          <ContactSection />
          <FooterSection />
        </div>
        <div className="drawer-side shadow-md">
          <label htmlFor="offCanvas" className="drawer-overlay"></label>
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
    </div>
  );
}

export default App;

// routing i scrollsnap - navbar kieruje do odpowiedniej sekcji
// polityka prywatnosci i regulamin - czy to ma pozostać nie ruszone czy zrobić jakiś modal który się wyświetla z polityką/regulaminem
// czy wyłączyć przzycisk oferty (domyślam się, że tak, ale zostawione są na razie żebyś mógł zobaczyć jak to wygląda obecnie)

// uwagi do layoutu
// uwagi do typografii

// czy logo na navbarze nie jest za małe
// czy układ stopki jest odpowiedni
// karty w sekcji Usługi - czy są poprawnie rozłożone - ustawiłem, że przy zmianie szerokości ekranu dzielą się na rzędy - myśle że to lepsze niż ich kurczenenie

// navbar pointer - ma taki efekt który sprawia wrażenie mignięcia przy pierwszym wywołaniu
// - starałem się to usunąć, ale musiałbym nad tym jeszcze posiedzieć - czy jest sens czy tak jest dobrze
