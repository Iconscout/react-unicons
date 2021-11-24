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
const UilRotate360 = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,6C6.3,6,2,8.15,2,11c0,2.45,3.19,4.38,7.71,4.88l-.42.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-2-2a1,1,0,0,0-1.42,1.42l.12.11C6,13.34,4,12,4,11c0-1.22,3.12-3,8-3s8,1.78,8,3c0,.83-1.45,2-4.21,2.6A1,1,0,0,0,15,14.79a1,1,0,0,0,1.19.77C19.84,14.76,22,13.06,22,11,22,8.15,17.7,6,12,6Z'
  }));
};

export default UilRotate360;