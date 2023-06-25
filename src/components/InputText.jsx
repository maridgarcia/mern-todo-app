import React, { Component } from "react";

export default class Input extends Component {
    render() {
        const { label, name, task, handleOnChange, className } = this.props;
        return (
          <div className="form-group">
          <label htmlFor="task">{ label } </label>
            <input
              name={ name }
              type="text"
              value={ task }
              onChange={ handleOnChange }
              className={ className }
              />
          </div>
        );
      }
}