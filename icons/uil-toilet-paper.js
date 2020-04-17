import React from 'react';
import PropTypes from 'prop-types';

const UilToiletPaper = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M22.25977,20.35693A7.52338,7.52338,0,0,1,20.5,15.45215V7.99268c0-3.3086-2.24316-6-5-6h-9c-2.75684,0-5,2.6914-5,6s2.24316,6,5,6h3v1.45947a9.52683,9.52683,0,0,0,2.24023,6.20556,1.00118,1.00118,0,0,0,.75977.34961h9a1.00028,1.00028,0,0,0,.75977-1.65039ZM6.5,11.99268c-1.6543,0-3-1.79444-3-4s1.3457-4,3-4,3,1.79443,3,4S8.1543,11.99268,6.5,11.99268Zm6.479,8.01464A7.58021,7.58021,0,0,1,11.5,15.45215v-7c0-.0282-.01379-.05188-.016-.07947.00665-.12628.016-.25171.016-.38a6.68056,6.68056,0,0,0-1.28381-4H15.5c1.6543,0,3,1.79443,3,4v7.45947a9.71056,9.71056,0,0,0,1.11768,4.55517ZM6.5,6.74286a1.14613,1.14613,0,0,0-1,1.25,1.14613,1.14613,0,0,0,1,1.25,1.14613,1.14613,0,0,0,1-1.25A1.14613,1.14613,0,0,0,6.5,6.74286Z'
  }));
};

UilToiletPaper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilToiletPaper.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilToiletPaper;