import React from 'react';
import PropTypes from 'prop-types';

const UilClapperBoard = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM16.09,4l-4,4H7.91l4-4ZM4,5A1,1,0,0,1,5,4H9.09l-4,4H4ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H14.91l4-4H19a1,1,0,0,1,1,1Z'
  }));
};

UilClapperBoard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClapperBoard.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClapperBoard;