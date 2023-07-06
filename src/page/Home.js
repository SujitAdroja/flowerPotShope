import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
function Home() {
  const { pot } = useGlobalContext();
  return (
    <>
      <section className="section section-main">
        <div className="container main">
          <p className="main-heading">handmade ceramics</p>
          <p className="main-content">Painted clay ceeramics made with love</p>
          <Link to={"/shope"} className="link-btn">
            Shope Now
          </Link>
        </div>
      </section>
      <section className=" section section-seller">
        <div className="container seller-flex">
          <h2 className="secondary-heading">Our Bestsellers</h2>
          <div className="seller-content grid grid--4--cols">
            {pot
              .map((item, index) => {
                const { name, price, img } = item;
                return (
                  <div className="item" key={index}>
                    <Link to={`/pot/${item.id}`} className="link-single">
                      <figure className="figure">
                        <img src={img} alt="jar " />
                      </figure>
                      <div>
                        <h2 className="item-heading">{name}</h2>
                        <p className="price">{price}</p>
                      </div>
                    </Link>
                  </div>
                );
              })
              .slice(0, 4)}
          </div>
          <Link to={"/shope"} className="btn">
            BUY NOW
          </Link>
        </div>
      </section>
      <section className="section section-Home-decore">
        <div className="container main">
          <p className="main-heading">home decore items</p>
          <p className="main-content">Find your new favourite pieces.</p>
          <Link to={"/shope"} className="link-btn">
            Shope Now
          </Link>
        </div>
      </section>
      <section className="section section-about">
        <div className="container grid grid--2--cols">
          <div className="about-content">
            <img src="img/about1.avif" alt="image" className="about-img" />
            <h3 className="tertiary-heading about-heading">About Mina</h3>
            <p className="about-description">
              Mina is a brans born out of a passion for ceramics.
            </p>
            <a href="#" className="btn">
              Learn more
            </a>
          </div>
          <div className="about-content">
            <img src="img/about2.webp" alt="image" className="about-img" />
            <h3 className="tertiary-heading about-heading">Sustainability</h3>
            <p className="about-description">
              Mina is a brans born out of a passion for ceramics.
            </p>
            <a href="#" className="btn">
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section className="section social-meadia">
        <div className="container social-container">
          <h2 className="secondary-heading">Follow us on Instagram</h2>
          <div className="social-meadia-content grid grid--3--cols">
            <img src="img/social1.webp" alt="kettel" />
            <img src="img/social2.avif" alt="man" />
            <img src="img/social3.avif" alt="img" />
          </div>
          <a href="@mina_studio" className="social-mina">
            @mina_studio
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
