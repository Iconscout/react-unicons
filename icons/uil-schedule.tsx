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
const UilSchedule = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z'
  }));
};

export default UilSchedule;