import './styles/app.css';
import React from 'react';
import { ReactDOM } from 'react';
import { Routes, Route } from "react-router-dom"
import Timetable from './components/timetable';
import DoingList from './components/doinglist';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Timetable />} />
        <Route path="/doing-list" element={<DoingList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
