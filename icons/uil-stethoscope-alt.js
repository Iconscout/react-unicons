import React from 'react';
import PropTypes from 'prop-types';

const UilStethoscopeAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19 8a2.993 2.993 0 0 0-1 5.816V15.5a4.5 4.5 0 0 1-9 0v-1.02l3.124-2.498A4.976 4.976 0 0 0 14 8.078V3a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v4.078a2.986 2.986 0 0 1-1.125 2.342L8 12.72l-2.874-2.3A2.985 2.985 0 0 1 4 8.078V4h1a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v5.078a4.975 4.975 0 0 0 1.876 3.904L7 14.48v1.02a6.5 6.5 0 0 0 13 0v-1.684A2.993 2.993 0 0 0 19 8Zm0 4a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1Z'
  }));
};

UilStethoscopeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilStethoscopeAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilStethoscopeAlt;