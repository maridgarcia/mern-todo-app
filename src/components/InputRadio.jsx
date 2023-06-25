import React, { Component } from "react";

export default class InputRadio extends Component {
    render() {
        const { name, className, type, value, checked, id, handleOnChange } = this.props;
        return (
            <input
              className={ className }
              name={ name }
              type= { type }
              value={ value }
              checked={ checked }
              id={ id }
              onChange={ handleOnChange }
            />
        );
      }
}