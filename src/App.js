import React from 'react'
import { DATA, DUMP } from './data'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'

export default function App() {

  return (
   <div style={{ padding: '10px 10px'}}>
      <h2>Mode: Bars</h2>
      <BarChart data={DATA}/>
      <h2>Mode: Line</h2>
      <LineChart data={DUMP}/>
   </div>
  )
}

