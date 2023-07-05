"use  client"
import React, { useEffect, useRef } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IGraphData } from "../../../../interface";
import { formatDate } from "../../../../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



interface IProps {
  data:IGraphData[]
}


 function App({data=[]}:IProps) {

const options = {
    responsive: true,
    plugins: {
      legend: {
        display:true,
        align:'start',  
        // position: 'top' as const,   
     
        
      },
      title: {
        display: true,
        text: 'Page Views',
        // color:'#8b93a2',      
        align:'start',   
        font: {
          size: 20,     
        }  
      }  ,
      subtitle: {
        align:'start', 
        display: true,
        text: 'All Time'
      }
    },
  };
 const legendRef = useRef(null)
  const labels = data.map((graph:IGraphData)=>formatDate(graph.date))
  // console.log(legendRef?.current?.legend?.legendItems, "Ref lefed")
  useEffect(()=>{},[

  ])

const dataI = {
  labels,
  datasets: [
    {
      fill: true,
      display:false,
      label: 'Dataset 2',
      data: data.map((info:IGraphData) =>info.view),
      borderColor: '#FF5403',
      backgroundColor: '#FFEEE5',   
     
    },
  ],
};

  return <> 
   <div style={{ height: '450px' }}>
    {/* @ts-ignore */}
  <Line ref={legendRef} options={options} data={dataI}  />
  </div>
  </> 
}

export default App

