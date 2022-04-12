import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    const botao = document.querySelector('#botao');
    this.setState((anterior, _props) => ({
      numeroDeCliques: anterior.numeroDeCliques + 1
    }))
    botao.className = 'color';
    if (this.state.numeroDeCliques % 2 !== 0 ) {
      botao.className = 'colorGreen';
    } else {
    botao.className = 'color';
    }
  }

  render () {
    return (
      <div>
        <button id='botao' onClick={this.handleClick}>Meu Botão!{this.state.numeroDeCliques}</button>
      </div>
    )
  }

  
}

export default App;
