import About1 from "../images/about1.jpg";
import About2 from "../images/about2.jpg";
import About3 from "../images/about3.jpg";
import PassionIcon from "../images/food-tray.png";
import AuthenticIcon from "../images/original.png";
import VarietyIcon from "../images/restaurant.png";

export default function About() {
  return (
    <>
      <section className="section about">
        <div className="container">
          <div className="about-header">
            <div className="about-header-image">
              <img src={About1} />
            </div>
            <div className="about-header-intro">
              <h2 className="heading">About TastyBites</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="image">
                <img src={About2} />
                <img src={About3} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-value p-150">
        <div className="container">
          <div className="value-wrap">
            <h2 className="heading">
              Unleashing the Power of my Online Creations with Core Values
            </h2>
            <div className="value-list">
              <div className="value">
                <img src={PassionIcon} />
                <div className="line"></div>
                <h4>Passion</h4>
                <p>
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
              <div className="value">
                <img src={AuthenticIcon} />
                <div className="line"></div>

                <h4>Authentic</h4>
                <p>
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
              <div className="value">
                <img src={VarietyIcon} />
                <div className="line"></div>
                <h4>Variety</h4>
                <p>
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
              <div className="value">
                <img src={PassionIcon} />
                <div className="line"></div>
                <h4>Passion</h4>
                <p>
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
              <div className="value">
                <img src={AuthenticIcon} />
                <div className="line"></div>

                <h4>Authentic</h4>
                <p>
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
              <div className="value">
                <img src={VarietyIcon} />
                <div className="line"></div>
                <h4>Variety</h4>
                <p>
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
