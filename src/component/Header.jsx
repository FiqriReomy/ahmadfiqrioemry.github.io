import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [Sticky, setSticky] = useState(false);
  const [menuToggle, setToggle] = useState(false);
  const [Icon, setIcon] = useState(false);

  //   sticky navigation bar when windows on scroll down function
  useEffect(() => {
    const header = document.querySelector(".header");
    const handleScroll = () => {
      setSticky(window.pageYOffset > header.offsetTop);
      setToggle(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  //   active navigation bar button function
  useEffect(() => {
    const menubox = document.getElementById("menubox");
    const btns = menubox.getElementsByClassName("menulist");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  });
  // darkmode function active when clicked
  const darkMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    setIcon(!Icon);
  };
  // overlay menu open when clicked
  const openMenu = () => {
    setToggle(!menuToggle);
  };
  // overlay menu close when switching pages
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      {/* <!-- scrolling to top button start --> */}
      <a id="scrollBtn" className="w-10 h-10 fixed hidden justify-center items-center bg-blue-500 bottom-10 right-5 rounded-full text-[25px] hover:animate-pulse" href="#home">
        <ion-icon name="arrow-up-outline"></ion-icon>
      </a>
      {/* <!-- scrolling to top button end --> */}

      {/* <!-- Header section area start --> */}
      <header className={`${Sticky ? " header py-2 z-10 dark:bg-[#0f172a] dark:border-b-white sticky " : "header py-2 z-10 dark:bg-[#0f172a] dark:border-b-white "}`}>
        <nav className="px-0 md:px-5 mx-auto max-w-screen-lg">
          <div className="menu flex justify-between items-center px-5 md:px-0">
            <div className="names flex justify-center w-full md:w-auto font-semibold text-blue-500 tracking-[3px]">
              <h2>FIQRI OEMRY.</h2>
            </div>
            <div className="menubars flex justify-between">
              <div id="menubox" className="menubox hidden md:flex justify-between items-center dark:text-white text-[15px]">
                <div className="menulist">
                  <Link className="py-2 px-5 active" href="#home" to="/">
                    Home
                  </Link>
                </div>
                <div className="menulist">
                  <Link className="py-2 px-5" href="#portfolio" to="/portfolio">
                    Portfolio
                  </Link>
                </div>
                <div className="menulist">
                  <Link className="py-2 px-5" href="#contact" to="/contact">
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="menubtn flex items-center">
                <button onClick={() => darkMode()} className="darkmode dark:text-white md:flex items-center hidden text-[25px]">
                  <ion-icon className="darkicon" name={`${Icon ? "sunny-outline" : "moon-outline"}`}></ion-icon>
                </button>
                <button onClick={() => openMenu()} className="md:hidden flex items-center text-[25px] dark:text-white">
                  <ion-icon name="grid-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* navigation bar overlay menu when media 768px start ... */}
        <div className={`${menuToggle ? "overlaymenu dark:bg-[#0f172a] z-10 block md:hidden " : "overlaymenu dark:bg-[#0f172a]  hidden md:hidden "}`}>
          <div className="py-5 px-10 flex flex-wrap dark:text-white">
            <button onClick={() => closeMenu()} className="w-1/2 p-2  hover:text-blue-500">
              <Link to="/">
                <div className="text-[35px]">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
                <h2>HOME</h2>
              </Link>
            </button>
            <button onClick={() => closeMenu()} className="w-1/2 p-2 hover:text-blue-500 ">
              <Link to="/portfolio">
                <div className="text-[35px]">
                  <ion-icon name="document-text-outline"></ion-icon>
                </div>
                <h2>PORTFOLIO</h2>
              </Link>
            </button>
            <button onClick={() => closeMenu()} className="w-1/2 p-2  hover:text-blue-500">
              <Link to="/contact">
                <div className="text-[35px]">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <h2>CONTACT</h2>
              </Link>
            </button>
            <button onClick={() => darkMode()} className="w-1/2 p-2  hover:text-blue-500 ">
              <Link to="/">
                <div className="text-[35px]">
                  <ion-icon name={`${Icon ? "sunny-outline" : "moon-outline"}`}></ion-icon>
                </div>
                <h2>MODE</h2>
              </Link>
            </button>
          </div>
          {/* navigation bar overlay menu when media 768px end ... */}
        </div>
      </header>
      {/* <!-- Header section area emd --> */}
    </>
  );
};

export default Header;
