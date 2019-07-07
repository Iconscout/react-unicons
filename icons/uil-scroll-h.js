import React from 'react';
import PropTypes from 'prop-types';

const UilScrollH = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M4.71,6.29A1,1,0,0,0,3.29,7.71L7.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,0-1.42ZM16.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0,0,1.42l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
  }));
};

UilScrollH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilScrollH.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilScrollH;