import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div>
        <Route exact path="/" element={TodoList}></Route>
        <Route path="/create" element={CreateTodo}></Route>
        <Route path="/edit/:id" element={EditTodo}></Route>
      </Router>
    );
  }
}
export default App;
