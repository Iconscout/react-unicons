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
const UilImage = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,18a1,1,0,0,1-1-1V14.58l3.3-3.29a1,1,0,0,1,1.4,0L15.41,18Zm15-1a1,1,0,0,1-1,1h-.77l-3.81-3.83.88-.88a1,1,0,0,1,1.4,0L20,16.58Zm0-3.24-1.88-1.87a3.06,3.06,0,0,0-4.24,0l-.88.88L10.12,9.89a3.06,3.06,0,0,0-4.24,0L4,11.76V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1Z'
  }));
};

export default UilImage;