import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './appCard.css'


class AppCard extends Component {

   numberSystemConversion =(cases) =>{
    var x= Number(cases);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
   }
    render() {
        const { heading, fontColor, backgroundColor, cases , diff ,sign,hoverClass} = this.props;
        
        var convertedCases = this.numberSystemConversion(cases);
        var convertedDiff = this.numberSystemConversion(diff)
        console.log(typeof(convertedDiff), heading)
        return (
            <div >
                <Card className={`app-card ${hoverClass}`}>
                    <CardBody style={{color:fontColor}}>
                        <CardTitle>{heading}</CardTitle>
                        {convertedDiff=='0'?<FavoriteIcon style={{fontSize:'15px'}}/>:<CardSubtitle>{convertedDiff[0]=='-'?'':<span>+</span>} {convertedDiff}</CardSubtitle>}
                        <CardText className="card-text">{convertedCases}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AppCard;