import React from "react";
import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FMH1B52WDD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-FMH1B52WDD');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
