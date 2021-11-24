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
const UilPanoramaHAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.46,5.83A1,1,0,0,0,20.7,5l-.11,0A37.49,37.49,0,0,0,3.41,5L3.3,5a1,1,0,0,0-.76.8,35.52,35.52,0,0,0,0,12.34,1,1,0,0,0,.76.8l.11,0A37.62,37.62,0,0,0,12,20a37.62,37.62,0,0,0,8.59-1l.11,0a1,1,0,0,0,.76-.8A35.52,35.52,0,0,0,21.46,5.83ZM19.6,17.17a35.42,35.42,0,0,1-15.2,0,33.2,33.2,0,0,1,0-10.34,35.42,35.42,0,0,1,15.2,0A33.2,33.2,0,0,1,19.6,17.17Z'
  }));
};

export default UilPanoramaHAlt;