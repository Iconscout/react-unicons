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
const UilVerticalAlignCenter = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,11H18V6a1,1,0,0,0-1-1H14V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3v8H3a1,1,0,0,0,0,2H6v8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V19h3a1,1,0,0,0,1-1V13h3a1,1,0,0,0,0-2Zm-9,9H8V4h4Zm4-3H14V7h2Z'
  }));
};

export default UilVerticalAlignCenter;