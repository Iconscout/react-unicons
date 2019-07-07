import React from 'react';
import PropTypes from 'prop-types';

const UilPrevious = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M13.41,12l3.3-3.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0,0,1.42l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM8,7A1,1,0,0,0,7,8v8a1,1,0,0,0,2,0V8A1,1,0,0,0,8,7Z'
  }));
};

UilPrevious.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPrevious.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPrevious;