import React from 'react';
import PropTypes from 'prop-types';

const UilArrowFromTop = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15.29,16.29,13,18.59V7a1,1,0,0,0-2,0V18.59l-2.29-2.3a1,1,0,1,0-1.42,1.42l4,4a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42ZM19,2H5A1,1,0,0,0,5,4H19a1,1,0,0,0,0-2Z'
  }));
};

UilArrowFromTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowFromTop.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowFromTop;