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
const UilMoneyStack = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22,17H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Zm0,4H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2ZM6,7A1,1,0,1,0,7,8,1,1,0,0,0,6,7ZM20,1H4A3,3,0,0,0,1,4v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM12,5a3,3,0,1,0,3,3A3,3,0,0,0,12,5Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,9Zm6-2a1,1,0,1,0,1,1A1,1,0,0,0,18,7Z'
  }));
};

export default UilMoneyStack;