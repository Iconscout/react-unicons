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
const UilPanelAdd = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18,10H14V3a1,1,0,0,0-1-1H8A1,1,0,0,0,7,3V8H3A1,1,0,0,0,2,9V21a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11A1,1,0,0,0,18,10ZM7,20H4V10H7Zm5,0H9V4h3Zm5,0H14V12h3ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z'
  }));
};

export default UilPanelAdd;