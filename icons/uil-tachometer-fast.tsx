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
const UilTachometerFast = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M15.29,10.29l-2.78,2.78A2.09,2.09,0,0,0,12,13a2,2,0,0,0-2,2,2.09,2.09,0,0,0,.07.51l-.78.78a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.78-.78A2.09,2.09,0,0,0,12,17a2,2,0,0,0,2-2,2.09,2.09,0,0,0-.07-.51l2.78-2.78a1,1,0,0,0-1.42-1.42ZM12,4A10,10,0,0,0,2,14a9.91,9.91,0,0,0,1.69,5.56,1,1,0,0,0,1.66-1.12,8,8,0,1,1,13.3,0,1,1,0,0,0,.27,1.39,1,1,0,0,0,.56.17,1,1,0,0,0,.83-.44A9.91,9.91,0,0,0,22,14,10,10,0,0,0,12,4Z'
  }));
};

export default UilTachometerFast;