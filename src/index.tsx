import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="bg-dark px-[10%] pb-4 h-auto">
      <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
