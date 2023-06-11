import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed-top" id="header">
      <div className="container d-flex align-items-center">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="logo" href="/">
          <Image
            className="img-fluid"
            src="/assets/img/autoskolasmart-svg.png"
            alt=""
            width={93}
            height={60}
          />
        </a>
        <p className="navbar-text">
          <i className="bi bi-telephone-fill"></i> 0903 747 877, 0917 976 016
        </p>
        <p className="navbar-text me-auto">
          <i className="bi bi-envelope"></i> rudolf.zjara@gmail.com
        </p>
        <nav className="navbar" id="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" href="#hero">
                Domov
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                O nás
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                E-prihláška
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#pricing">
                Cenník
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Galéria
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Kontakt
              </a>
            </li>
            <p className="navbar-text-mobile">
              <i className="bi bi-telephone-fill"></i> 0903 747 877, 0917 976
              016
            </p>
            <p className="navbar-text-mobile">
              <i className="bi bi-envelope"></i> rudolf.zjara@gmail.com
            </p>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
