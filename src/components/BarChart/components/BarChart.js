import React from 'react'
import Bar from '../modules/Bar'
import Chart from '../../Chart'

export default function BarChart({ data }) {
  const greatestValue = (values) => values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity)

  const barWidth = 20
  const barMargin = 0
  const width = data.length * (barWidth + barMargin)
  const height = greatestValue(data.map((item) => item))


  return (
    <Chart width={width} height={height}>
      {
        data.map((item, index) => (
          <Bar 
            key={index}
            x={index * (barWidth + barMargin)}
            y={height - item}
            width={barWidth}
            height={item}
          />
        ))
      }
    </Chart>
  )
}
