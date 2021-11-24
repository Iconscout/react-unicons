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
const UilIllustration = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.9,9.6c-0.2-0.5-0.8-0.7-1.3-0.5l0,0l-2.9,1.4l-2.1-2.1l-2.1-2.1l1.4-2.9c0.2-0.5,0-1.1-0.5-1.3c-0.5-0.2-1.1,0-1.3,0.5l-1.5,3.1l-6.4,1C4.8,6.8,4.5,7.1,4.4,7.5L2,19.1c-0.1,0.3,0,0.7,0.3,0.9L4,21.7C4.2,21.9,4.5,22,4.7,22c0.1,0,0.1,0,0.2,0l11.6-2.4c0.4-0.1,0.7-0.4,0.8-0.8l1-6.4l3.1-1.5C21.9,10.7,22.1,10.1,21.9,9.6z M15.4,17.8l-9.8,2l3.7-3.7c1.5,0.7,3.3,0.1,4-1.4s0.1-3.3-1.4-4c-1.1-0.5-2.5-0.3-3.4,0.6v0c-0.9,0.9-1.1,2.3-0.6,3.4l-3.7,3.7l2-9.8L12,7.6l2.2,2.2l2.2,2.2L15.4,17.8z M9.6,13.4c0-0.3,0.1-0.5,0.3-0.7v0c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0C9.7,13.9,9.6,13.6,9.6,13.4z'
  }));
};

export default UilIllustration;