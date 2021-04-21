import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const CPFMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

function CPFInput(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={CPFMask}
      guide={false}
    />
  );
}

CPFInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export { CPFMask, CPFInput };
