import React from "react";
import Image from "next/image";
import auto1 from "../../../../../../public/assets/img/portfolio/webp/opel.webp";
import auto2 from "../../../../../../public/assets/img/portfolio/webp/seat-1.webp";
import auto3 from "../../../../../../public/assets/img/portfolio/webp/seat-2.webp";
import suzuki1 from "../../../../../../public/assets/img/portfolio/webp/Suzuki-Swift-1.webp";
import suzuki2 from "../../../../../../public/assets/img/portfolio/webp/Suzuki-Swift-2.webp";
import ucebna from "../../../../../../public/assets/img/portfolio/webp/ucebna1.webp";

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
                src={auto1}
                alt="Opel corsa auto"
                sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
              />
            </div>
            <div className="portfolio-info">
              <h4>Opel Mokka</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image fill src={auto2} alt="Opel corsa auto" />
            </div>
            <div className="portfolio-info">
              <h4>Seat Ibiza</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image fill src={auto3} alt="Opel corsa auto" />
            </div>
            <div className="portfolio-info">
              <h4>Seat Ibiza</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image fill src={suzuki1} alt="Suzuki swift auto" />
            </div>
            <div className="portfolio-info">
              <h4>Suzuki Swift</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image fill src={suzuki2} alt="Suzuki swift auto" />
            </div>
            <div className="portfolio-info">
              <h4>Suzuki Swift</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <Image fill src={ucebna} alt="Obrázok učebne" />
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
