import { useState } from "react";
import "../serviceStyle.css";
import navbarPointer from "../assets/navbar-pointer.svg";

function NavbarElement(navbarProps: { name: string; link: string }) {
  const [isFocused, setFocus] = useState(false);
  return (
    <li tabIndex={-1} className={`flex flex-row items-center gap-2  `}>
      {isFocused ? (
        <img src={navbarPointer} alt="" />
      ) : (
        <div className="w-[12px]"></div>
      )}
      <a
        href="/"
        className="text-base text-[#909090] hover:text-[#ffffff] focus:text-[#ffffff] uppercase tracking-widest "
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onClick={(e) => {
          let navElement = document.getElementById(`${navbarProps.link}`);
          e.preventDefault();
          navElement &&
            navElement.scrollIntoView({ behavior: "smooth", block: "start" });
          let offCanvas = document.getElementById("offCanvas");

          if (window.innerWidth < 1024) {
            offCanvas?.click();
          }
        }}
      >
        {navbarProps.name}
      </a>
    </li>
  );
}

export default NavbarElement;
