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
const UilMusicNote = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19.12,2.21A1,1,0,0,0,18.26,2l-8,2A1,1,0,0,0,9.5,5V15.35A3.45,3.45,0,0,0,8,15a3.5,3.5,0,1,0,3.5,3.5V10.78L18.74,9l.07,0L19,8.85l.15-.1a.93.93,0,0,0,.13-.15.78.78,0,0,0,.1-.15.55.55,0,0,0,.06-.18.58.58,0,0,0,0-.19.24.24,0,0,0,0-.08V3A1,1,0,0,0,19.12,2.21ZM8,20a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,8,20ZM17.5,7.22l-6,1.5V5.78l6-1.5Z'
  }));
};

export default UilMusicNote;