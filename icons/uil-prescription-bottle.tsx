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
const UilPrescriptionBottle = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,2H5A2,2,0,0,0,3,4V6A2,2,0,0,0,5,8V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8a2,2,0,0,0,2-2V4A2,2,0,0,0,19,2ZM17,16H11V12h6Zm0-6H10a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h7v1a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17ZM5,6V4H19V6Z'
  }));
};

export default UilPrescriptionBottle;