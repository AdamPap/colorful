import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import PaletteProvider from "../contexts/PaletteContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <PaletteProvider>
      <Component {...pageProps} />
    </PaletteProvider>
  );
}
export default MyApp;
