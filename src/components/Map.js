import React, { Component } from 'react';
import Chart from 'react-google-charts';
import './Map.css';

class Map extends Component {
    state={
        confirmed: []
    };
    
    
    componentDidMount(){
        // let stateCode =['IN-UP',
        // 'IN-MH',
        // 'IN-BR',
        // 'IN-WB',
        // 'IN-MP',
        // 'IN-TN',
        // 'IN-RJ',
        // 'IN-KA',
        // 'IN-GJ',
        // 'IN-AP',
        // 'IN-OR',
        // 'IN-TG',
        // 'IN-KL',
        // 'IN-JH',
        // 'IN-AS',
        // 'IN-PB',
        // 'IN-CT',
        // 'IN-HR',
        // 'IN-JK',
        // 'IN-UT',
        // 'IN-HP',
        // 'IN-TR',
        // 'IN-ML',
        // 'IN-MN',
        // 'IN-NL',
        // 'IN-GA',
        // 'IN-AR', 
        // 'IN-MZ',
        // 'IN-SK',
        // 'IN-DL',
        // 'IN-PY',
        // 'IN-CH',
        // 'IN-AN',
        // 'IN-DN',
        // 'IN-DD',
        // 'IN-LD'];

        fetch('https://api.covid19india.org/data.json')
        .then(resp=>resp.json())
        .then(result=>{
            let mapArr= result.statewise.map((item, index)=>{
                return [ item.state ,Number(item.confirmed)]
            })

            mapArr.shift();
            mapArr.unshift([ 'City', 'Confirmed'])
            console.log('state', mapArr)
            this.setState({
                confirmed: mapArr
            })
        })
        
    }

    render() {
        return (
            <div className="Map">
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="GeoChart"
                     data={
                    //         ['city','City', 'Recovered'],
                    //         [ 'IN-UP','Uttar Pradesh', 0],
                    //         ['IN-MH','Maharashtra', 1],
                    //         ['IN-BR','Bihar', 2],
                    //         ['IN-WB','West Bengal', 3],
                    //         ['IN-MP','Madhya Pradesh', 3],
                    //         ['IN-TN','Tamil Nadu', 10],
                    //         ['IN-RJ','Rajasthan', 33],
                    //         ['IN-KA','Karnataka', 29],
                    //         ['IN-GJ','Gujarat', 34],
                    //         ['IN-AP','Andhra Pradesh', 32],
                    //         ['IN-OR','Orissa', 33],
                    //         ['IN-TG','Telangana', 33],
                    //         ['IN-KL','Kerala', 31],
                    //         ['IN-JH','Jharkhand', 29],
                    //         ['IN-AS','Assam', 28],
                    //         ['IN-PB','Punjab', 30],
                    //         ['IN-CT','Chhattisgarh', 33],
                    //         ['IN-HR','Haryana', 30],
                    //         ['IN-JK','Jammu and Kashmir', 20],
                    //         ['IN-UT','Uttarakhand', 28],
                    //         ['IN-HP','Himachal Pradesh', 17],
                    //         ['IN-TR','Tripura', 31],
                    //         ['IN-ML','Meghalaya', 21],
                    //         ['IN-MN','Manipur', 22],
                    //         ['IN-NL','Nagaland', 22],
                    //         ['IN-GA','Goa', 32],
                    //         ['IN-AR', 'Arunachal Pradesh', 33],
                    //         ['IN-MZ','Mizoram', 23],
                    //         ['IN-SK','Sikkim', 24],
                    //         ['IN-DL','Delhi', 31],
                    //         ['IN-PY','Puducherry', 33],
                    //         ['IN-CH','Chandigarh', 30],
                    //         ['IN-AN','Andaman and Nicobar Islands', 30],
                    //         ['IN-DN','Dadra and Nagar Haveli', 30],
                    //         ['IN-DD','Daman and Diu', 29],
                    //         ['IN-LD','Lakshadweep', 31]
                               this.state.confirmed
                    }
                    options={{
                        region: 'IN',
                        domain: 'IN',
                        displayMode: 'region',
                        resolution: 'provinces',
                        colorAxis: { minValue: 0, colors: ['#ffe6e6','#ff0000', '#330000'] },
                        datalessRegionColor: '#181818',
                        backgroundColor: '#181818',
                        keepAspectRatio: false
                    }}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    //   mapsApiKey="YOUR_KEY_HERE"
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        );
    }
}

export default Map;