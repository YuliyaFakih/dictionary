import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage.jsx'
import WordToSearch from './components/WordToSearch/WordToSearch.jsx';

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
          <Routes>
            <Route path='/word-to-search' element={<WordToSearch />} />
          </Routes>
      </div>
  );
}

export default App;
