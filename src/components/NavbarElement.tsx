import { useState } from "react";

function NavbarElement(navbarProps: { name: string }) {
  const [isFocused, setFocus] = useState(false);
  return (
    <li className="flex flex-row gap-2 ">
      {isFocused ? (
        <img src="/src/assets/navbar-pointer.svg" alt="" />
      ) : (
        <div className="w-[12px]"></div>
      )}
      <a
        href="#"
        className="text-base text-[#909090] hover:text-[#ffffff] focus:text-[#ffffff] uppercase tracking-widest"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        {navbarProps.name}
      </a>
    </li>
  );
}

export default NavbarElement;
