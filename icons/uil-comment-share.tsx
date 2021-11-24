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
const UilCommentShare = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.06,13.51a1,1,0,0,0-1.11.87A7,7,0,0,1,11,20.5H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.72a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,19.12L2.29,20.79a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22.5h8a9,9,0,0,0,8.93-7.88A1,1,0,0,0,19.06,13.51ZM19,7.5a2,2,0,0,0-1.18.39l-1.75-.8L18,6.21a2,2,0,0,0,1,.29,2,2,0,1,0-2-2l-1.9.87A2,2,0,0,0,14,5a2,2,0,0,0,0,4,2,2,0,0,0,.93-.24l2.09,1A2,2,0,1,0,19,7.5Z'
  }));
};

export default UilCommentShare;