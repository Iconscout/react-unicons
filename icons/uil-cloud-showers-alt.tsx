import React from 'react';

type Props = {
    /**
     * The color of the icon
     * @default 'currentColor'
     */
    color?: string;
    /**
     * The size of the icon
     * @default 24
     */
    size?: string | number;
} & React.SVGProps<SVGElement>

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilCloudShowersAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M8,13a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14A1,1,0,0,0,8,13Zm4-2a1,1,0,0,0-1,1v9a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm6.42-4.78A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16,13a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14A1,1,0,0,0,16,13Z'
  }));
};

export default UilCloudShowersAlt;