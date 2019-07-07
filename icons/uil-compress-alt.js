import React from 'react';
import PropTypes from 'prop-types';

const UilCompressAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.71,2.29a1,1,0,0,0-1.42,0L14.5,8.09V6.5a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54,1,1,0,0,0,.38.08h4a1,1,0,0,0,0-2H15.91l5.8-5.79A1,1,0,0,0,21.71,2.29ZM10.88,12.58a1,1,0,0,0-.38-.08h-4a1,1,0,0,0,0,2H8.09l-5.8,5.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5.79-5.8V17.5a1,1,0,0,0,2,0v-4a1,1,0,0,0-.08-.38A1,1,0,0,0,10.88,12.58Z'
  }));
};

UilCompressAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCompressAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCompressAlt;