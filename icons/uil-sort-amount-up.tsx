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
const UilSortAmountUp = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2,2A1,1,0,0,0,3.71,9.71L4,9.41V17a1,1,0,0,0,2,0V9.41l.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM11,8H21a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm10,8H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

export default UilSortAmountUp;