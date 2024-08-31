import Logo from "../assets/img/logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import { useEffect, useState } from "react";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <header
      className={`text-white fixed left-0 w-full py-8 z-10 transition-all duration-300 ${
        bg ? "bg-primary py-4 lg:py-6" : "bg-none"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img className="h-6 lg:h-8" src={Logo} alt="" />
        </a>

        {/* menu btn */}
        <button className="text-2xl cursor-pointer md:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? <CgClose /> : <CgMenuRight />}
        </button>

        {/* nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-12">
            {navigation.map((nav, index) => {
              const { name, href } = nav;

              return (
                <li key={index}>
                  <a className="hover:font-medium transition-all" href={href}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* nav mobile */}
        <div
          className={`md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all ${
            mobileNav ? "left-0" : "-left-full"
          }`}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
