import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Toaster } from "./components/ui/sonner";
import { ContextProvider } from "./components/Context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <AppRoutes />
        <Toaster />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
