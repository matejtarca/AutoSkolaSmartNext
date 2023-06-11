import React from "react";
import Script from "next/script";

const HeroSection = () => {
  return (
    <>
      <section className="d-flex align-items-center" id="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
              <h1>Autoškola SMART Košice</h1>
              <h2>
                V autoškole SMART Košice vás naučíme nielen šoférovať automobil.
                Sme autoškola s ľudským a priateľským prístupom.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a className="btn-get-started scrollto" href="#services">
                  Prihlásiť sa
                </a>
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2 hero-img">
              <div>
                <img
                  className="animated"
                  src="/assets/img/corsa-naweb-v4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <canvas className="hero-canvas"></canvas>
      </section>
      <Script src="/assets/js/hero-animation.js"></Script>
    </>
  );
};

export default HeroSection;
