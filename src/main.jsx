import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Pesquisar from "./pages/Pesquisar";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="filmes/:id" element={<Filmes />} />
          <Route path="pesquisar" element={<Pesquisar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);