import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MouseFollower } from "react-mouse-follower";
import ShopContextProvider from './Context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <MouseFollower />
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
