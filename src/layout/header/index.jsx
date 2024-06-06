import LocaleSwitcher from "@/components/locale-switcher";
import NavLink from "@/components/nav-link";

import React from "react";

const Header = () => {
  return (
    <header>
      <ul className="flex w-full max-w-[1000px] mx-auto">
        <li>
          <NavLink href="/" className="text-lg">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <LocaleSwitcher />
      </ul>
    </header>
  );
};

export default Header;
