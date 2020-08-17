import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import './appCard.css'

var x=20000;
x=x.toString();
var lastThree = x.substring(x.length-3);
var otherNumbers = x.substring(0,x.length-3);
if(otherNumbers != '')
    lastThree = ',' + lastThree;
var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
class AppCard extends Component {

   
    render() {
        const { heading, fontColor, backgroundColor } = this.props
        return (
            <div style= {{backgroundColor:backgroundColor}}>
                <Card className="app-card">
                    <CardBody style={{color:fontColor}}>
                        <CardTitle>{heading}</CardTitle>
                        <CardSubtitle>+ 3000</CardSubtitle>
                        <CardText className="card-text">{res}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AppCard;