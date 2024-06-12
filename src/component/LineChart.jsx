import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";

const LineChart = ({historicaleData}) => {
  const [chartData,setchartData] = useState([['Date','Prices']])
  useEffect(()=>{
      let copData = [['Date','Prices']]
      if(historicaleData.prices){
        historicaleData.prices.map((item) => {
          copData.push([new Date(item[0]).toLocaleDateString().slice(0,-5),item[1]])
        })
        setchartData(copData)
      }
  },[historicaleData])
  return (
    <div>
      
<Chart
  chartType="LineChart"
  data={chartData}
  height="100%"
  legendToggle
/>
    </div>
  )
}

export default LineChart
