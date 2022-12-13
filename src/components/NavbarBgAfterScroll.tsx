import { useState } from "react";
import NavbarElement from "./NavbarElement";
import tegimLogo1 from "../assets/tegimLogo1.png";
import toggler from "../assets/toggler.png";

function Navbar() {
  const [navbarChange, setChange] = useState(false);

  const scrollChange = () => {
    if (window.pageYOffset >= 100) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", scrollChange, true);
  console.log(window.scrollY);
  return (
    <div
      className={`flex-none hidden lg:flex   lg:flex-row   gap-[234px]  justify-start items-center 
  fixed top-0 z-5 pl-[100px]  ${
    navbarChange ? "w-screen bg-base-100 shadow-md h-[64px]" : "h-[123px]"
  }`}
    ></div>
  );
}

export default Navbar;
