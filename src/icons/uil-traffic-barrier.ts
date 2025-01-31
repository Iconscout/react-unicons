import * as React from 'react'
import { IconProps } from '../index'

const UilTrafficBarrier = ({
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
      d: 'M21,5H20V4a1,1,0,0,0-2,0V5H6V4A1,1,0,0,0,4,4V5H3A1,1,0,0,0,2,6v6a1,1,0,0,0,1,1H4v7a1,1,0,0,0,2,0V13H18v7a1,1,0,0,0,2,0V13h1a1,1,0,0,0,1-1V6A1,1,0,0,0,21,5ZM4,9.52V7H6.52ZM5.34,11l4-4h3.33l-4,4Zm6.15,0,4-4h3.18l-4,4ZM20,11H17.49L20,8.49Z'
    })
  )
}

export default UilTrafficBarrier