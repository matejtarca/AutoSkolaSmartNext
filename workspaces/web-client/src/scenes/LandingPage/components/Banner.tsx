import React from "react";

type BannerProps = {
  text?: string;
};
const Banner = ({ text }: BannerProps) => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3>{text}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
