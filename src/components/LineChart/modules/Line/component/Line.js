import React from 'react'
import { line } from 'd3-shape'
import { scaleLinear } from 'd3-scale'

export default function Line({ data }) {
  const width = 500
  const height = 200
  const xScale = scaleLinear().range([0, width]).domain([0, 10])
  const yScale = scaleLinear().range([0, height]).domain([0, 500])
  const xSelector = (d) => d.x
  const ySelector = (d) => d.y
  const path = line().x((d) => xScale(xSelector(d))).y((d) => yScale(ySelector(d)))
  return (
   <path d={path(data)} stroke="#ff6347" strokeWidth={3} fill="none"/>
  )
}
