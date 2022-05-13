import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tag.style';

const Tag = ({ color, children }) => {
  return <S.Tag color={color}>{children}</S.Tag>;
};

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};
Tag.defaultProps = {
  color: '',
};

export default Tag;
