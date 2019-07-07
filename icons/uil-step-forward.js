import React from 'react';
import PropTypes from 'prop-types';

const UilStepForward = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.71,7.29A1,1,0,1,0,7.29,8.71L10.59,12l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,0-1.42ZM16,7a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V8A1,1,0,0,0,16,7Z'
  }));
};

UilStepForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilStepForward.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilStepForward;