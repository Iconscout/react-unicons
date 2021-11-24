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
const UilHorizontalAlignLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,10H16V7a1,1,0,0,0-1-1H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,2,0V18H21a1,1,0,0,0,1-1V11A1,1,0,0,0,21,10ZM4,8H14v2H4Zm16,8H4V12H20Z'
  }));
};

export default UilHorizontalAlignLeft;