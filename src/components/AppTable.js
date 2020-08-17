import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import './appTable.css'

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
    iteratingObj = (obj,label)=>{
    }
    render() {
        return (
            <Container className="table-container">
                <Row>
                    <Col md='12'>
                        <table style={{width:'100%',textAlign:'center'}}>
                            <tr>
                                <th>State/UT</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Recovered</th>
                                <th>Deceased</th>
                            </tr>
                            {this.state.states.map(item=>(
                                <tr>
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
            
        );
    }
}

export default AppTable;