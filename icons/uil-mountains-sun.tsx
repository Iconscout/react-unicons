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
const UilMountainsSun = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18,10a4,4,0,1,0-4-4A4,4,0,0,0,18,10Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,18,4Zm-1.15,8.47a1,1,0,0,0-1.7,0l-1,1.63L10.86,8.5a1,1,0,0,0-1.72,0l-7,12A1,1,0,0,0,3,22H21a1,1,0,0,0,.85-1.53ZM10.45,20H4.74L10,11l2.94,5-1.25,2Zm2.35,0,1.49-2.37L15,16.57h0L16,14.89,19.2,20Z'
  }));
};

export default UilMountainsSun;