import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import './appCard.css'


class AppCard extends Component {

   
    render() {
        const { heading, fontColor, backgroundColor, cases , diffConfirmed ,sign} = this.props;
        
        var x= Number(cases);
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return (
            <div style= {{backgroundColor:backgroundColor}}>
                <Card className="app-card">
                    <CardBody style={{color:fontColor}}>
                        <CardTitle>{heading}</CardTitle>
                        <CardSubtitle>{sign? <span>+</span>:''} {diffConfirmed}</CardSubtitle>
                        <CardText className="card-text">{res}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AppCard;