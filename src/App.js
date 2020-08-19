import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards';
import AppTable from './components/AppTable'
import Charts from './components/Charts';

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <Cards/>
      <AppTable/>
      <Charts/>
      
    </div>
  );
}

export default App;
