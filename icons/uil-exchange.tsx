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
const UilExchange = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z'
  }));
};

export default UilExchange;