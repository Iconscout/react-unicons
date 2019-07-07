import React from 'react';
import PropTypes from 'prop-types';

const UilArrowsMerge = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10.71,11.29l-2.5-2.5a1,1,0,1,0-1.42,1.42l.8.79H4V7A1,1,0,0,0,2,7V17a1,1,0,0,0,2,0V13H7.59l-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2.5-2.5a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,10.71,11.29ZM21,6a1,1,0,0,0-1,1v4H16.41l.8-.79a1,1,0,0,0-1.42-1.42l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2.5,2.5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.8-.79H20v4a1,1,0,0,0,2,0V7A1,1,0,0,0,21,6Z'
  }));
};

UilArrowsMerge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowsMerge.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowsMerge;