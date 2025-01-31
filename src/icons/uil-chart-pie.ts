import * as React from 'react'
import { IconProps } from '../index'

const UilChartPie = ({
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
      d: 'M12,2a10,10,0,1,0,4.93,18.69l.07,0,.05,0A10,10,0,0,0,12,2Zm1,2.07A8,8,0,0,1,19.93,11H13ZM12,20A8,8,0,0,1,11,4.07V12a1.09,1.09,0,0,0,.07.35l0,.08,0,.07,4,6.87A7.81,7.81,0,0,1,12,20Zm4.83-1.64L13.73,13h6.2A8,8,0,0,1,16.83,18.36Z'
    })
  )
}

export default UilChartPie