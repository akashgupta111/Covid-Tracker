// import React, { Component } from 'react';
// import { Redirect } from 'react-router';


// class State extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             stateData:[],
//             redirect:false,
//             searchedState:this.props.state,
//             apiData:[]
//         }
//     }
//     static getDerivedStateFromProps=(nextProps, prevProps)=>{
//         return{searchedState: nextProps.state};
//     }
//     componentDidMount(){
//         console.log('searcedState',this.state.searchedState)
//         fetch('https://api.covid19india.org/data.json')
//         .then(resp=>resp.json())
//         .then(result=>{
//         //    const stateData = result.statewise.filter(item=>{
//         //         return  this.state.searchedState.charAt(0).toUpperCase() + this.state.searchedState.slice(1) === item.state
//         //     })
//         //     console.log('state',stateData);
//         //     if(stateData.length){
                
//         //         this.setState({
//         //             stateData:stateData
//         //         })
//         //     }
//         //     else{
//         //         console.log('sorry');
//         //         this.setState({
//         //             redirect:true
//         //         })
//         //     }
//             this.setState({
//                 apiData:result.statewise
//             })
//         })
//     }
//     filterData = () =>{
//         const stateData = this.state.apiData.filter(item=>{
//             return this.state.searchedState.charAt(0).toUpperCase() + this.state.searchedState.slice(1) === item.state
//         })
//         if(stateData.length){
//              this.setState({
//                  stateData:stateData
//              })
//         }
//     }
//     // componentDidUpdate(){
//     //     this.filterData();
//     // }
    
//     render() {
//         // this.filterData();
//         console.log('render-searchedState',this.state.searchedState)
//         if(this.state.redirect){
//             return <Redirect to='/'/>
//         }
//         return (
//             <div>
//                 {this.state.stateData.length?this.state.stateData[0].state:''}
//             </div>
//         );
//     }
// }

// export default State;

import React,{useState,useEffect} from 'react';
import { Container, Row,Col } from 'reactstrap';
import AppCard from './AppCard'


const State = props => {
    
    return (
        
            <Container className="mt-5">
                <Row>
                    <Col md='5'>
                        <h1>{props.stateData.length?props.stateData[0].state:''}</h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md="3">
                        <AppCard 
                            heading="Confirmed" 
                            fontColor="red" 
                            backgroundColor="rgba(255,7,58,.12549)" 
                            cases ={props.stateData.length?props.stateData[0].confirmed:''} 
                            diff={props.stateData.length?props.stateData[0].deltaconfirmed:''} 
                            hoverClass="confirmed-hover"
                        />
                    </Col>
                    <Col md="3">
                        <AppCard 
                            heading="Active" 
                            fontColor="#037AFB" 
                            backgroundColor="rgba(0,123,255,.0627451)" 
                            cases = {props.stateData.length?props.stateData[0].active:''} 
                            diff={Number(props.stateData[0].deltaconfirmed) -
                            Number(props.stateData[0].deltarecovered)-
                            Number(props.stateData[0].deltadeaths)}
                            hoverClass="active-hover"
                        />
                    </Col>
                    <Col md="3">
                        <AppCard 
                            heading="Recovered" 
                            fontColor="#50A745" 
                            backgroundColor="rgba(40,167,69,.12549)" 
                            cases ={props.stateData.length?props.stateData[0].recovered:''} 
                            diff={props.stateData.length?props.stateData[0].deltarecovered:''} 
                            hoverClass="recovered-hover"
                        />
                    </Col>
                    <Col md="3">
                        <AppCard 
                            heading="Deaths" 
                            fontColor="gray" 
                            backgroundColor="rgba(108,117,125,.0627451)" 
                            cases ={props.stateData.length?props.stateData[0].deaths:''} 
                            diff={props.stateData.length?props.stateData[0].deltadeaths:''} 
                            hoverClass="death-hover"
                        />
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
           

        
    );
};



export default State;