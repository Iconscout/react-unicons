import React from 'react';
import PropTypes from 'prop-types';

const UilAlignCenterJustify = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,15H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM17,19H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2ZM21,7H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilAlignCenterJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAlignCenterJustify.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAlignCenterJustify;