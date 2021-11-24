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
const UilRulerCombined = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V10H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,8H18V7a1,1,0,0,0-2,0V8H14V7a1,1,0,0,0-2,0V8H10V7A1,1,0,0,0,8,7V8H7a1,1,0,0,0,0,2H8v2H7a1,1,0,0,0,0,2H8v2H7a1,1,0,0,0,0,2H8v2H4V4H20Z'
  }));
};

export default UilRulerCombined;