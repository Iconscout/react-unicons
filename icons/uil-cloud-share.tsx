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
const UilCloudShare = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14.5,15a2,2,0,1,0-2-2l-1.9.87a2,2,0,0,0-1.1-.33,2,2,0,0,0,0,4,1.88,1.88,0,0,0,.92-.24l2.1,1a2,2,0,1,0,.8-1.84l-1.75-.8,1.91-.88A2,2,0,0,0,14.5,15Zm3.92-7.78A7,7,0,0,0,5.06,9.11a4,4,0,0,0-.38,7.66,1.13,1.13,0,0,0,.32.05,1,1,0,0,0,.32-2A2,2,0,0,1,4,13a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,1,5.53,1,1,0,1,0,1,1.74A5,5,0,0,0,22,12,5,5,0,0,0,18.42,7.22Z'
  }));
};

export default UilCloudShare;