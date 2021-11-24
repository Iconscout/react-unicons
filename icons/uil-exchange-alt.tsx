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
const UilExchangeAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.71,9.29l-4-4a1,1,0,0,0-1.42,1.42L18.59,9H7a1,1,0,0,0,0,2H21a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,9.29ZM17,13H3a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,15H17a1,1,0,0,0,0-2Z'
  }));
};

export default UilExchangeAlt;