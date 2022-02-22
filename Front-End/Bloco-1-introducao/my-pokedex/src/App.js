import React from 'react';
import './App.css';
import pokemons from './Data';
import Data from './Data';
import Pokedex from './Pokedex';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      indexDoPokemon: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if (this.state.indexDoPokemon < 8) {
      this.setState((anterior, _props) => ({
        indexDoPokemon: anterior.indexDoPokemon + 1
      }))
    } else {
      this.setState({
        indexDoPokemon: 0
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'> Pokedex </h1>
        <section className='main'>
          <Pokedex pokemons={Data[this.state.indexDoPokemon]} />
          <button className='btn' onClick={this.handleClick} >Next!</button>
        </section>
       
    </div>
  );
}

}
export default App;
