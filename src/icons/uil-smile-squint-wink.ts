import * as React from 'react'
import { IconProps } from '../index'

const UilSmileSquintWink = ({
  color = 'currentColor',
  size = 24,
  ...props
}: IconProps) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: color,
      ...props
    },
    React.createElement('path', {
      d: 'M8.42,12.21a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l1.5-1.5a1,1,0,0,0,0-1.42l-1.5-1.5A1,1,0,1,0,8.42,9.21l.79.79-.79.79A1,1,0,0,0,8.42,12.21Zm5.94,2a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54ZM15,9a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    })
  )
}

export default UilSmileSquintWink