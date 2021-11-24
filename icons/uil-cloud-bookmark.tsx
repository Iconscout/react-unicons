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
const UilCloudBookmark = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M15,11H10a1,1,0,0,0-1,1v8a1,1,0,0,0,1.56.83l1.94-1.3,1.89,1.26A1,1,0,0,0,15,21a1,1,0,0,0,.44-.1A1,1,0,0,0,16,20V12A1,1,0,0,0,15,11Zm-1,7.12-.94-.63a1,1,0,0,0-1.12,0l-.94.64V13h3Zm4.42-10.9A7,7,0,0,0,5.06,9.11,4,4,0,0,0,6,17a1,1,0,0,0,0-2,2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,1,5.53,1,1,0,1,0,1,1.74A5,5,0,0,0,22,12,5,5,0,0,0,18.42,7.22Z'
  }));
};

export default UilCloudBookmark;