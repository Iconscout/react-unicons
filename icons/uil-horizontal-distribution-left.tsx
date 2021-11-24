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
const UilHorizontalDistributionLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M11,4H6V3A1,1,0,0,0,4,3V21a1,1,0,0,0,2,0V20h5a1,1,0,0,0,1-1V5A1,1,0,0,0,11,4ZM10,18H6V6h4ZM19,5H16V3a1,1,0,0,0-2,0V21a1,1,0,0,0,2,0V19h3a1,1,0,0,0,1-1V6A1,1,0,0,0,19,5ZM18,17H16V7h2Z'
  }));
};

export default UilHorizontalDistributionLeft;