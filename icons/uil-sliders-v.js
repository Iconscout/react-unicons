import React from 'react';
import PropTypes from 'prop-types';

const UilSlidersV = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7,6H6V3A1,1,0,0,0,4,3V6H3A1,1,0,0,0,3,8H7A1,1,0,0,0,7,6ZM5,10a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V11A1,1,0,0,0,5,10Zm7,8a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Zm9-8H20V3a1,1,0,0,0-2,0v7H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-2,4a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V15A1,1,0,0,0,19,14Zm-5,0H13V3a1,1,0,0,0-2,0V14H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z'
  }));
};

UilSlidersV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSlidersV.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSlidersV;