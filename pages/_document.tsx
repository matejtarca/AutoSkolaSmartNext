/* eslint-disable @next/next/no-css-tags */
import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sk">
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="V autoškole SMART Košice vás naučíme nielen šoférovať automobil. Sme autoškola s ľudským a priateľským prístupom."
          name="description"
        />
        <meta
          content="autoskola autoškola Košice kosice košice Kosice"
          name="keywords"
        />
        <meta name="robots" content="index, follow" />
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
