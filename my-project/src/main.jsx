import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Card from "./components/Card/Card";
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* 👈 Renders at /app/ */}
    </Routes>
    <Card />
  </BrowserRouter>
);
