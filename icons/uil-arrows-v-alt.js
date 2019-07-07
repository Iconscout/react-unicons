import React from 'react';
import PropTypes from 'prop-types';

const UilArrowsVAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10.21,6.21l.79-.8V10a1,1,0,0,0,2,0V5.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42Zm3.58,11.58-.79.8V14a1,1,0,0,0-2,0v4.59l-.79-.8a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,0,0-1.42-1.42Z'
  }));
};

UilArrowsVAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowsVAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowsVAlt;