import React from 'react';
import PropTypes from 'prop-types';
import * as S from './NewButton.style';

const NewButton = ({ type, color, children, handleClick }) => {
  return (
    <S.Button type={type} color={color} onClick={handleClick}>
      {children}
    </S.Button>
  );
};

NewButton.propTypes = {
  type: PropTypes.oneOf(['Primary', 'Secondary']),
  color: PropTypes.oneOf(['black', 'blue']),
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NewButton;
