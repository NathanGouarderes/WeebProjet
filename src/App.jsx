import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import About from "./pages/About";
import Connexion from "./pages/connexion";
import Home from "./pages/Home";
import { MantineProvider, Text } from '@mantine/core';
import PageAnime from "./pages/PageAnime";


export default function App() {
  return (
    <div className="App">
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/connexion" element={<Connexion/>}/>
          <Route path={"/anime/:idAnime"} element={<PageAnime/>}/>
          {/* <Route path="/*" element={<404 />} /> */}
        </Routes>
      </BrowserRouter>
    </MantineProvider>
    </div>
  );
}
