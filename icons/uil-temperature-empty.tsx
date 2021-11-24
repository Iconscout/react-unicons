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
const UilTemperatureEmpty = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,15a2,2,0,1,0,2,2A2,2,0,0,0,12,15Zm4.5-2V5.5a4.5,4.5,0,0,0-9,0V13a6,6,0,0,0,3.21,9.83A7,7,0,0,0,12,23,6,6,0,0,0,16.5,13Zm-2,7.07a4,4,0,0,1-5.32-6,1,1,0,0,0,.3-.71V5.5a2.5,2.5,0,0,1,5,0v7.94a1,1,0,0,0,.3.71,4,4,0,0,1-.28,6Z'
  }));
};

export default UilTemperatureEmpty;