import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Container,Row } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <Container style={{marginTop:'100px'}}>
                <Row style={{flexDirection:'column'}}>
                    <p style={{textAlign:'center',fontWeight:'bold'}}>We all are in this together</p>
                    <div style={{width:"10%",margin:'auto',display:'flex',justifyContent:'space-around',paddingBottom:'100px'}}>
                        <a href="https://github.com/akashgupta111/Covid-Tracker" target="blank" style={{color:'gray'}}><GitHubIcon/></a>
                        <a href="mailto:guptaakash1116@gmail.com" target="blank" style={{color:'red'}}><MailOutlineIcon/></a>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Footer;