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
const UilCornerRightDown = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.71,13.35a1,1,0,0,0-1.42,0l-2.92,2.92v-8a4,4,0,0,0-4-4H3a1,1,0,1,0,0,2H13.37a2,2,0,0,1,2,2v8l-2.92-2.92A1,1,0,0,0,11,14.76l4.62,4.63a1.19,1.19,0,0,0,.33.22.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.22l4.63-4.63A1,1,0,0,0,21.71,13.35Z'
  }));
};

export default UilCornerRightDown;