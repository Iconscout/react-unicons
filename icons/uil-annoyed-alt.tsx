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
const UilAnnoyedAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14.66,13.56l-4.19,1.5A1,1,0,0,0,10.8,17a1,1,0,0,0,.34-.06l4.2-1.5a1,1,0,1,0-.68-1.88Zm-4-5a1,1,0,0,0-1.41,0,1,1,0,0,1-1.42,0,1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42,3,3,0,0,0,4.24,0A1,1,0,0,0,10.62,8.54Zm7,0a1,1,0,0,0-1.41,0,1,1,0,0,1-1.42,0,1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42,3,3,0,0,0,4.24,0A1,1,0,0,0,17.62,8.54ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

export default UilAnnoyedAlt;