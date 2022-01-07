import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage.jsx'

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
      </div>
  );
}

export default App;
