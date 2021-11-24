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
const UilXAdd = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14.71,7.29a1,1,0,0,0-1.42,0L11,9.59,8.71,7.29A1,1,0,1,0,7.29,8.71L9.59,11l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,12.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L12.41,11l2.3-2.29A1,1,0,0,0,14.71,7.29ZM7,18a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4,1,1,0,0,0,7,2,5,5,0,0,0,2,7v8a5,5,0,0,0,5,5,1,1,0,0,0,0-2ZM18,7v6a1,1,0,0,0,2,0V7a5,5,0,0,0-5-5,1,1,0,0,0,0,2A3,3,0,0,1,18,7Zm3,11H20V17a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2Z'
  }));
};

export default UilXAdd;