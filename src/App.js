import React, { Component } from "react";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo"
import EditTodo from "./components/EditTodo"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div> */}
        <Routes>
          <Route exact path="/" element={<TodoList/>}></Route>
          <Route path="/create" exact element={<CreateTodo/>}></Route>
          <Route path="/edit/:id" element={<EditTodo/>}></Route>
        </Routes>
      </Router>
    );
  }
}
export default App;
