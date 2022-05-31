import React from 'react'

export default function Bar({ fill='rgb(0,245,255', x, y, width, height }) {
    return (
      <rect fill={fill} x={x} y={y} width={width} height={height}/>
    )
}
