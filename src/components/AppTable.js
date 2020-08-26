import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import './appTable.css'
import ThemeContext from './ThemeContext'

class AppTable extends Component {
    constructor(props){
        super(props);
            this.state={
                states : []
            }
    }
    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then((resp)=>resp.json())
        .then(result=>{
            console.log(result.statewise);
            this.setState({
                states:result.statewise
            })
            
            
        })
    }
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
        return (
            <ThemeContext.Consumer>
                {(theme)=>(
                        <Container className="table-container">
                            <Row>
                                <Col md='12'>
                                    <table className={theme?'light':'dark'}style={{width:'100%',textAlign:'center'}}>
                                        <tr>
                                            <th>State/UT</th>
                                            <th>Confirmed</th>
                                            <th>Active</th>
                                            <th>Recovered</th>
                                            <th>Deaths</th>
                                        </tr>
                                        {this.state.states.map((item,index)=>(
                                            <tr key={item+index}>
                                                <td>{item.state}</td>
                                                <td>{this.numberSystemConversion(item.confirmed)}</td>
                                                <td>{this.numberSystemConversion(item.active)}</td>
                                                <td>{this.numberSystemConversion(item.confirmed-item.active-item.deaths)}</td>
                                                <td>{this.numberSystemConversion(item.deaths)}</td>
                                            </tr>
                                        ))}
                                        
                                    
                                    </table>
                                </Col>
                            </Row>
                            

                        </Container>
                    )}
                </ThemeContext.Consumer>
            
        );
    }
}

export default AppTable;