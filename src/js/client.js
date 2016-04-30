import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    // As this is a JavaScript class it can have a constructor method
    constructor() {
        super(); // The first line of a constructor function has to always be super
        this.lastName = "Fitzpatrick";
    }

    // We can create class methods outside of render to keep render clean
    // NB: Notice function is not required as this is a class Method
    getYear() {
        return new Date().getFullYear();
    }

    // Every class of react must have a render method
    render() {
        const name = "Alan";
        return (
            <div>
                <h1>It Working!</h1>
                <h2>Congrats {name} {this.lastName}</h2>
                <h2>Current Year is {this.getYear()}</h2>
                <h2>5 - 2 = {5-2}</h2>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
