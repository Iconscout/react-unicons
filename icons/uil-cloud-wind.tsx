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
const UilCloudWind = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5,18a1,1,0,1,0,1,1A1,1,0,0,0,5,18Zm14-4H12a1,1,0,0,0,0,2h7a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6Zm-5-3a1,1,0,0,0,1,1h4a3,3,0,0,0,3-3,1,1,0,0,0-2,0,1,1,0,0,1-1,1H15A1,1,0,0,0,14,11Zm-4,4a1,1,0,0,0-1-1H6a2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,1,0,1.9-.64A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16H9A1,1,0,0,0,10,15Zm0-4a1,1,0,1,0,1-1A1,1,0,0,0,10,11Zm4,7H9a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0A3,3,0,0,0,14,18Z'
  }));
};

export default UilCloudWind;