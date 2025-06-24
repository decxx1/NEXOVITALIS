import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
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

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
