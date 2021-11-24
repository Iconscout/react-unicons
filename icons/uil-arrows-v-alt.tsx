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
const UilArrowsVAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M10.21,6.21l.79-.8V10a1,1,0,0,0,2,0V5.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42Zm3.58,11.58-.79.8V14a1,1,0,0,0-2,0v4.59l-.79-.8a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,0,0-1.42-1.42Z'
  }));
};

export default UilArrowsVAlt;