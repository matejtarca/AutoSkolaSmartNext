import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FormSection from "./components/FormSection";
import PricesSection from "./components/PricesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Banner from "./components/Banner";
import { Config } from "../../services/types";

export type LandingProps = {
  config: Config;
};

const LandingPage = ({ config }: LandingProps) => {
  const { bannerText, prices } = config;
  const [toast, setToast] = React.useState(false);
  const [toastText, setToastText] = React.useState("");
  const showToast = (text: string) => {
    setToastText(text);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 5000);
  };
  return (
    <>
      <Head>
        <title>Autoškola SMART Košice</title>
      </Head>
      <Navbar />
      <HeroSection />
      {bannerText && <Banner text={bannerText} />}
      <main id="main">
        <AboutSection />
        <FormSection
          onSave={() => showToast("Vaša prihláška bola úspešne odoslaná.")}
        />
        <PricesSection prices={prices} />
        <GallerySection />
        <ContactSection
          onSend={() => showToast("Vaša správa bola úspešne odoslaná.")}
        />
      </main>
      <Footer />
      {toast && <Toast text={toastText} />}
      <a
        className="back-to-top d-flex align-items-center justify-content-center"
        href="#"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <Script src="/assets/js/main.js"></Script>
      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        async
      ></Script>
      <Script
        src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
        async
      ></Script>
      <Script
        src="/assets/vendor/waypoints/noframework.waypoints.js"
        async
      ></Script>
      <Script src="/assets/js/captcha.js"></Script>
    </>
  );
};

export default LandingPage;
