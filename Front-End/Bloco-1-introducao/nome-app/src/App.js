
    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

    class App extends React.Component {
      render() {
        return (
          <div>
            <h1>Hello Word!</h1>
            <p>Este é o primeiro projeto React.</p>
            <p>Minha lista de tarefas:</p>
            <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
          </div>
        );
      }
    }

    export default App;