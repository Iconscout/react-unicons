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
const UilEuro = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.2,17.41A6,6,0,0,1,14.46,20c-2.68,0-5-2-6-5H14a1,1,0,0,0,0-2H8.05c0-.33-.05-.67-.05-1s0-.67.05-1H14a1,1,0,0,0,0-2H8.47c1-3,3.31-5,6-5A6,6,0,0,1,19.2,6.59a1,1,0,1,0,1.6-1.18A7.92,7.92,0,0,0,14.46,2c-3.76,0-7,2.84-8.07,7H4a1,1,0,0,0,0,2H6.05c0,.33,0,.67,0,1s0,.67,0,1H4a1,1,0,0,0,0,2H6.39c1.09,4.16,4.31,7,8.07,7a7.92,7.92,0,0,0,6.34-3.41,1,1,0,0,0-1.6-1.18Z'
  }));
};

export default UilEuro;