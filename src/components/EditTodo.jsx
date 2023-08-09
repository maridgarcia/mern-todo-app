import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_description: "",
            todo_responsible: "",
            todo_priority: "",
            todo_completed: false,
        }
    }

    componentDidMount = async () => {
        const id = window.location.href.replace("http://localhost:3000/update/", "");
        await axios.get(`http://localhost:5000/todos/${id}`).then(res =>
            this.setState({
                todo_description: res.data.task,
                todo_responsible: res.data.responsible,
                todo_priority: res.data.priority,
                todo_completed: res.data.completed,
            })
        );
    }

    handleOnChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };
    
    onChangeTodoPriority = ({ target }) => {
        const { value } = target;
        this.setState({ todo_priority: value });
    };
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const id = window.location.href.replace("http://localhost:3000/update/", "");

        const updatedTodo = {
            task: this.state.todo_description,
            responsible: this.state.todo_responsible,
            priority: this.state.todo_priority,
            completed: this.state.todo_completed
        };

        await axios.put(`http://localhost:5000/todos/update/${id}`, updatedTodo).then(res => console.log(res.data));
    };

    handleOnClick = () => {
        window.location.href = 'http://localhost:3000/';
    }

    onChangeTodoCompleted = () => this.setState({ todo_completed: !this.state.todo_completed });

    render() {
        const { todo_description, todo_responsible, todo_priority, todo_completed } = this.state;
        return (
            <div>
                <h3 align="center">Update Task</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                name="todo_description"
                                value={todo_description}
                                onChange={this.handleOnChange}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                name="todo_responsible"
                                value={todo_responsible}
                                onChange={this.handleOnChange}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="todo_priority" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="todo_priority" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="todo_priority" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={todo_completed}
                                value={todo_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" onClick={this.handleOnClick}/>
                    </div>
                </form>
            </div>
        )
    }
}