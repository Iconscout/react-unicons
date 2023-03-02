import React from 'react';
import PropTypes from 'prop-types';

const UilHouseUser = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'm21.664 10.252-9-8a.999.999 0 0 0-1.328 0l-9 8a1 1 0 0 0 1.328 1.496L4 11.449V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.551l.336.299a1 1 0 0 0 1.328-1.496ZM9.184 20a2.982 2.982 0 0 1 5.632 0Zm1.316-5.5A1.5 1.5 0 1 1 12 16a1.502 1.502 0 0 1-1.5-1.5ZM18 20h-1.101a5 5 0 0 0-2.259-3.228 3.468 3.468 0 0 0 .86-2.272 3.5 3.5 0 0 0-7 0 3.468 3.468 0 0 0 .86 2.272A5 5 0 0 0 7.1 20H6V9.671l6-5.333 6 5.333Z'
  }));
};

UilHouseUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHouseUser.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHouseUser;