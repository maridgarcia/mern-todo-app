import React, { Component } from "react";
import axios from "axios";
import Todo from './Todo';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = { todos: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos')
            .then(response => {
                this.setState({ todos: response.data })
            }).catch((err) => console.log(err));
    }

    todoList = () => {
        const { todos } = this.state;
        return todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }
    render() {
        return (
           <table className="table">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Responsible</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                { this.todoList() }
            </tbody>
           </table>
        );
    }
}