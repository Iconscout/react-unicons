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
const UilCommentAltLock = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,10V8a3,3,0,0,0-2-2.82V4A3,3,0,0,0,4,4V5.18A3,3,0,0,0,2,8v2a3,3,0,0,0,3,3H9A3,3,0,0,0,12,10ZM6,4A1,1,0,0,1,8,4V5H6ZM4,10V8A1,1,0,0,1,5,7H9a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H5A1,1,0,0,1,4,10ZM19,7H15a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H9a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,21,23a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,22,22V10A3,3,0,0,0,19,7Z'
  }));
};

export default UilCommentAltLock;