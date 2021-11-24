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
const UilBoltAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.89,9.55A1,1,0,0,0,19,9H14V3a1,1,0,0,0-.69-1,1,1,0,0,0-1.12.36l-8,11a1,1,0,0,0-.08,1A1,1,0,0,0,5,15h5v6a1,1,0,0,0,.69.95A1.12,1.12,0,0,0,11,22a1,1,0,0,0,.81-.41l8-11A1,1,0,0,0,19.89,9.55ZM12,17.92V14a1,1,0,0,0-1-1H7l5-6.92V10a1,1,0,0,0,1,1h4Z'
  }));
};

export default UilBoltAlt;