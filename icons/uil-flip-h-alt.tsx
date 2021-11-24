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
const UilFlipHAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.21,5.7a1,1,0,0,0,.24,0l1.94-.49A1,1,0,0,0,16.12,4a1,1,0,0,0-1.21-.73L13,3.73a1,1,0,0,0,.24,2ZM9.51,9h-2a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2Zm4,0a1,1,0,1,0,0,2h2a1,1,0,0,0,0-2ZM7.39,7.15l.24,0,1.94-.48A1,1,0,0,0,9.09,4.7l-1.94.48a1,1,0,0,0,.24,2ZM4,10.51a1,1,0,0,0,1-1v-2a1,1,0,0,0-2,0v2A1,1,0,0,0,4,10.51Zm16.62-8.3A1,1,0,0,0,19.76,2l-1,.24a1,1,0,0,0-.73,1.21,1,1,0,0,0,1,.76A1,1,0,0,0,21,4V3A1,1,0,0,0,20.62,2.21ZM20,7a1,1,0,0,0-1,1V9.14A1,1,0,0,0,19.51,11H20a1,1,0,0,0,1-1V8A1,1,0,0,0,20,7Zm0,6H4a1,1,0,0,0-1,1v3a1,1,0,0,0,.76,1l16,4A1,1,0,0,0,20,22a1,1,0,0,0,1-1V14A1,1,0,0,0,20,13Zm-1,6.72L5,16.22V15H19Z'
  }));
};

export default UilFlipHAlt;