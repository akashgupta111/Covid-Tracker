import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/AppNavBar'
import Cards from './components/Cards';
import AppTable from './components/AppTable'
import Charts from './components/Charts';
import VisualLayout from './components/VisualLayout';
import ThemeContext from './components/ThemeContext';
import Map from './components/Map';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import State from './components/State'

function App() {
  const [themeHook,setThemeHook] = useState(0);
  const [state,setState] = useState([])

  const toggleTheme = () =>{
    setThemeHook(!themeHook)
  }
  const searchedState = (state) =>{
    setState(state)
  }
  return (
    <ThemeContext.Provider value = {themeHook}>
      <div className="App" style={themeHook ? {backgroundColor:'white',color:'black'}: {backgroundColor:'#181818',color:'white'}}>
        
        <Router>
          <AppNavBar changeTheme={toggleTheme} searchedState={searchedState}/>
          <Switch>
            {state.length?<Route exact path ={`/state/${state[0].state}`}>
              <State stateData={state}/>
            </Route>:''}
            <Route exact path="/">
              
              <Cards/>
              <AppTable/>
              <Charts/>
              {/* <VisualLayout/>  */}
              <Map/>
            </Route>
          </Switch>
        </Router>
         
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
