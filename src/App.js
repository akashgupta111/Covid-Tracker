import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards';
import AppTable from './components/AppTable'
import Charts from './components/Charts';
import VisualLayout from './components/VisualLayout';
import ThemeContext from './components/ThemeContext';
import Map from './components/Map'

function App() {
  const [themeHook,setThemeHook] = useState(0);

  const toggleTheme = () =>{
    setThemeHook(!themeHook)
  }
  return (
    <ThemeContext.Provider value = {themeHook}>
      <div className="App" style={themeHook ? {backgroundColor:'white',color:'black'}: {backgroundColor:'#181818',color:'white'}}>
        
         <AppNavBar changeTheme={toggleTheme}/>
          <Cards/>
          <AppTable/>
          {/* <Charts/> */}
           <VisualLayout/> 
          <Map/>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
