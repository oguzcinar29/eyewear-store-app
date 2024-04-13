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
        <Toaster
          toastOptions={{
            unstyled: false,

            classNames: {
              error: "bg-red-400",
              success:
                "rounded-sm bg-green-400 text-white p-3 pr-20 flex gap-3 items-center",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
          position="bottom-right"
        />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
