import ContactImg from "../images/contact.jpg";
export default function Footer() {
  return (
    <>
      <section className="section footer">
        <div className="container">
          <div className="contact">
            <div className="contact-image">
              <img src={ContactImg} alt="Contact" />
            </div>
            <div className="contact-content">
              <div className="sub-heading">Get Connected</div>
              <h2 className="heading">Over 120+ peoples tried our recipes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rhoncus mi ut dignis bibendum Orci various. Adipiscing elitat
                Mauris honcus mythy.
              </p>
              <div class="btn btn-primary">
                <a href="mailto:your@email.com?subject=Subject ">
                  <span class="mail" data-status="Click to Copy! ">
                    tastybites@gmail.com
                  </span>
                </a>
              </div>
              {/* <div className="social-links">
                <ul>
                  <li>
                    <a href="">{facebook}</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <div className="container">
          <div className="logo">TastyBites</div>
          <div className="copy-right">
            © 2023 All rights reserved. Designed &amp; Coded by Manjushree
            Ranjikar
          </div>
        </div>
      </section>
    </>
  );
}
