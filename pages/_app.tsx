import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../global.css";
import GoogleAnalyticsScript from "../workspaces/web-client/src/scripts/GoogleAnalyticsScript";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalyticsScript />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
