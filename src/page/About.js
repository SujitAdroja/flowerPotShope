import React from "react";

function About() {
  return (
    <>
      <section className="section section-sustainibility">
        <div className="container">
          <p>Sustainibility</p>
        </div>
      </section>

      <section className="section section-slogan">
        <div className="container">
          <p>
            We care about our planet.For this reason,Mina aims to be operating
            sustainably and ethically at every level.
          </p>
        </div>
      </section>

      <section className="section section-about">
        <div className="about grid grid--2--cols">
          <img
            src="/img/working ethos.avif"
            alt="image"
            className="about-img width"
          />
          <div className="content color">
            <p className="about-heading">Working Ethos</p>
            <p className="about-content-para">
              For Alex and Laura, planning ahead is a central component of
              sustainable design. Work begins with sketches of ideas before any
              clay is modeled. Fully conceptualizing and refining each design
              beforehand helps us to reduce material waste.
            </p>
            <p className="about-description">
              We strive to work collaborativelu at everu stage. Our team wfforts
              minimize energy ysage in the studio
            </p>
          </div>
          <img src="/img/materials.avif" alt="image" className="about-img" />
          <div className="content font-color">
            <p className="about-heading">Materials</p>
            <p className="about-content-para">
              Surrounded by beautiful landscapes, it is only right that our
              studio is stocked with only the finest local materials that
              haven't had to travel far to get to us. Our clay is as locally
              sourced as possible for every product.
            </p>
            <p className="about-description">
              We ensure that the paint we use on our products is low-VOC and
              never washed into local waterways during production.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
