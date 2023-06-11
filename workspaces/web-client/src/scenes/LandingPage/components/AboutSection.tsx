import React from "react";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>O autoškole</h2>
        </div>
        <div className="row content">
          <div className="col-lg-12">
            <p>
              Naša Autoškola SMART Košice sa zameriava na výcvik skupín B, B1 a
              AM. V autoškole SMART vás naučíme nielen šoférovať automobil. Sme
              autoškola s ľudským a priateľským prístupom. Naši inštruktori sú
              skutoční profesionáli. My vám prípravu na vodičské oprávnenie
              spríjemníme trpezlivým inštruktorom, špičkovými študijnými
              materiálmi a testami, nadštandardnými službami a individuálnym
              prístupom. Výcvik vykonávame s najmodernejšími technológiami
              vrátane kamery a parkovacích senzorov. Vodičák u nás môžete
              splácať aj bez navýšenia.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>Vodičák u nás môžete
                splácať aj bez navýšenia
              </li>
              <li>
                <i className="ri-check-double-line"></i>Výuku a výcvik autoškoly
                nastavíme na mieru podľa Vašich potrieb: Výcvik a jazdy sú u nás
                časovo flexibilné
              </li>
              <li>
                <i className="ri-check-double-line"></i>Ponúkame študentské a
                množstevné zľavy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
