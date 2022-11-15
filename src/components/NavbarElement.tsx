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
          let navelement = document.getElementById(`${navbarProps.link}`);
          e.preventDefault();
          navelement &&
            navelement.scrollIntoView({ behavior: "smooth", block: "center" });

          // if (closeOffCanvas?.checked){
          //   closeOffCanvas.checked = false;
          // }
        }}
      >
        {navbarProps.name}
      </a>
    </li>
  );
}

export default NavbarElement;
