import React from "react";
import { Prices } from "../../../services/types";

type PricesSectionProps = {
  prices: Prices;
};

const PricesSection = ({ prices }: PricesSectionProps) => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Cenník</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="box featured">
              <h3>
                Štandardný kurz pre získanie vodičáku skupiny B (v skupine)
              </h3>
              <h4>
                <sup>€</sup>
                {prices.standard}
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check"></i> Trvanie min. 4 mesiace
                </li>
                <li>
                  <i className="bx bx-check"></i> Ak zaplatíš naraz celú sumu,
                  získaš 1 bonusovú jazdu v trvaní 45 minút zdarma
                </li>
                <li>
                  <i className="bx bx-check"></i> Sumu môžeš uhradiť aj na 3
                  splátky bez navýšenia
                </li>
                <li>
                  <i className="bx bx-check"></i> Ak prinesieš so sebou ďalších
                  uchádzačov – zľava 10 eur za každého prineseného uchádzača
                </li>
                <li>
                  <i className="bx bx-check"></i> <b>Kurz prvej pomoci</b> – je
                  zahrnutý v cene vodičáku
                </li>
              </ul>
              <a className="buy-btn scrollto" href="#services">
                Prihlásiť sa
              </a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <h3>Zrýchlený kurz</h3>
              <h4>
                <sup>€</sup>
                {prices.quick}
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check"></i> Zrýchlený kurz (trvanie min. 2
                  mesiace) - <b>{prices.quick} €</b>
                </li>
                <li>
                  <i className="bx bx-check"></i> Extra zrýchlený kurz (trvanie
                  min. 1 mesiac) - <b>{prices.superQuick} €</b>
                </li>
                <li>
                  <i className="bx bx-check"></i> Ak zaplatíš naraz celú sumu,
                  získaš 1 bonusovú jazdu v trvaní 45 minút zdarma
                </li>
                <li>
                  <i className="bx bx-check"></i> Sumu môžeš uhradiť aj na 3
                  splátky bez navýšenia
                </li>
                <li>
                  <i className="bx bx-check"></i> Ak prinesieš so sebou ďalších
                  uchádzačov – zľava 10 eur za každého prineseného uchádzača
                </li>
                <li>
                  <i className="bx bx-check"></i> <b>Kurz prvej pomoci</b> – je
                  zahrnutý v cene vodičáku
                </li>
              </ul>
              <a className="buy-btn scrollto" href="#services">
                Prihlásiť sa
              </a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <h3>Individuálny kurz pre získanie vodičáku skupiny B</h3>
              <h4>
                <sup>€</sup>
                {prices.individual}
                <span></span>
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check"></i> Individuálna teória a
                  individuálne jazdy
                </li>
                <li>
                  <i className="bx bx-check"></i> Ak zaplatíš naraz celú sumu,
                  získaš 1 bonusovú jazdu v trvaní 45 minút zdarma
                </li>
                <li>
                  <i className="bx bx-check"></i> Sumu môžeš uhradiť aj na 3
                  splátky bez navýšenia
                </li>
                <li>
                  <i className="bx bx-check"></i> Ak prinesieš so sebou ďalších
                  uchádzačov – zľava 10 eur za každého prineseného uchádzača
                </li>
                <li>
                  <i className="bx bx-check"></i> <b>Kurz prvej pomoci</b> – je
                  zahrnutý v cene vodičáku
                </li>
              </ul>
              <a className="buy-btn scrollto" href="#services">
                Prihlásiť sa
              </a>
            </div>
          </div>
        </div>
        <div className="additional-pricing">
          <div className="section-title">
            <h2>Doplnkové služby</h2>
          </div>
          <ul>
            <li>
              Kondičná jazda sk. B (1 x 45 minút) (platí pre záujemcov s
              vodičským preukazom) - <b>{prices.condDrive} €</b>
            </li>
            <li>
              Doplnková jazda sk. B (1 x 45 minút) (platí pre účastníkov kurzu,
              ktorí si chcú dokúpiť viacej jázd) - <b>{prices.addDrive} €</b>
            </li>
            <li>
              Náhradná vyučovacia hodina teórie (1 x 45 minút) (v prípade
              vymeškania riadnej výučby teórie) - <b>{prices.theoryLesson} €</b>
            </li>
            <li>
              Stojné inštruktora (platí účastník kurzu, ak zruší naplánovanú
              jazdu neskôr ako 24 hodín vopred) - <b>{prices.standingInstructor} €</b>
            </li>
          </ul>
        </div>
        <div className="additional-pricing">
          <div className="section-title">
            <h2>Správne poplatky pre zabezpečenie skúšky</h2>
          </div>
          <p>
            Platíte ich orgánom štátnej správy. Autoškola od Vás vyberie
            potrebnú sumu a bezplatne za Vás zakúpi správny eKolok a zabezpečí
            prihlásenie na skúšku.
          </p>
          <ul>
            <li>
              Skúška na VP skupiny B - <b>{prices.examFee} €</b>
            </li>
            <li>
              Opakovaná skúška na VP skupiny B - <b>{prices.examRepeatFee} €</b>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
