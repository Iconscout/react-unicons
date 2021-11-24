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
const UilCommentAltHeart = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,6.35a3.07,3.07,0,0,0-3.54.53,3,3,0,0,0,0,4.24L11.29,14a1,1,0,0,0,1.42,0l2.83-2.83a3,3,0,0,0,0-4.24A3.07,3.07,0,0,0,12,6.35Zm2.12,3.36L12,11.83,9.88,9.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0,1,1,0,0,0,1.42,0,1,1,0,0,1,1.41,0A1,1,0,0,1,14.12,9.71ZM19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z'
  }));
};

export default UilCommentAltHeart;