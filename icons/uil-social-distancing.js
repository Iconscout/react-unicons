import React from 'react';
import PropTypes from 'prop-types';

const UilSocialDistancing = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.5 17H5.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1.004 1.004 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.914 19H8.5a1 1 0 0 0 0-2Zm12.707.293-2-2a1 1 0 0 0-1.414 1.414l.293.293H15.5a1 1 0 0 0 0 2h2.586l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1.004 1.004 0 0 0 0-1.414Zm-.567-7.521A3.468 3.468 0 0 0 21.5 7.5a3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A4.988 4.988 0 0 0 13 14a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.988 4.988 0 0 0-2.36-4.228ZM18 9a1.5 1.5 0 1 1 1.5-1.5A1.502 1.502 0 0 1 18 9Zm-9.36.772A3.468 3.468 0 0 0 9.5 7.5a3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A4.988 4.988 0 0 0 1 14a1 1 0 0 0 2 0 3 3 0 0 1 6 0 1 1 0 0 0 2 0 4.988 4.988 0 0 0-2.36-4.228ZM6 9a1.5 1.5 0 1 1 1.5-1.5A1.502 1.502 0 0 1 6 9Z'
  }));
};

UilSocialDistancing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSocialDistancing.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSocialDistancing;