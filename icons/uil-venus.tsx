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
const UilVenus = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,9a7,7,0,1,0-8,6.92V18H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2H13V15.92A7,7,0,0,0,19,9Zm-7,5a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z'
  }));
};

export default UilVenus;