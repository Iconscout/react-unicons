import React from 'react';
import PropTypes from 'prop-types';

const UilKid = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10,10a1,1,0,1,0-1,1A1,1,0,0,0,10,10Zm4.5,4.06a1,1,0,0,0-1.37.36,1.3,1.3,0,0,1-2.26,0,1,1,0,0,0-1.37-.36,1,1,0,0,0-.37,1.36,3.31,3.31,0,0,0,5.74,0A1,1,0,0,0,14.5,14.06ZM15,9a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18A8,8,0,0,1,9,4.57,3,3,0,0,0,9,5a3,3,0,0,0,3,3,1,1,0,0,0,0-2,1,1,0,0,1,0-2,8,8,0,0,1,0,16Z'
  }));
};

UilKid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilKid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilKid;