import React from "react";

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
              <img
                className="img-fluid"
                src="/assets/img/portfolio/tiny/auto1.JPG"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Opel corsa</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                className="img-fluid"
                src="/assets/img/portfolio/tiny/auto2.JPG"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Opel corsa</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                className="img-fluid"
                src="/assets/img/portfolio/tiny/auto3.JPG"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Opel corsa</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                className="img-fluid"
                src="/assets/img/portfolio/tiny/Suzuki Swift 1.jpeg"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Suzuki Swift</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                className="img-fluid"
                src="/assets/img/portfolio/tiny/Suzuki Swift 2.jpeg"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Suzuki Swift</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                className="img-fluid"
                src="/assets/img/portfolio/tiny/ucebna1.JPG"
                alt=""
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
