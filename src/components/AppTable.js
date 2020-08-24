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
                                                <td>{item.confirmed}</td>
                                                <td>{item.active}</td>
                                                <td>{item.confirmed-item.active-item.deaths}</td>
                                                <td>{item.deaths}</td>
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