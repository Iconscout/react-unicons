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
const UilCloudTimes = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18.42,8.22A7,7,0,0,0,5.06,10.11,4,4,0,0,0,6,18a1,1,0,0,0,0-2,2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,0,0,.5,1.94,5,5,0,0,0,.17-9.62Zm-3.71,6.07a1,1,0,0,0-1.42,0L12,15.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L10.59,17l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,18.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,17l1.3-1.29A1,1,0,0,0,14.71,14.29Z'
  }));
};

export default UilCloudTimes;