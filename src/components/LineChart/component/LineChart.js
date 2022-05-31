import React from 'react'
import Chart from '../../Chart'
import Line from '../modules/Line'

export default function LineChart({ data }) {
  const width = 500
  const height = 200
  return (
   <Chart width={width} height={height}>
      <Line data={data}/>
   </Chart>
  )
}
