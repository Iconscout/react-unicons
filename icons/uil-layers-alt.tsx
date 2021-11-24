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
const UilLayersAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21,2H9A1,1,0,0,0,8,3V7H6A1,1,0,0,0,5,8v4H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4a1,1,0,0,0,1-1V16h4a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM10,20H4V14h6Zm5-3H12V13a1,1,0,0,0-1-1H7V9h8Zm5-3H17V8a1,1,0,0,0-1-1H10V4H20Z'
  }));
};

export default UilLayersAlt;