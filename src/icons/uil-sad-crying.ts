import * as React from 'react'
import { IconProps } from '../index'

const UilSadCrying = ({
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
      d: 'M12,2A10,10,0,0,0,8.59,21.39l.06,0a9.81,9.81,0,0,0,6.7,0l.06,0A10,10,0,0,0,12,2Zm2,17.74a7.82,7.82,0,0,1-4,0V16.61a3.79,3.79,0,0,1,4,0Zm2-.82V11a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2v3.39a6,6,0,0,0-4,0V11a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2v7.92a8,8,0,1,1,8,0Z'
    })
  )
}

export default UilSadCrying