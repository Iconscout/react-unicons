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
const UilKeySkeletonAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.71,6.53,20.29,5.12l1.42-1.41a1,1,0,1,0-1.42-1.42L9.75,12.83a5,5,0,1,0,1.42,1.42l4.88-4.89,1.41,1.42a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L17.46,8l1.42-1.42L20.29,8a1,1,0,0,0,.71.29A1,1,0,0,0,21.71,8,1,1,0,0,0,21.71,6.53ZM7,20a3,3,0,1,1,3-3A3,3,0,0,1,7,20Z'
  }));
};

export default UilKeySkeletonAlt;