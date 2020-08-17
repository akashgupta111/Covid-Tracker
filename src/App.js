import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards';
import AppTable from './components/AppTable'

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <Cards/>
      <AppTable/>
    </div>
  );
}

export default App;
