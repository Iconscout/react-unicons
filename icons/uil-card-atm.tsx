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
const UilCardAtm = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,4.5H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,4.5Zm1,12a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-9a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-4-6a3,3,0,0,0-1.51.42,3,3,0,1,0,0,5.16A3,3,0,1,0,16,10.5Zm-2.83,4a1,1,0,0,1-.17,0,1,1,0,0,1,0-2,1,1,0,0,1,.17,0,2.8,2.8,0,0,0,0,1.92Zm2.83,0a1,1,0,1,1,1-1A1,1,0,0,1,16,14.5Z'
  }));
};

export default UilCardAtm;