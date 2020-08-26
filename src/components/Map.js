import React, { Component } from 'react';
import Chart from 'react-google-charts';
import './Map.css';
import { Container, Row } from 'reactstrap';
import ThemeContext from './ThemeContext';

class Map extends Component {
    state={

        confirmed:[],
        recoverd: [],
        deaths: [],
        type: 'confirmed'
    }


    mapData = (result, type) =>{
        let mapArr= result.statewise.map(item=>{
            return ['IN-'+item.statecode,Number(item[type])]
        })

            mapArr.shift();
            mapArr.unshift(['City',type])
            console.log('s',mapArr);
            this.setState({
                [type]:mapArr
            })


    }

    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            // let mapArr= result.statewise.map(item=>{
            //                 return ['IN-'+item.statecode,Number(item.confirmed)]
            //             })
            //     // console.log("map",mapArr);
            //      mapArr.shift();
            //      mapArr.unshift(['City','Confirmed'])
            //     console.log('s',mapArr);
            //     this.setState({
            //         confirmed:mapArr
            //     })
            this.mapData(result, 'confirmed');
            this.mapData(result, 'recovered');
            this.mapData(result, 'deaths');
         })
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {(theme)=>(
                <div>
                    
                    <Container>
                    
                        <Row>
                            <div style={{marginBottom: '30px'}}>
                                <button className='map-btns confirmed-btn' onClick={()=>this.setState({type:'confirmed'})}>Confirmed</button>
                                <button className='map-btns recovered-btn' onClick={()=>this.setState({type:'recovered'})}>Recovered</button>
                                <button className='map-btns deaths-btn' onClick={()=>this.setState({type:'deaths'})}>Deaths</button>
                            </div>
                            {this.state.type==='confirmed'? <Chart 
                                width={'100%'}
                                height={'100%'}
                                chartType="GeoChart"
                                data={
                                            
                                                this.state.confirmed
                                }
                                options={{
                                region: 'IN',
                                domain: 'IN',
                                displayMode: 'regions',
                                resolution: 'provinces',
                                datalessRegionColor: !theme ?'#181818': 'white',
                                backgroundColor: !theme ?'#181818': 'white',
                                colorAxis: { colors: ['white', '#e64c4c','red', '#140606'] },
                                }}
                                // Note: you will need to get a mapsApiKey for your project.
                                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                                //   mapsApiKey="YOUR_KEY_HERE"
                                rootProps={{ 'data-testid': '1' }}
                            /> : null}
                            {this.state.type==='recovered' ? <Chart
                                width={'100%'}
                                height={'100%'}
                                chartType="GeoChart"
                                data={
                                            
                                                this.state.recovered
                                }
                                options={{
                                region: 'IN',
                                domain: 'IN',
                                displayMode: 'region',
                                resolution: 'provinces',
                                datalessRegionColor: !theme ?'#181818': 'white',
                                backgroundColor: !theme ?'#181818': 'white',
                                colorAxis: { colors: ['#b3ffcb','#33ff70', 'green','#001a08'] },
                                }}
                                // Note: you will need to get a mapsApiKey for your project.
                                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                                //   mapsApiKey="YOUR_KEY_HERE"
                                rootProps={{ 'data-testid': '1' }}
                            /> : null}
                            {this.state.type==='deaths' ? <Chart
                                width={'100%'}
                                height={'100%'}
                                chartType="GeoChart"
                                data={
                                            
                                                this.state.deaths
                                }
                                options={{
                                region: 'IN',
                                domain: 'IN',
                                displayMode: 'regions',
                                resolution: 'provinces',
                                datalessRegionColor: !theme ?'#181818': 'white',
                                backgroundColor: !theme ?'#181818': 'white',
                                colorAxis: { colors: ['#e6e6e6','#595959','#a6a6a6', '#0d0d0d'] },
                                }}
                                // Note: you will need to get a mapsApiKey for your project.
                                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                                //   mapsApiKey="YOUR_KEY_HERE"
                                rootProps={{ 'data-testid': '1' }}
                            /> : null}
                        </Row>
                    </Container> 
                    

            

                </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Map;