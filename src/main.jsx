import React from "react";
import ReactDOM from "react-dom/client";
import PageRoute from "./Route/PageRoute";
import { AppProvider } from "./ContextAPI";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <PageRoute />
    </AppProvider>
  </React.StrictMode>
);
