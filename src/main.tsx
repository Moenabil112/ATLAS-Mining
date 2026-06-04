import React from "react";
import ReactDOM from "react-dom/client";
import { Gateway } from "./pages/Gateway";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Gateway />
    </LanguageProvider>
  </React.StrictMode>
);
