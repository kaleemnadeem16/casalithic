import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactModal from "./components/ContactModal/ContactModal";
import LocalizationManager from "./i18n/LocalizationManager";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ContactModal />
    <LocalizationManager />
  </React.StrictMode>
);
