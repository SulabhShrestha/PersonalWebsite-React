import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-menu-close.svg";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const navLinks = ["Projects", "Services", "Contact"];

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    console.log("Open drawer: ", openDrawer);
  }, [openDrawer]);

  return (
    <header
      className="flex justify-between items-center py-4 px-4 md:px-12"
      id="Home"
    >
      <h1 className="flex-1 font-bold text-2xl cursor-pointer">TheSulabh</h1>
      <div className="drawer drawer-end inline-block flex-1">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={openDrawer}
          onChange={() => setOpenDrawer(!openDrawer)}
        />

        {/* Hamburger */}
        <nav className="flex justify-end">
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <img src={menuOpen} alt="Open menu" />
            </label>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:block">
            <div className="menu menu-horizontal flex gap-6">
              {navLinks.map((link) => (
                <HashLink
                  smooth
                  to={`/#${link}`}
                  className="text-lg font-medium cursor-pointer"
                >
                  {link}
                </HashLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile  */}
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="menu p-4 w-72 h-full text-left text-black relative bg-gradient-to-br from-green-300 to-green-50 z-40">
            {/* Close drawer btn */}
            <img
              src={menuClose}
              alt="Close menu"
              className="h-8 w-8 ml-auto m-[5%] cursor-pointer btn-ghost btn-square p-2"
              onClick={() => setOpenDrawer(false)}
            />

            {/* drawer links */}
            {navLinks.map((link) => (
              <HashLink
                smooth
                to={`/#${link}`}
                className="pb-4 font-medium mb-2"
                onClick={() => setOpenDrawer(false)}
              >
                {link}
              </HashLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
