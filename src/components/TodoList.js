import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class Todolist extends Component {
    render() {
        return (
            <div>
                <h1>hello form to do list</h1>
                <TodoItem />
            </div>
        );
    }
}
