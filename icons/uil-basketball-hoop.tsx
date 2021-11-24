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
const UilBasketballHoop = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18,10H6a1,1,0,0,0,0,2H7v9a1,1,0,0,0,2,0V20h2v1a1,1,0,0,0,2,0V20h2v1a1,1,0,0,0,2,0V12h1a1,1,0,0,0,0-2Zm-7,8H9V16h2Zm0-4H9V12h2Zm4,4H13V16h2Zm0-4H13V12h2ZM20,2H4A3,3,0,0,0,1,5v8a3,3,0,0,0,3,3,1,1,0,0,0,0-2,1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,0,0,3-3V5A3,3,0,0,0,20,2ZM14,8a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z'
  }));
};

export default UilBasketballHoop;