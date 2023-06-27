import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function Header() {
  const [isActive, setActive] = useState(false);
  const handleToggleIcon = () => {
    setActive(!isActive);
  };
  const closeMenu = () => {
    setActive(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-wrap">
            <NavLink to="/" className="logo">
              <p>
                Tasty<span>Bites</span>
              </p>
            </NavLink>
            <div className="navbar-icon" onClick={handleToggleIcon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={isActive ? "navbar-left active" : "navbar-left"}>
              <MdClose onClick={closeMenu} className="navbar-close" />
              <div className="navbar-menu">
                <ul>
                  <li>
                    <NavLink to="/" activeClassName="active">
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" activeClassName="active">
                      <span>About</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/recipes" activeClassName="active">
                      <span>Recipes</span>
                    </NavLink>
                  </li>
                  {/* <li>
                  <NavLink to="/contact" activeClassName="active">
                    <span>Contact</span>
                  </NavLink>
                </li> */}
                </ul>
              </div>
              <div className="navbar-social-links">
                <ul>
                  <li>
                    <a href="">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaPinterestP />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
