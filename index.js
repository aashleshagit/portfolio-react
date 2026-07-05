import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routemanager from "./Routemanager";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Routemanager />
    </ThemeProvider>
  </React.StrictMode>
);