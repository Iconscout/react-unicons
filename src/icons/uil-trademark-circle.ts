import * as React from 'react'
import { IconProps } from '../index'

const UilTrademarkCircle = ({
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
      d: 'M10,9H7a1,1,0,0,0,0,2h.5v3a1,1,0,0,0,2,0V11H10a1,1,0,0,0,0-2Zm7.38.08a1,1,0,0,0-1.09.21L15,10.59l-1.29-1.3a1,1,0,0,0-1.09-.21A1,1,0,0,0,12,10v4a1,1,0,0,0,2,0V12.41l.29.3a1,1,0,0,0,1.42,0l.29-.3V14a1,1,0,0,0,2,0V10A1,1,0,0,0,17.38,9.08ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    })
  )
}

export default UilTrademarkCircle