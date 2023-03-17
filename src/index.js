import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import FilmsDetails from './components/FilmsDetails';
import CardsSeasons from './components/CardsSeasons';
import SeasonsDetails from './components/SeasonsDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/details/:id" element={<FilmsDetails/>}/>
      <Route path="/tv/popular" element={<CardsSeasons/>}/>
      <Route path="/tv/:idSeasons" element={<SeasonsDetails/>}/>
    </Routes>
  </BrowserRouter>
);