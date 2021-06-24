import React from 'react';
import './cards.styles.css';

class EventButtons extends React.Component {

    constructor (props) {
        super(props);

        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1 () {
        console.log("Button 01", this);
    }
    handleClick2 () {
        console.log("Button 02", this);
    }
    handleClick3 = () => {
        console.log("Button 03", this);
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick1()}>Button 1 - Izvrsi se svaki put kad se renderuje. This postoji</button>
                <button onClick={this.handleClick1}>Button 2 - Izvrsi se na klik. This ne postoji</button>
                <button onClick={this.handleClick2}>Button 3 - Radi zbog binda</button>
                <button onClick={this.handleClick3}>Button 4 - Radi zbog arrow funkcije</button>
            </div>
        )
    }
}

export default EventButtons;