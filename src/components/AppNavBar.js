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
    const [validation,setValidation]=useState('');
    const theme = useContext(ThemeContext);
    const history = useHistory();
    
    const [redirect , setRedirect] = useState(false)

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
            
            console.log('stateData',searchedState)
        })
    },[input]);

    const toggle = () => setIsOpen(!isOpen);
   

    const toggleTheme = () =>{
        // console.log(theme ? themes.dark : themes.light)
        props.changeTheme()
        // setTheme(!theme)
    }
    const searchHandler = (event) =>{
        if(event.key === "Enter"){
            searching()
            
            console.log('Redirect' ,input);
            
            
        }
    }
    const searching = () =>{
        if(!input.length || !searchedState.length){
            console.log('wrong validation')
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
                <NavbarBrand href="/">India Covid-19 Tracker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <div className="nav-input-div">
                    <span>{<SearchOutlinedIcon/>}</span>
                    <div style={{width:'100%'}}>

                    <Input value={input} className="nav-input" type="text" placeholder="Search by State" onChange ={(e)=>{setInput(e.target.value)}} onKeyPress={searchHandler} invalid={validation==="failiure"}/>
                    <FormFeedback style={{marginTop:'0px'}}>Please type valid state</FormFeedback>
                    </div>
                </div>
                
                
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavbarText><Link to="/" style={{color:'gray'}}><HomeOutlinedIcon/></Link></NavbarText>
                    </NavItem>
                    <NavItem>
                    <NavbarText className="ml-3" onClick={toggleTheme}>{theme?<WbSunnyOutlinedIcon style={{color:'yellow'}}/>:<Brightness2OutlinedIcon style={{color:'purple'}}/>}</NavbarText>
                    </NavItem>
                    
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavBar;