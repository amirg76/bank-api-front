import { useRef, useContext, useState } from "react";

import { myContext } from "../Context/mycontext.js";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { navToggle, setNavToggle, login, setLogin } = useContext(myContext);

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };
  const showLinks = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };
  const showLogin = () => {
    setLogin(true);
  };

  return (
    <nav className="header-continer">
      <img className="logo" src="/assets/img/logo.png" alt=""></img>

      <ul ref={navRef}>
        <li>
          <Link to="/" onClick={showLinks}>
            ראשי
          </Link>
        </li>
        <li>
          <Link to="/market" onClick={showLinks}>
            מדדים
          </Link>
        </li>
        <li>
          <Link to="/articals" onClick={showLinks}>
            כתבות
          </Link>
        </li>
        <li>
          <Link to="/contect" onClick={showLinks}>
            צור קשר
          </Link>
        </li>
        <li>
          {/* <Link to="/login" onClick={showLogin}> */}
          <button onClick={showLogin} className="login-button">
            כניסה לחשבון
          </button>
          {/* </Link> */}
        </li>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </ul>

      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
    </nav>
  );
};

export default Header;

// <!-- NAV BAR -->

//     <nav class="navbar bg-dark navbar-dark navbar-expand-lg">
//       <div class="container">
//         <img class="logo" src="img/logo.png" alt="" />
//         <a class="navbar-brand" href="">דיגיבנק</a>

//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#blue"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div id="blue" class="collapse navbar-collapse">
//           <ul class="navbar-nav ml-auto">
//             <li class="nav-item"><a class="nav-link" href="">Home</a></li>
//             <li class="nav-item"><a class="nav-link" href="">About</a></li>
//             <li class="nav-item"><a class="nav-link" href="">Servics</a></li>
//             <li class="nav-item"><a class="nav-link" href="">Contact Us</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     <!-- END NAV BAR -->
