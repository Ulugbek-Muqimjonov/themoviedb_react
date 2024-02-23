import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { TokenProvider } from "./context/tokenContext/TokenContext.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStayles.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <App />
        <GlobalStyle/>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
