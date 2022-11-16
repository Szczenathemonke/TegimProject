import { useState } from "react";
import NavbarElement from "./NavbarElement";
import tegimLogo1 from "../assets/tegimLogo1.png";
import toggler from "../assets/toggler.png";

function Navbar() {
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
    <>
      <div className="flex h-[64px] px-[20px] justify-between items-center lg:hidden bg-base-100 w-screen sticky top-0 z-10">
        <img src={tegimLogo1} className="h-[24px]"></img>
        <label htmlFor="my-drawer" className=" drawer-button">
          <img src={toggler} alt="menu" />
        </label>
      </div>
      <div
        className={`flex-none hidden lg:flex lg:flex-row    gap-[234px] h-[64px] justify-start items-center 
  sticky top-0 z-10 pl-[100px] 2xl:pl-[550px] ${
    navbarChange ? "w-screen bg-base-100 shadow-md" : ""
  }`}
      >
        <img src={tegimLogo1} className="h-[24px]"></img>
        <ul className="flex flex-row gap-5 items-center">
          <NavbarElement name="Home" link="home" />
          <NavbarElement name="Usługi" link="services" />
          <NavbarElement name="oferty" link="#" />
          <NavbarElement name="kontakt" link="contact" />
        </ul>
      </div>
    </>
  );
}

export default Navbar;

// ${
//   navbarChange ? "w-screen bg-base-100 shadow-md" : ""
// }
