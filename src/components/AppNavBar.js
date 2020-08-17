import React,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Input
  } from 'reactstrap';
  import './appNavBar.css';
  import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
  import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
  

function AppNavBar (props) {
    const [isOpen, setIsOpen] = useState(false);
    const [input,setInput] = useState('');

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Covid Tracker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Input value={input} className="nav-input" placeholder="Search" onChange ={(e)=>{setInput(e.target.value)}}/>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/"><HomeOutlinedIcon/></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href=""><WbSunnyOutlinedIcon/></NavLink>
                    </NavItem>
                    
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavBar;