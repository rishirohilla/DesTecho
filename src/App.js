import React from 'react';
import FindTalent from './components/findtalent/findTalent';
import LearnDesign from './components/learndesign/learndesign';
import LoginPage from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GoPro from './components/goPro/GoPro';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FindTalent/>}></Route>
      <Route path="/gopro" element={<GoPro/>}></Route>
      <Route path="/learndesign" element={<LearnDesign/>}></Route>
      <Route path="/learndesign" element={<LearnDesign/>}></Route>
      <Route path="/signin" element={<LoginPage/>}></Route>
    </Routes>
    </BrowserRouter>
    // <GoPro/>
  );
};

export default App;
