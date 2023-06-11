import React from "react";
import Image from "next/image";

const GallerySection = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Galéria</h2>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image
                fill
                src="/assets/img/portfolio/webp/auto1.webp"
                alt="Opel corsa auto"
                sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
              />
            </div>
            <div className="portfolio-info">
              <h4>Opel corsa</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image
                fill
                src="/assets/img/portfolio/webp/auto2.webp"
                alt="Opel corsa auto"
              />
            </div>
            <div className="portfolio-info">
              <h4>Opel corsa</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image
                fill
                src="/assets/img/portfolio/webp/auto3.webp"
                alt="Opel corsa auto"
              />
            </div>
            <div className="portfolio-info">
              <h4>Opel corsa</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image
                fill
                src="/assets/img/portfolio/webp/Suzuki-Swift-1.webp"
                alt="Suzuki swift auto"
              />
            </div>
            <div className="portfolio-info">
              <h4>Suzuki Swift</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image
                fill
                src="/assets/img/portfolio/webp/Suzuki-Swift-2.webp"
                alt="Suzuki swift auto"
              />
            </div>
            <div className="portfolio-info">
              <h4>Suzuki Swift</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image
                fill
                src="/assets/img/portfolio/webp/ucebna1.webp"
                alt="Obrázok učebne"
              />
            </div>
            <div className="portfolio-info">
              <h4>Učebňa</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
