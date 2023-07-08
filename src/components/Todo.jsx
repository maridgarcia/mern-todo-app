import React from 'react';
import { Link } from "react-router-dom";

const Todo = props => (
        <tr>
            <td className={props.todo.completed ? "completed" : ''}>{props.todo.task}</td>
            <td className={props.todo.completed ? "completed" : ''}>{props.todo.responsible}</td>
            <td className={props.todo.completed ? "completed" : ''}>{props.todo.priority}</td>
            <td>
                <Link to={`/edit/${props.todo._id}`}>✏️</Link>
            </td>
        </tr>
);

export default Todo;