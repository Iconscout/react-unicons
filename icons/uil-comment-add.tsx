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
const UilCommentAdd = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5,8A1,1,0,0,0,7,8V7H8A1,1,0,0,0,8,5H7V4A1,1,0,0,0,5,4V5H4A1,1,0,0,0,4,7H5ZM18,5H12a1,1,0,0,0,0,2h6a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H8a1,1,0,0,1-1-1V12a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,20,21a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,21,20V8A3,3,0,0,0,18,5Z'
  }));
};

export default UilCommentAdd;