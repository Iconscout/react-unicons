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
const UilCapsule = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.5,4.5a5.12,5.12,0,0,0-7.24,0L4.5,12.26a5.12,5.12,0,1,0,7.24,7.24l7.76-7.76A5.12,5.12,0,0,0,19.5,4.5ZM10.32,18.09a3.21,3.21,0,0,1-4.41,0,3.13,3.13,0,0,1,0-4.41L9.09,10.5l4.41,4.41Zm7.77-7.77L14.91,13.5,10.5,9.09l3.18-3.18a3.12,3.12,0,0,1,4.41,4.41Z'
  }));
};

export default UilCapsule;