import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../global.css";
import GoogleAnalyticsScript from "../workspaces/web-client/src/scripts/GoogleAnalyticsScript";

import { Jost, Open_Sans, Poppins } from "next/font/google";

const jost = Jost({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalyticsScript />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        :root {
          --font-jost: ${jost.style.fontFamily};
          --font-open-sans: ${openSans.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
