import { SnackbarProvider } from "notistack";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import PaletteProvider from "../contexts/PaletteContext";
import ColorShadesProvider from "../contexts/ColorShadesContext";
import ColorFormatProvider from "../contexts/ColorFormatContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ColorShadesProvider>
      <ColorFormatProvider>
        <PaletteProvider>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </PaletteProvider>
      </ColorFormatProvider>
    </ColorShadesProvider>
  );
}
export default MyApp;
