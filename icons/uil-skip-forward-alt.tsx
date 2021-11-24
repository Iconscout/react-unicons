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
const UilSkipForwardAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5,3A3,3,0,0,0,2,6V18a3,3,0,0,0,6,0V6A3,3,0,0,0,5,3ZM6,18a1,1,0,0,1-2,0V6A1,1,0,0,1,6,6ZM20.68,9.65,14,5.66a2.6,2.6,0,0,0-2.64,0A2.74,2.74,0,0,0,10,8v8a2.74,2.74,0,0,0,1.37,2.38,2.57,2.57,0,0,0,2.64,0l6.67-4a2.75,2.75,0,0,0,0-4.7Zm-1,3-6.66,4a.61.61,0,0,1-.63,0A.72.72,0,0,1,12,16V8a.72.72,0,0,1,.36-.64.64.64,0,0,1,.31-.08.63.63,0,0,1,.32.09l6.66,4a.76.76,0,0,1,0,1.28Z'
  }));
};

export default UilSkipForwardAlt;