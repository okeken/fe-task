import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { Doughnut } from 'react-chartjs-2';
import { ITopLocation } from '../../../../interface';
import { isUnicode } from '../../../../utils';
ChartJS.register(Title, Tooltip, Legend);


const backgroundColor=['#599EEA', '#844FF6', '#0FB77A','#FAB70A', '#F09468']
export const icons={
  nigeria:getUnicodeFlagIcon("NG"),
  germany:getUnicodeFlagIcon("DE"),
  'united kingdom':getUnicodeFlagIcon("GB"),
    finland:getUnicodeFlagIcon("FIN"),
    ghana:getUnicodeFlagIcon("GH")
}

interface IProps {
  topLocation:ITopLocation[], title:string
}
function DoughnutApp({topLocation=[], title="Top Locations"}:IProps) {
  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterUpdate(chart) {
      const items = chart.options.plugins.legend.labels.generateLabels(chart);  

     const percent= (chart.data?.datasets?.[0]?.inputData ?? []).map(inputData=>inputData.percent)
      const itemElements = items.map((item,index) => {
        const bg =item.fillStyle
        const iconIdentifier =(item?.text ?? "s").toLowerCase()  
        console.log(item.text,"TET")    
        const li = `
        <li class="flex items-center"> 
        <span class="mr-2">
        ${isUnicode(icons[iconIdentifier]) ?  icons[iconIdentifier] :"N/A"}      
        </span>
        ${item.text} 
        <span class="font-bold ml-2"> ${percent[index]}% </span>
        <div style="background-color:${bg};" class="rounded-full ml-2 p-[0.3rem] inline-block"> </div> 
        </li>`   
        return li;
      });
    
    
        
      const jsLegend = document.getElementById("custom-legend");
    
      if(jsLegend){
        jsLegend.innerHTML =`<ul class="primary-black "> ${itemElements.join(" ")} <ul>`
      }
    }
    };
    
  const data = {
  labels: topLocation.map(location=>location.country),
  datasets: [
    {
      data: topLocation.map((location)=>location.count),
      inputData:topLocation,
      backgroundColor,
      hoverBackgroundColor: backgroundColor,
      borderWidth:0,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],    
      cutout: '60%'
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutoutPercentage: 20, 
  plugins: {
    title: {
      display: false,     
    },
    legend: {
      display: false,
    },
  },
};

  return (
  <div className="border rounded-xl border-[#EFF1F] p-5">
  <div className="flex justify-between mb-8">
    <div className='text-[1.125rem] font-bold'> {title} </div>

    <div className='text-secondary-orange text-[0.875rem]'>View full reports</div>
  </div>
  
  <div className="flex justify-between items-center">
    <div>
      <div id="custom-legend"></div>
    </div>
    <div style={{ width: '250px', height: '170px' }}>
      <Doughnut data={data} options={options} plugins={[htmlLegendPlugin]} />
    </div>
   </div>
  </div>
  );
}

export default DoughnutApp;
