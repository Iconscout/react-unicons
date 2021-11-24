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
const UilSurprise = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM10,9a1,1,0,1,0-1,1A1,1,0,0,0,10,9Zm5-1a1,1,0,1,0,1,1A1,1,0,0,0,15,8Zm-3,3a3.39,3.39,0,0,0-3.25,3.5A3.39,3.39,0,0,0,12,18a3.39,3.39,0,0,0,3.25-3.5A3.39,3.39,0,0,0,12,11Zm0,5a1.39,1.39,0,0,1-1.25-1.5A1.39,1.39,0,0,1,12,13a1.39,1.39,0,0,1,1.25,1.5A1.39,1.39,0,0,1,12,16Z'
  }));
};

export default UilSurprise;