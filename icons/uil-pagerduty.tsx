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
const UilPagerduty = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,3c-1.6-0.8-2.7-1-5.2-1H6v12.1h5.8c2.3,0,4-0.1,5.5-1.1c1.6-1.1,2.6-3,2.5-5C19.9,5.9,18.8,4,17,3z M12.4,11.6H8.9v-7l3.3,0c3,0,4.5,1,4.5,3.4C16.8,10.6,14.9,11.6,12.4,11.6z M6,22h2.9v-5.3H6V22z'
  }));
};

export default UilPagerduty;