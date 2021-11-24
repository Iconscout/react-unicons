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
const UilMoneyBillStack = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20,1H4A3,3,0,0,0,1,4V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1ZM8,21H4a1,1,0,0,1-1-1V18.82A3,3,0,0,0,4,19H8Zm0-4H4a1,1,0,0,1-1-1V14.82A3,3,0,0,0,4,15H8Zm0-4H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H8Zm6,8H10V15h4Zm0-8H10V3h4Zm7,7a1,1,0,0,1-1,1H16V19h4a3,3,0,0,0,1-.18Zm0-4a1,1,0,0,1-1,1H16V15h4a3,3,0,0,0,1-.18Zm0-4a1,1,0,0,1-1,1H16V3h4a1,1,0,0,1,1,1ZM18,7a1,1,0,1,0,1,1A1,1,0,0,0,18,7ZM6,9A1,1,0,1,0,5,8,1,1,0,0,0,6,9Z'
  }));
};

export default UilMoneyBillStack;