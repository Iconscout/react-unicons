import React from 'react';
import PropTypes from 'prop-types';

const UilSignLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16,5H13V3a1,1,0,0,0-2,0V5H6a1,1,0,0,0-.78.38l-2,2.5a1,1,0,0,0,0,1.24l2,2.5A1,1,0,0,0,6,12h5v8H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V12h3a1,1,0,0,0,1-1V6A1,1,0,0,0,16,5Zm-1,5H6.48L5.28,8.5,6.48,7H15Z'
  }));
};

UilSignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSignLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSignLeft;