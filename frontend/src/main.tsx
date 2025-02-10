import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
