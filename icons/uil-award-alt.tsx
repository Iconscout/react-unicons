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
const UilAwardAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,1A7,7,0,0,0,7,12.89V22a1,1,0,0,0,1.45.89L12,21.12l3.55,1.77A1,1,0,0,0,16,23a1,1,0,0,0,.53-.15A1,1,0,0,0,17,22V12.89A7,7,0,0,0,12,1Zm3,19.38-2.55-1.27a1,1,0,0,0-.9,0L9,20.38V14.32a7,7,0,0,0,2,.6V16a1,1,0,0,0,2,0V14.92a7,7,0,0,0,2-.6ZM12,13a5,5,0,1,1,5-5A5,5,0,0,1,12,13Z'
  }));
};

export default UilAwardAlt;