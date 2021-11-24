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
const UilOctagon = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M21.71,7.57,16.44,2.29A1.05,1.05,0,0,0,15.73,2H8.27a1.05,1.05,0,0,0-.71.29L2.29,7.57a1,1,0,0,0-.29.7v7.46a1,1,0,0,0,.29.7l5.27,5.28a1.05,1.05,0,0,0,.71.29h7.46a1.05,1.05,0,0,0,.71-.29l5.27-5.28a1,1,0,0,0,.29-.7V8.27A1,1,0,0,0,21.71,7.57ZM20,15.31,15.31,20H8.69L4,15.31V8.69L8.69,4h6.62L20,8.69Z'
  }));
};

export default UilOctagon;