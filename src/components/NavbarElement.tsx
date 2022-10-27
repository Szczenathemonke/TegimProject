import { useState } from "react";
import "../serviceStyle.css";

function NavbarElement(navbarProps: { name: string; link: string }) {
  const [isFocused, setFocus] = useState(false);
  return (
    <li tabIndex={-1} className={`flex flex-row items-center gap-2  `}>
      {isFocused ? (
        <img src="/src/assets/navbar-pointer.svg" alt="" />
      ) : (
        <div className="w-[12px]"></div>
      )}
      <a
        href={navbarProps.link}
        className="text-base text-[#909090] hover:text-[#ffffff] focus:text-[#ffffff] uppercase tracking-widest "
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        {navbarProps.name}
      </a>
    </li>
  );
}

export default NavbarElement;
