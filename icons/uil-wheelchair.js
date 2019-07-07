import React from 'react';
import PropTypes from 'prop-types';

const UilWheelchair = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,6.5a2,2,0,1,0-2-2A2,2,0,0,0,12,6.5Zm7.5,14h-1v-5a1,1,0,0,0-1-1h-5v-2h5a1,1,0,0,0,0-2h-5v-2a1,1,0,0,0-2,0v7a1,1,0,0,0,1,1h5v5a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2Zm-6.8-1.6a4,4,0,0,1-7.2-2.4,4,4,0,0,1,2.4-3.66A1,1,0,1,0,7.1,11a6,6,0,1,0,7.2,9.1,1,1,0,0,0-1.6-1.2Z'
  }));
};

UilWheelchair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWheelchair.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWheelchair;