import React, {Component} from "react";
import "./App.css"

export default class ClassComponentState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Csaba",
            age: 1,
            array: [1, 2, 3, 4, 5, 6]
        };
    }

    changeStatus = () => {
        this.setState({
            age: this.state.age * 2,
            name: "Sanyi"
        });
    }

    render() {
        return (
            <div className="text-center">
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                {this.state.array.map(item => item * 2)}
                <button onClick={this.changeStatus} className="d-block m-auto">Change State</button>
            </div>
        );
    }
}