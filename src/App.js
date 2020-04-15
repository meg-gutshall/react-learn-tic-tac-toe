import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: [
        '',
        '',
        'O',
        'X',
        '',
        '',
        'X',
        '',
        ''
      ],
    }
  }

  handleClick = (cellIndex) => {
    const cloneBoard = this.state.board.slice()
    cloneBoard[cellIndex] = "X"

    this.setState(() => (
      {
        board: cloneBoard
      }
    ))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">Welcome to Tic-Tac-Toe</header>
        <div id="board">
        { this.state.board.map((cell, index) => (
          <p key={index} className="cell" onClick={() => this.handleClick(index)}>
            {cell}
          </p>
        ))}
        </div>
      </div>
    );
  }

}

export default App;
