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
const UilThSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22.71,21.29l-1-1h0l-6-6h0l-6-6h0l-6-6h0l-1-1A1,1,0,0,0,1.29,2.71l.71.7V21a1,1,0,0,0,1,1H20.59l.7.71a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,21.29ZM4,5.41,6.59,8H4ZM8,20H4V16H8Zm0-6H4V10H8Zm2-2.59L12.59,14H10ZM14,20H10V16h4Zm2,0V17.41L18.59,20ZM8.67,4H14V9a1,1,0,0,0,1,1h5v5.33a1,1,0,1,0,2,0V3a1,1,0,0,0-1-1H8.67a1,1,0,0,0,0,2ZM16,4h4V8H16Z'
  }));
};

export default UilThSlash;