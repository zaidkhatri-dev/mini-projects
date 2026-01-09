import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import FootballCard from "./projects/football-cards/FootballCard.tsx";
import MoveMe from "./projects/move-me/MoveMe.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="football-cards" element={<FootballCard />}></Route>
        <Route path="move-me" element={<MoveMe />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
