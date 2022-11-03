import { useState } from "react";
import NavbarElement from "./NavbarElement";
import tegimLogo1 from "../assets/tegimLogo1.png";
import toggler from "../assets/toggler.png";

function Navbar() {
  const [navbarChange, setChange] = useState(false);
  const scrollChange = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  window.addEventListener("scroll", scrollChange);

  return (
    <>
      <div className="flex h-[64px] px-[20px] justify-between items-center lg:hidden">
        <img src={tegimLogo1} className="h-[24px]"></img>
        <label htmlFor="my-drawer" className=" drawer-button">
          <img src={toggler} alt="menu" />
        </label>
      </div>
      <div
        className={`flex-none hidden lg:flex flex-row ${
          navbarChange ? "w-screen bg-base-100 shadow-md" : ""
        }  gap-[234px] h-[64px] justify-start items-center 
  fixed top-0   z-10 pl-[100px]`}
      >
        <img src={tegimLogo1} className="h-[24px]"></img>
        <ul className="flex flex-row gap-5 items-center">
          <NavbarElement name="Home" link="#" />
          <NavbarElement name="Usługi" link="#" />
          <NavbarElement name="oferty" link="#" />
          <NavbarElement name="kontakt" link="#" />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
