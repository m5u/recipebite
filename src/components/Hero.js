import HeroImg from "../images/hero-image1.png";
export default function Hero() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <div className="hero-wrap">
            <div className="hero-content">
              <h1> Lets Unleash Your Inner Chef & Start Cooking</h1>
              <p>
                Discover a world of culinary possibilities and indulge in
                delicious creations. Join us now and let your culinary journey
                begin!
              </p>
            </div>
            {/* <div className="hero-img">
              <img src={HeroImg} alt="Banner" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
