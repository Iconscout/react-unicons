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
const UilCloudMeatball = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14.5,15.92h-.77l.39-.67a1,1,0,0,0-1.74-1l-.38.67-.38-.67a1,1,0,0,0-1.74,1l.39.67H9.5a1,1,0,0,0,0,2h.77l-.39.66a1,1,0,0,0,1.74,1l.38-.66.38.66a1,1,0,0,0,1.74-1l-.39-.66h.77a1,1,0,0,0,0-2Zm3.92-7.79A7,7,0,0,0,5.06,10,4,4,0,0,0,2,13.92a4,4,0,0,0,3.34,3.93l.16,0a1,1,0,0,0,.16-2,2,2,0,0,1-1.66-2,2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66,3,3,0,0,1,.62,5.72,1,1,0,1,0,.74,1.85,5,5,0,0,0-.45-9.41Z'
  }));
};

export default UilCloudMeatball;