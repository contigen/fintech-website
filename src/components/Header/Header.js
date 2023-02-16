import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="m-10 lg:mx-20">
      <nav className="flex items-center gap-14 justify-center md:justify-between">
        <a href="/">
          <Logo />
        </a>
        <ul className="md:flex gap-8 text-green-400">
          <li className="text-sm md:text-lg">
            <a href="" className="no-underline">
              Payments
            </a>
          </li>

          <li className="text-sm md:text-lg">
            <a href="" className="no-underline">
              Commerce
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
