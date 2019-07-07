import React from 'react';
import PropTypes from 'prop-types';

const UilOctagon = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.71,7.57,16.44,2.29A1.05,1.05,0,0,0,15.73,2H8.27a1.05,1.05,0,0,0-.71.29L2.29,7.57a1,1,0,0,0-.29.7v7.46a1,1,0,0,0,.29.7l5.27,5.28a1.05,1.05,0,0,0,.71.29h7.46a1.05,1.05,0,0,0,.71-.29l5.27-5.28a1,1,0,0,0,.29-.7V8.27A1,1,0,0,0,21.71,7.57ZM20,15.31,15.31,20H8.69L4,15.31V8.69L8.69,4h6.62L20,8.69Z'
  }));
};

UilOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilOctagon.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilOctagon;