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
const UilMoneyInsert = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10.46,6,11,5.41V9a1,1,0,0,0,2,0V5.41l.54.55A1,1,0,0,0,15,6a1,1,0,0,0,0-1.42L12.71,2.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21L9,4.54A1,1,0,0,0,10.46,6ZM12,12a3,3,0,1,0,3,3A3,3,0,0,0,12,12Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,16ZM5,15a1,1,0,1,0,1-1A1,1,0,0,0,5,15Zm14,0a1,1,0,1,0-1,1A1,1,0,0,0,19,15Zm1-7H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H8A1,1,0,0,0,8,8H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V11A3,3,0,0,0,20,8Z'
  }));
};

export default UilMoneyInsert;