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
const UilElipsisDoubleVAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M8.5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.6,17,8.5,17z M15.5,7c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S14.4,7,15.5,7z M8.5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.6,10,8.5,10z M15.5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.6,10,15.5,10z M15.5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S16.6,17,15.5,17z M8.5,3c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.6,3,8.5,3z'
  }));
};

export default UilElipsisDoubleVAlt;