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
const UilEnvelopeLock = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.5,7.44V6.26a3,3,0,1,0-6,0V7.44a3,3,0,0,0-2,2.82v2a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3v-2A3,3,0,0,0,20.5,7.44Zm-4-1.18a1,1,0,1,1,2,0v1h-2Zm4,6a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1v-2a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.67l5.88,5.88a1,1,0,0,0,1.42-1.41L4.91,8.26H10.5a1,1,0,0,0,0-2h-6a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3v-1A1,1,0,0,0,20.5,17.26Z'
  }));
};

export default UilEnvelopeLock;