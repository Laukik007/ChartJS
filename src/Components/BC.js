import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart=()=>{
  return (
    <div>
      <Bar
        data={{
            labels: ['January', 'February', 'March',
           'April', 'May'],
            datasets: [
                {
                label: 'Rainfall',
                backgroundColor: [
                    'red',
                    'blue',
                    'green',
                    'yellow',
                    'white'
                ],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [10, 22, 60, 81, 56]
                }
            ]
        }}
        options={{
          title:{
            display:true,
            text:'Average Rainfall per month',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
}

export default BarChart
