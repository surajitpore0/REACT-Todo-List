import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";

import TodoList from "./components/TodoList";

export default class App extends Component {
    render() {
        return (
            <div>
                <h1 className="text-uppercase">Todo List</h1>
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}
