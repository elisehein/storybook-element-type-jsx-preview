import React from 'react';
import PropTypes from 'prop-types';

export const ComponentWithElementTypeProp = ({ buttonElementType }) => (
  React.createElement(buttonElementType, { label: "A button of the given type" })
);

ComponentWithElementTypeProp.propTypes = {
  buttonElementType: PropTypes.elementType.isRequired
};

export const ComponentWithElementProp = ({ buttonElement }) => buttonElement;

ComponentWithElementProp.propTypes = {
  buttonElement: PropTypes.element.isRequired
};
