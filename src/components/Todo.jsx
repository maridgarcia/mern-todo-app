import React from 'react';
import { Link } from "react-router-dom";

export default class Todo extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     todo: {}
        // }
    }
    render() {
        // const { todo } = this.state;
        return (
        <tr>
            <td className={this.props.todo.completed ? "completed" : ''}>{this.props.todo.task}</td>
            <td className={this.props.todo.completed ? "completed" : ''}>{this.props.todo.responsible}</td>
            <td className={this.props.todo.completed ? "completed" : ''}>{this.props.todo.priority}</td>
            <td>
                {/* <Link to={{pathname: `/update/${this.props.todo._id}`, state: { todo }}}>✏️</Link> */}
                <Link to={`/update/${this.props.todo._id}`}>✏️</Link>
            </td>
        </tr>
        );
    }
}