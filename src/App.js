import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/searchBox/search-box.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
  }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMmonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
    <div className="App">
      <h1>Kitten Rolodex</h1>
      <SearchBox 
        placeholder='search kittten name'
        handleChange={this.handleChange}
        />
      <CardList monsters={filteredMmonsters}/>
    </div>
    )
  }
}

export default App;
