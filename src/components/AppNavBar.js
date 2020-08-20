import React,{useState,useContext} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
  } from 'reactstrap';
  import './appNavBar.css';
  import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
  import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
  import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
  import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
  import ThemeContext from './ThemeContext'

function AppNavBar (props) {
    const [isOpen, setIsOpen] = useState(false);
    const [input,setInput] = useState('');
    const theme = useContext(ThemeContext)

    const toggle = () => setIsOpen(!isOpen);
   

    const toggleTheme = ()=>{
        // console.log(theme ? themes.dark : themes.light)
        props.changeTheme()
        // setTheme(!theme)
    }
    return (
        <div className="nav-container">
            <Navbar color='dark' dark expand="md">
                <NavbarBrand href="/">Covid Tracker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <div className="nav-input-div">
                    <span>{<SearchOutlinedIcon/>}</span>
                    <input value={input} className="nav-input" placeholder="Search" onChange ={(e)=>{setInput(e.target.value)}}/>
                </div>
                
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/"><HomeOutlinedIcon/></NavLink>
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