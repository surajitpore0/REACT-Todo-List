import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoInput extends Component {
    render() {
        return (
            <div>
                <h1>hello from todo item</h1>
                <TodoItem />
            </div>
        );
    }
}
