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
const UilCropAltRotateLeft = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M9.71,16.29a1,1,0,0,0-1.42,1.42l.3.29H8a3,3,0,0,1-3-3V13a1,1,0,0,0-2,0v2a5,5,0,0,0,5,5h.59l-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,0-1.42ZM20,12H19V5a1,1,0,0,0-1-1H11V3A1,1,0,0,0,9,3V4H8A1,1,0,0,0,8,6H9v7a1,1,0,0,0,1,1h7v1a1,1,0,0,0,2,0V14h1a1,1,0,0,0,0-2Zm-3,0H11V6h6Z'
  }));
};

export default UilCropAltRotateLeft;