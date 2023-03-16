import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Footer from "./components/Footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
