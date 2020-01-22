// How might you use a conditional statement inside of a render() function

// task
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component{
  render() {
    if(fiftyFifty == true) {
      return <h1>Tonight I'm going out WOOO</h1>
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>
    }
    
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'))