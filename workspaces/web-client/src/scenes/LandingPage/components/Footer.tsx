import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Autoškola SMART</h3>
              <p>
                Rudolf Zjara - Autoškola Smart
                <br />
                Osloboditeľov 16
                <br />
                040 17 Košice - Barca
                <br />
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Bližšie informácie</h4>
              <p>
                <strong>Tel.:</strong> 0903 747 877
                <br />
                <strong>Tel.:</strong> 0917 976 016
                <br />
                <strong>Email:</strong> rudolf.zjara@gmail.com
                <br />
                <strong>IČO:</strong> 40 187 063
                <br />
                <strong>DIČ:</strong> 1020650851
                <br />
                <strong>IČ DPH:</strong> SK1020650851
                <br />
                <strong>IBAN:</strong> SK80 5600 0000 0097 6187 0001
                <br />
                <br />
                Úradné hodiny streda a štvrtok od 16.00 do 18.00 (V inom čase po
                telefonickej dohode)
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a className="scrollto" href="#hero">
                    Domov
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a className="scrollto" href="#about">
                    O nás
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a className="scrollto" href="#services">
                    E-prihláška
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a className="scrollto" href="#pricing">
                    Cenník
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a className="scrollto" href="#portfolio">
                    Galéria
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nájdete nás aj na sociálnych sieťach</h4>
              <p>Sledujte nás a nezmeškajte najnovšie novinky o autoškole.</p>
              <div className="social-links mt-3">
                <a
                  className="facebook"
                  href="https://www.facebook.com/AutoskolaSMARTKosice"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  className="instagram"
                  href="https://www.instagram.com/autoskolasmartkosice/"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span>Autoškola SMART</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by<a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
