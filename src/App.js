import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
    state = {
        item: [
            {
                id: 1,
                title: "weak up",
            },
            {
                id: 2,
                title: "work out",
            },
            {
                id: uuidv4(),
                item: "",
                editItem: false,
            },
        ],
    };

    handleChange = (e) => {
        console.log("handle change");
    };
    handleSubmit = (e) => {
        console.log("handle submit");
    };
    handleList = (e) => {
        console.log("clear list");
    };
    handleDelete = (id) => {
        console.log(`handle edit ${id}`);
    };
    handleEdit = (id) => {
        console.log(`handle edit ${id}`);
    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto-8 mt-4">
                            <h3 className="text-capitalize text-center">
                                todo input
                            </h3>
                            <TodoInput
                                item={this.state.item}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                editItem={this.state.editItem}
                            />
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
