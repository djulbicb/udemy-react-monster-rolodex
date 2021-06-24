import React, {Component} from 'react';
class Test extends React.Component {



    constructor (props) {
        super(props);

        this.state = {
            test : [
                {
                    name : "Bojan",
                    age: 32
                }
            ],
            monsters : []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }

    

     render () {
        return (
            <>
                <p>
                    Username: {this.state.name}
                </p>
                <button onClick={()=> {this.setState({
                    name: "Other name"
                })}}>Change name {4+56}</button>

                {
                    this.state.monsters.map(monster => (
                        <div>{monster.name}</div>
                    ))
                }
            </>
        )
     }
}

export default Test;