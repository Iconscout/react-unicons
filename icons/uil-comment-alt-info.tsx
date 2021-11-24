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
const UilCommentAltInfo = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M5,11a1,1,0,0,0,1-1V6A1,1,0,0,0,4,6v4A1,1,0,0,0,5,11ZM4.29,3.71a1,1,0,0,0,1.09.21,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33A.84.84,0,0,0,6,3a1,1,0,0,0-.29-.71,1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21A1,1,0,0,0,4,3a1,1,0,0,0,.08.38A1.15,1.15,0,0,0,4.29,3.71ZM17,6H9A1,1,0,0,0,9,8h8a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H7a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,19,22a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,20,21V9A3,3,0,0,0,17,6Z'
  }));
};

export default UilCommentAltInfo;