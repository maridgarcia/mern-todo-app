import React, { Component } from "react";
import InputText from "./InputText";
import InputRadio from "./InputRadio";

// import PropTypes from 'prop-types';

export default class CreateTodo extends Component {
  constructor(props) {
    super();

    this.state = {
      task: "",
      responsible: "",
      priority: "",
      completed: false,
    };
  }
  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onChangePriority = ({ target }) => {
    const { value } = target;
    this.setState({ priority: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted!!`);
    console.log(`Todo description: ${this.state.task}`);
    console.log(`Todo responsible: ${this.state.responsible}`);
    console.log(`Todo description: ${this.state.priority}`);
    this.setState({
      task: "",
      responsible: "",
      priority: "",
      completed: false,
    });
  };

  render() {
    const { task, responsible, priority } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New To-do</h3>
        <form onSubmit={this.handleSubmit} className="create">
          <div className="form-group">
            <InputText
              className="form-control w-50"
              value={task}
              name="task"
              label="Task:"
              handleOnChange={this.handleOnChange}
            />
          </div>
          <InputText
            className="form-control w-50"
            value={responsible}
            name="responsible"
            label="Responsible:"
            handleOnChange={this.handleOnChange}
          />

          <div className="form-check form-check-inline">
            <InputRadio
              className="form-check-input"
              name="priorityOptions"
              type="radio"
              id="priorityLow"
              value="Low"
              checked={priority === "Low"}
              handleOnChange={this.onChangePriority}
            />
            <label className="form-check-label" htmlFor="priorityLow">
              Low
            </label>
          </div>

          <div className="form-check form-check-inline">
            <InputRadio
              className="form-check-input"
              name="priorityOptions"
              type="radio"
              id="priorityMedium"
              value="Medium"
              checked={priority === "Medium"}
              handleOnChange={this.onChangePriority}
            />
            <label className="form-check-label" htmlFor="priorityMedium">
              Medium
            </label>
          </div>

          <div className="form-check form-check-inline">
            <InputRadio
              className="form-check-input"
              name="priorityOptions"
              type="radio"
              id="priorityHigh"
              value="High"
              checked={priority === "High"}
              handleOnChange={this.onChangePriority}
            />
            <label className="form-check-label" htmlFor="priorityHigh">
              High
            </label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
