import React,{useState,useContext,useEffect} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    FormFeedback,
    Input
  } from 'reactstrap';
  import './appNavBar.css';
  import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
  import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
  import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
  import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
  import ThemeContext from './ThemeContext';
  import {Link, useHistory}from 'react-router-dom';


function AppNavBar (props) {
    const [isOpen, setIsOpen] = useState(false);
    const [input,setInput] = useState('');
    const [searchedState,setSearchedState] =useState([]);
    const [stateName,setStateName] = useState([]);
    const [suggestions,setSuggestions] = useState([]);
    const [validation,setValidation]=useState('');
    const theme = useContext(ThemeContext);
    const history = useHistory();
    
    useEffect(()=>{
        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            const stateData = result.statewise.filter(item=>(
                input.toUpperCase() === item.state.toUpperCase()
            ))
            if(stateData.length){
                setSearchedState(stateData)
            }
            else{
                setSearchedState([])
            }
            const stateName = result.statewise.map(item=>(
                item.state
            ));
            stateName.shift();
            setStateName(stateName);
        })
    },[input]);

    const toggle = () => setIsOpen(!isOpen);
   

    const toggleTheme = () =>{
        props.changeTheme()
    }
    useEffect(()=>{
        console.log('inp',input)
        let suggestions =[];
        if(input.length > 0){
            console.log(input.length)
            const regex = new RegExp(`^${input}`,'i');
            suggestions = stateName.sort().filter(v=>regex.test(v));
        }
        setSuggestions(suggestions);
    },[input,stateName])
    const changeHandler =(event)=>{
        setInput(event.target.value);
           
    }
    const renderSuggestions = ()=>{
        if(suggestions.length ===0){
            return null;
        }
        return (
            <div className="search-dropdown">
                <ul style={{listStyle:'none',padding:'10px'}} >
                    {suggestions.map(item=><li className="search-dropdown-list" onClick={()=>suggestionSelected(item)}>{item}</li>)}
                </ul>

             </div>
        )
    }
   
    
    const suggestionSelected =(value) =>{
        setInput(value);
        setTimeout(()=>{
            setSuggestions([]);
        },0)
        
        
        
        
        console.log('updated')  
        
    }
    const searchHandler = (event) =>{
        if(event.key === "Enter"){
            searching();
        }
    }
    const searching = () =>{
        if(!input.length || !searchedState.length){
            setValidation('failiure')
        }
        else{
            setValidation('');
            props.searchedState(searchedState);
            history.push(`/state/${searchedState[0].state}`);
            setInput('');

        }
    }
    
    return (
        <div className="nav-container">
            <Navbar className="pd-5" color='dark' dark expand="md">

                <NavbarBrand href="/" ><img src={require('../image/coronalogo2.png')} style={{width: '40px', marginRight: '7px'}} alt="logo"/>India Covid-19 Tracker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <div className="nav-input-div">
                    <span>{<SearchOutlinedIcon/>}</span>
                    <div style={{display:'inline-block',width:'80%'}}>

                        <Input value={input} className="nav-input" type="text" placeholder="Search by State" onChange ={changeHandler} onKeyPress={searchHandler} invalid={validation==="failiure"}/>
                        
                        <FormFeedback style={{marginTop:'0px'}}>Please type valid state</FormFeedback>
                    </div>
                    {renderSuggestions()}
                </div>
                
                
                
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavbarText><Link to="/" style={{color:'gray'}}><HomeOutlinedIcon/></Link></NavbarText>
                    </NavItem>
                    <NavItem>
                    <NavbarText className="theme-icon" onClick={toggleTheme}>{theme?<WbSunnyOutlinedIcon style={{color:'yellow'}}/>:<Brightness2OutlinedIcon style={{color:'purple'}}/>}</NavbarText>
                    </NavItem>
                    
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavBar;