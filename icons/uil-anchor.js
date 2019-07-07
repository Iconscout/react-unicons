import React from 'react';
import PropTypes from 'prop-types';

const UilAnchor = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,13H17a1,1,0,0,0,0,2h.91A6,6,0,0,1,13,19.91V11h1a1,1,0,0,0,0-2H13V7.82a3,3,0,1,0-2,0V9H10a1,1,0,0,0,0,2h1v8.91A6,6,0,0,1,6.09,15H7a1,1,0,0,0,0-2H5a1,1,0,0,0-1,1,8,8,0,0,0,16,0A1,1,0,0,0,19,13ZM12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Z'
  }));
};

UilAnchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAnchor.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAnchor;