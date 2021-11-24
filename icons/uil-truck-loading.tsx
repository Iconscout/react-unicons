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
const UilTruckLoading = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22,16H19.82A3,3,0,0,0,20,15V10a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5a3,3,0,0,0,.18,1H7a1,1,0,0,1-1-1V5A3,3,0,0,0,3,2H2A1,1,0,0,0,2,4H3A1,1,0,0,1,4,5V15a3,3,0,0,0,2.22,2.88,3,3,0,1,0,5.6.12h3.36a3,3,0,1,0,5.64,0H22a1,1,0,0,0,0-2ZM9,20a1,1,0,1,1,1-1A1,1,0,0,1,9,20Zm2-4a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v5a1,1,0,0,1-1,1Zm7,4a1,1,0,1,1,1-1A1,1,0,0,1,18,20Z'
  }));
};

export default UilTruckLoading;