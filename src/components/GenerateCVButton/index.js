import React from 'react';
import { PropTypes as PT } from 'prop-types';
import buttonTypes from 'Constants';
import { Button } from 'Common';
import container from './container';

const GenerateButton = ({ disabled, handleClick }) => {
  return (
    <Button
      value="Generate CV"
      disabled={disabled}
      type={buttonTypes.submit}
      handleClick={handleClick}
    />
  );
};

export default container(GenerateButton);

GenerateButton.propTypes = {
  disabled: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
};
