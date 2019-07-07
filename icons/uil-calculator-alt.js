import React from 'react';
import PropTypes from 'prop-types';

const UilCalculatorAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5.5,8H6v.5a1,1,0,0,0,2,0V8h.5a1,1,0,0,0,0-2H8V5.5a1,1,0,0,0-2,0V6H5.5a1,1,0,0,0,0,2ZM4.88,19.12a1,1,0,0,0,1.41,0L7,18.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L8.41,17l.71-.71a1,1,0,0,0-1.41-1.41L7,15.59l-.71-.71a1,1,0,0,0-1.41,1.41l.71.71-.71.71A1,1,0,0,0,4.88,19.12ZM20,1H4A3,3,0,0,0,1,4V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1ZM11,21H4a1,1,0,0,1-1-1V13h8Zm0-10H3V4A1,1,0,0,1,4,3h7Zm10,9a1,1,0,0,1-1,1H13V13h8Zm0-9H13V3h7a1,1,0,0,1,1,1Zm-5.5,5.5h3a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2ZM18.5,6h-3a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm-3,13.5h3a1,1,0,0,0,0-2h-3a1,1,0,0,0,0,2Z'
  }));
};

UilCalculatorAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCalculatorAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCalculatorAlt;