import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Providers } from "./context/Providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
