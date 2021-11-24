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
const UilHtml5 = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3.1825,2.00012,4.78735,20.00079l7.20191,1.99933,7.22168-2.00207L20.8175,2.00012ZM17.32507,7.88739H8.87683l.20178,2.26074h8.04554l-.60584,6.778L12,18.17834v.00043l-.01013.00275L7.46753,16.92615,7.1582,13.45972H9.37439l.1571,1.76074,2.45874.66388.00208-.00049v-.00018l2.46228-.66461.25635-2.86323H7.05957L6.46411,5.67969h11.0586Z'
  }));
};

export default UilHtml5;