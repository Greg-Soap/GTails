import React from "react";
import ReactDOM from "react-dom/client";
import PageRoute from "./PageRoute";
import { DarkModeContextProvider } from "./Components/darkModeContext";
import "./styles/main.scss";
import { AppProvider } from "./Components/ContextAPI";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AppProvider>
        <PageRoute />
      </AppProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
