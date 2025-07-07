import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Toaster } from 'sonner'
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Inter Tight, sans-serif",
  },
});

export const fontStyles = {
  home: {
    fontWeight: "700",
    fontSize: "clamp(35px, 5vw, 60px)",
    textWrap: "balance",
    textShadow: "rgb(0,0,0) 0px 0px 30px",
    textAlign: "center",
    color: "white",
  },
};
export const colors = {};

// Asegúrate de cerrar el proveedor de reCAPTCHA al final del render

createRoot(document.getElementById("root")).render(
  <GoogleReCaptchaProvider
    reCaptchaKey={import.meta.env.VITE_SITE_KEY}
    scriptProps={{
      async: true,
      defer: true,
      appendTo: "head"
    }}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="bottom-right" richColors />
      <App />
    </ThemeProvider>
  </GoogleReCaptchaProvider>
);
