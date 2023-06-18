import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Header() {
  const handleToggleIcon = () => {};

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
            <div className="navbar-icon" onChange={handleToggleIcon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="navbar-left">
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
