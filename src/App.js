import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import CardList from './components/CardList.component';
import React from 'react';
import SearchBar from './components/SearchBar.component';
import EventButtons from './components/EventButtons.component';

class App  extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      monsters: [],
      searchVal : ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users => {
      this.setState({
        monsters: users
      }, ()=> {
        console.log("Callback kad se state izvrsi")
      })
    })
  }

  render () {
    const {monsters, searchVal} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchVal.toLowerCase()));
    return (
      <div className="App">
        <EventButtons></EventButtons>
        <SearchBar placeholder="Call me a monster!!!" handleChange={e=>{this.setState({searchVal: e.target.value})}}></SearchBar>
        <hr></hr>
        <CardList monsters={filteredMonsters} className="card-list">
          <h1>Monster Rolodex</h1>
        </CardList>
      </div>
    )
  }
}

export default App;


//https://jsonplaceholder.typicode.com/users
