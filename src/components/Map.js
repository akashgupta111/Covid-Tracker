import React, { Component } from 'react';
import Chart from 'react-google-charts';

class Map extends Component {
    render() {
        return (
            <div>

                {/* <Chart
                width={'500px'}
                height={'300px'}
                chartType="GeoChart"
                data={[
                    ['city', 'Recovered'],
                    [ 'IN-UP','Uttar Pradesh', 0],
                    ['IN-MH','Maharashtra', 1],
                    ['IN-BR','Bihar', 2],
                    ['IN-WB','West Bengal', 3],
                    ['IN-MP','Madhya Pradesh', 3],
                    ['IN-TN','Tamil Nadu', 10],
                    ['IN-RJ','Rajasthan', 33],
                    ['IN-KA','Karnataka', 29],
                    ['IN-GJ','Gujarat', 34],
                    ['IN-AP','Andhra Pradesh', 32],
                    ['IN-OR','Orissa', 33],
                    ['IN-TG','Telangana', 33],
                    ['IN-KL','Kerala', 31],
                    ['IN-JH','Jharkhand', 29],
                    ['IN-AS','Assam', 28],
                    ['IN-PB','Punjab', 30],
                    ['IN-CT','Chhattisgarh', 33],
                    ['IN-HR','Haryana', 30],
                    ['IN-JK','Jammu and Kashmir', 20],
                    ['IN-UT','Uttarakhand', 28],
                    ['IN-HP','Himachal Pradesh', 17],
                    ['IN-TR','Tripura', 31],
                    ['IN-ML','Meghalaya', 21],
                    ['IN-MN','Manipur', 22],
                    ['IN-NL','Nagaland', 22],
                    ['IN-GA','Goa', 32],
                    ['IN-AR', 'Arunachal Pradesh', 33],
                    ['IN-MZ','Mizoram', 23],
                    ['IN-SK','Sikkim', 24],
                    ['IN-DL','Delhi', 31],
                    ['IN-PY','Puducherry', 33],
                    ['IN-CH','Chandigarh', 30],
                    ['IN-AN','Andaman and Nicobar Islands', 30],
                    ['IN-DN','Dadra and Nagar Haveli', 30],
                    ['IN-DD','Daman and Diu', 29],
                    ['IN-LD','Lakshadweep', 31]
                ]}
                options={{
                    region: 'IN',
                    domain: 'IN',
                    displayMode: 'regions',
                    resolution: 'provinces',
                    colorAxis: { colors: ['green', 'blue'] },
                }}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                //   mapsApiKey="YOUR_KEY_HERE"
                rootProps={{ 'data-testid': '2' }}
                /> */}
                <Chart
  width={'500px'}
  height={'300px'}
  chartType="GeoChart"
  data={[
                    ['city','City', 'Recovered'],
                    [ 'IN-UP','Uttar Pradesh', 0],
                    ['IN-MH','Maharashtra', 1],
                    ['IN-BR','Bihar', 2],
                    ['IN-WB','West Bengal', 3],
                    ['IN-MP','Madhya Pradesh', 3],
                    ['IN-TN','Tamil Nadu', 10],
                    ['IN-RJ','Rajasthan', 33],
                    ['IN-KA','Karnataka', 29],
                    ['IN-GJ','Gujarat', 34],
                    ['IN-AP','Andhra Pradesh', 32],
                    ['IN-OR','Orissa', 33],
                    ['IN-TG','Telangana', 33],
                    ['IN-KL','Kerala', 31],
                    ['IN-JH','Jharkhand', 29],
                    ['IN-AS','Assam', 28],
                    ['IN-PB','Punjab', 30],
                    ['IN-CT','Chhattisgarh', 33],
                    ['IN-HR','Haryana', 30],
                    ['IN-JK','Jammu and Kashmir', 20],
                    ['IN-UT','Uttarakhand', 28],
                    ['IN-HP','Himachal Pradesh', 17],
                    ['IN-TR','Tripura', 31],
                    ['IN-ML','Meghalaya', 21],
                    ['IN-MN','Manipur', 22],
                    ['IN-NL','Nagaland', 22],
                    ['IN-GA','Goa', 32],
                    ['IN-AR', 'Arunachal Pradesh', 33],
                    ['IN-MZ','Mizoram', 23],
                    ['IN-SK','Sikkim', 24],
                    ['IN-DL','Delhi', 31],
                    ['IN-PY','Puducherry', 33],
                    ['IN-CH','Chandigarh', 30],
                    ['IN-AN','Andaman and Nicobar Islands', 30],
                    ['IN-DN','Dadra and Nagar Haveli', 30],
                    ['IN-DD','Daman and Diu', 29],
                    ['IN-LD','Lakshadweep', 31]
  ]}
  options={{
    region: 'IN',
    domain: 'IN',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: { colors: ['green', 'blue'] },
}}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//   mapsApiKey="YOUR_KEY_HERE"
  rootProps={{ 'data-testid': '1' }}
/>
            </div>
        );
    }
}

export default Map;