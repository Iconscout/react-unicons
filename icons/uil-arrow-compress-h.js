import React from 'react';
import PropTypes from 'prop-types';

const UilArrowCompressH = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,5a1,1,0,0,0-1,1V18a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Zm-1.29,6.29-2.5-2.5a1,1,0,1,0-1.42,1.42l.8.79H3a1,1,0,0,0,0,2H7.59l-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2.5-2.5a1,1,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,10.71,11.29ZM21,11H16.41l.8-.79a1,1,0,0,0-1.42-1.42l-2.5,2.5a1,1,0,0,0,0,1.42l2.5,2.5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.8-.79H21a1,1,0,0,0,0-2Z'
  }));
};

UilArrowCompressH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowCompressH.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowCompressH;