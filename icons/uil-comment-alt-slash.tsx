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
const UilCommentAltSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10.66,6H17a1,1,0,0,1,1,1v6.34a1,1,0,1,0,2,0V7a3,3,0,0,0-3-3H10.66a1,1,0,0,0,0,2ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71l2,2A3,3,0,0,0,4,7V19a1,1,0,0,0,.62.92A.84.84,0,0,0,5,20a1,1,0,0,0,.71-.29L8.41,17h7.18l4.7,4.71a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM8,15a1,1,0,0,0-.71.29L6,16.59V7.41L13.59,15Z'
  }));
};

export default UilCommentAltSlash;