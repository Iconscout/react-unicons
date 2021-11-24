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
const UilCloudSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16.71,16.29h0l-13-13A1,1,0,0,0,2.29,4.71L5.65,8.06a7,7,0,0,0-.59,2A4,4,0,0,0,6,18h9.59l2.7,2.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM6,16a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,.2-1.39L13.59,16ZM18.42,8.22A7,7,0,0,0,12,4a6.74,6.74,0,0,0-2.32.4,1,1,0,0,0,.66,1.88A4.91,4.91,0,0,1,12,6a5,5,0,0,1,4.73,3.39,1,1,0,0,0,.78.67,3,3,0,0,1,1.85,4.79,1,1,0,0,0,.16,1.4,1,1,0,0,0,.62.22,1,1,0,0,0,.78-.38,5,5,0,0,0-2.5-7.87Z'
  }));
};

export default UilCloudSlash;