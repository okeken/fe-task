"use client"
import {useState, useEffect} from "react"
import TimeLineChart from "./components/LineChart"
import { normaliseGraphData } from "../../../utils"
import { IGraphData } from "../../../interface"
import DoughnutApp from "./components/Doughnut"
import TopLocation from "./components/TopLocation"
import TopSources from "./components/TopSources"

const url="https://fe-task-api.mainstack.io/"

const tabsOption=[
    {
    id:0,
    title:"1 Day"
    },
    {
        id:1,
        title:"3 Days"
    },
    {
        id:2,
        title:"7 Days"
    },
    {
        id:3,
        title:"30 Days"
    },
    {
        id:4,
        title:"All Time"
    },
    {
        id:5,
        title:"Custom Date"
    },
]

interface IData {
    graph_data:{
        views:IGraphData[]
    }
    top_sources:any[]
    top_locations:any[]
}
const prevData={
    graph_data:{views:[]},
    top_sources:[],
    top_locations:[]
}
const Dashboard = ()=>{
    const [currentTab, setCurrentTab] = useState(4)
    const [data, setData]=useState<IData>(prevData)

    const fetchData = async()=>{
            const info = await fetch(url).then(data=>data.json())
           
            const finalData = {...info, graph_data:{...info.graph_data, views:normaliseGraphData(info?.graph_data?.views ?? {})}}
            console.log(finalData)
            setData(finalData)
    }
     useEffect(()=>{
      fetchData()
     },[])
    
    return (<div className="bg-white text-black">
        <div className="flex justify-between items-center mb-6">
            <div>
                <div className="flex flex-col">
                    <div className="text-2xl mb-1">
                Good morning, Blessing ⛅️

                    </div>
                    <div className="text-cs-gray-500">
                    Check out your dashboard summary.
                    </div>

                </div>
            </div>
            <div>
                <button className="text-secondary-orange">
                    View Analytics
                </button>

            </div>
        </div>

        <div className="tabs">
            {
                tabsOption.map(tab=>(<button className={`border border-[#EFF1F6] rounded-[100px] p-2 px-3 mr-3 ${currentTab==tab.id ? "text-secondary-orange border bg-cs-orange-100 border-secondary-orange":""}`} key={tab.id}> {tab.title} </button>))
            }

        </div>

       <TimeLineChart data={data?.graph_data?.views ?? []}  />
       <div className="grid  md:grid-cols-2 gap-4 mt-3">
            <div className="md:mb-2">
                <TopLocation topLocation={data?.top_locations  ?? []} title="Top Locations" />
    
            </div>
            <div>
                <TopSources topLocation={data?.top_sources  ?? []} title="Top Sources" />
            </div>
       </div>
    </div>)
}

export default Dashboard