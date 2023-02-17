import React from 'react';
import PropTypes from 'prop-types';

const UilHeadSideCough = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M4.293 20.293a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0Zm-3-3a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0Zm4-1a1 1 0 1 0 1.414 0 1 1 0 0 0-1.414 0ZM16.15 2.002a7.067 7.067 0 0 0-7.284 7.063v.016l-1.77 3.758A1 1 0 0 0 8 14.267h.866v1.8A1.935 1.935 0 0 0 10.8 18h.867v1.8a1 1 0 0 0 2 0v-1.814A.994.994 0 0 0 13.6 16l-.833.02a.94.94 0 0 0-.1-.02.94.94 0 0 0-.128.026l-1.673.04v-2.8a1 1 0 0 0-1-1h-.289l1.205-2.558a.99.99 0 0 0 .095-.468l-.01-.174a5.025 5.025 0 0 1 1.537-3.635 5.092 5.092 0 0 1 3.686-1.429A5.239 5.239 0 0 1 21 9.322l-1.833 6.987a1.008 1.008 0 0 0 .006.533l.932 3.235a1 1 0 0 0 .961.723 1.017 1.017 0 0 0 .278-.04 1 1 0 0 0 .683-1.237l-.856-2.97 1.796-6.763A1.031 1.031 0 0 0 23 9.533v-.212a7.252 7.252 0 0 0-6.85-7.318Z'
  }));
};

UilHeadSideCough.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHeadSideCough.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHeadSideCough;