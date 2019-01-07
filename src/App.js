import React, { Component } from 'react';
import Panel from './Panel';
import Header from './Header';


  /* 
    Final App which carries the wrapper.
  */

  class App extends Component {
    state = {
          allBoxes: [
            {
              name: 'one',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'two',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'three',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'four',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'five',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'six',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'seven',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'eight',
              userIcon: false,
              currentValue: null
            },
            {
              name: 'nine',
              userIcon: false,
              currentValue: null
            },
          ],
          restart: null,
          restartClass: null,
          winner: null,
          winningMessage: null,
          winningClass: null,
          checker: false,
              get new() {
                return this.allBoxes.map(a => a.currentValue)
            }
        }


  consoler = () => {
    let logThis = this.state.new;
    // console.log(logThis);
  }

  checkDraw = () => {
        const allEqual = arr => arr.every( v => v === arr[0] )
        allEqual(this.state.new)  // true
  }


  reloadApp = () => {
    window.location.reload();
  }  


  checkWinner = () => {
    let winLines = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6']
    ]

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      let filterMyArray = this.state.new;
      let win = false;
      // console.log(filterMyArray);

       if (filterMyArray[a] && filterMyArray[a] === filterMyArray[b] && filterMyArray[a] === filterMyArray[c]) {
       let winningPlayer = this.state.player === 'X' ? 'O' : 'X';
       // console.log(win)

       // this.setState({
       //    winner: this.state.winner = winningPlayer
       // })

       // console.log('Win');

       this.setState (prevState => ({
          winner: this.state.winner = prevState.player,
          winningMessage: prevState.winningMessage = this.state.winner + ' Won!',
          winningClass: 'winning-div',
          restart: 'Restart',
          restartClass: 'winning-div green'
       }));

       this.setState({
          checker: this.state.checker = true
       })
          

        console.log("checker's value is " + this.state.checker);

        // console.log(this.state.winner);
       
       } else if (this.state.winner !== null) {
        this.setState ( prevState => ({
          winner: prevState.winner = this.state.winner,
          winningMessage: prevState.winningMessage = this.state.winner + ' Won!'
        }));
       } 

    }

if (this.state.new.every(e => e !== null && this.state.checker === false) ) {

          this.setState (prevState => ({
          winningMessage: prevState.winningMessage = "Draw",
          winningClass: 'winning-div',
          restart: 'Restart',
          restartClass: 'winning-div green'
          }));
          console.log('Draw');

       }


  }


  handleAddUserIcon = (index) => {

    if (this.state.allBoxes[index].currentValue === null && this.state.winner === null) {
      let newPlayer = this.state.player === 'X' ? 'O' : 'X';
      let newState = this.state.new;
      newState[index] = newPlayer;

      this.setState ( prevState => ({
        currentValue: prevState.allBoxes[index].currentValue = newPlayer,
        new: newState,
        player: newPlayer,
        userIcon: prevState.allBoxes[index].userIcon = true
      }));
    }

    this.checkWinner();


  }




  render () {
    return (
      
        <div className="container">

          <Header 
            title="Tic Tac Toe"
            desc="This is a small react app in which you could play Tic Tac Toe with a friend."
            winningMessage={this.state.winningMessage}
            winningClass={this.state.winningClass}
            restart={this.state.restart}
            restartClass={this.state.restartClass}
            restartOnClick={this.reloadApp}
          /> 

          <Panel 
            allBoxes={this.state.allBoxes}
            addUserBoolean={this.handleUserTrue}
            addUserIcon={this.handleAddUserIcon}
          />

        <div>
          {this.consoler()}
        </div>


        </div>

    );   
  }
}





export default App;
