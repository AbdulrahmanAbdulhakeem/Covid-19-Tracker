import React, { useEffect } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'

function CovidChart({ date, deathCases, allCases , country , recover}) {
  useEffect(() => {
    console.log(allCases)
    console.log(date)
    console.log(deathCases)
  },[country])

  const data = {
    labels:date.map((dates) => dates),
    datasets:[
      {
        label:'Cases of Covid',
        data:allCases.map(cases => cases),
        // borderColor:['#fa5157'],
        backgroundColor:['red'],
         // backgroundColor:[
        //   'rgba(75,192,192,1)',
        //   '#ecf0f1',
        //   '#50AF95',
        //   '#f3ba2f',
        //   '#2a71d0',
        // ],
        // borderColor:'gray',
        // borderWidth:2,
      },
      {
        label:'Death Cases',
        data:deathCases.map(deaths => deaths),
        // borderColor:['#f64c72'],
        backgroundColor:['black'],
        // backgroundColor:[
        //   'rgba(75,192,192,1)',
        //   '#ecf0f1',
        //   '#50AF95',
        //   '#f3ba2f',
        //   '#2a71d0',
        // ],
        borderColor:'black',
        borderWidth:2,
      },
      // 
    ]
  }

  return (
    <div className = 'chart'>
      <Line data={data} />
    </div>
  );
}

export default CovidChart;
