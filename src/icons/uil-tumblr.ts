import * as React from 'react'
import { IconProps } from '../index'

const UilTumblr = ({
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
      d: 'M16.79,18a4.65,4.65,0,0,1-1.62.35,1.75,1.75,0,0,1-1.92-2V10.12h4v-3h-4V2H10.33a.15.15,0,0,0-.14.15A6.11,6.11,0,0,1,6.25,7.54v2.58h2v6.54c0,2.23,1.65,5.41,6,5.34,1.47,0,3.11-.64,3.47-1.17Z'
    })
  )
}

export default UilTumblr