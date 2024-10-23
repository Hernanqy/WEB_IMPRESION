import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Card from "./components/Card/Card";
import Pedidos from "./components/Pedidos/Pedidos";
import Footer from "./components/Footer/Footer";
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* 👈 Renders at /app/ */}
    </Routes>
    <Card />
    <Pedidos />
    <Footer/>
  </BrowserRouter>
);
