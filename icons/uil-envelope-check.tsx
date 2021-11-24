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
const UilEnvelopeCheck = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16.29,8.71a1,1,0,0,0,1.42,0l4-4a1,1,0,1,0-1.42-1.42L17,6.59l-1.29-1.3a1,1,0,0,0-1.42,1.42ZM21,8a1,1,0,0,0-1,1v9a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.41L9.88,14.3a3,3,0,0,0,2.11.87,3.08,3.08,0,0,0,2.16-.9l1.72-1.72a1,1,0,1,0-1.42-1.42L12.7,12.88a1,1,0,0,1-1.4,0L5.41,7H11a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A1,1,0,0,0,21,8Z'
  }));
};

export default UilEnvelopeCheck;