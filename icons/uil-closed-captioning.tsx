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
const UilClosedCaptioning = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M11.24,13.14a1,1,0,0,0-1.37.36,1,1,0,0,1-1.58.19A.93.93,0,0,1,8,13V11a1,1,0,0,1,1.88-.48,1,1,0,0,0,1.37.34,1,1,0,0,0,.34-1.38,3.08,3.08,0,0,0-.46-.59A3,3,0,0,0,9,8a3,3,0,0,0-3,3v2a3,3,0,0,0,5.59,1.5A1,1,0,0,0,11.24,13.14Zm6,0a1,1,0,0,0-1.37.36,1,1,0,0,1-1.58.19A.93.93,0,0,1,14,13V11a1,1,0,0,1,1.88-.48,1,1,0,0,0,1.37.34,1,1,0,0,0,.34-1.38,3.08,3.08,0,0,0-.46-.59A3,3,0,0,0,15,8a3,3,0,0,0-3,3v2a3,3,0,0,0,5.59,1.5A1,1,0,0,0,17.24,13.14ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

export default UilClosedCaptioning;