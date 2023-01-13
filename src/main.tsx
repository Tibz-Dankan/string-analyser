import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NotificationProvider } from "./context/NotificationContext";
import { StringProvider } from "./context/StringContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationProvider>
      <StringProvider>
        <App />
      </StringProvider>
    </NotificationProvider>
  </React.StrictMode>
);
