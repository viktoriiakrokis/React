// pass toDoList as the first argument to ReactDOM.render()

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);

// exercise
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>someText</li>
    <li>someElseText</li>
    <li>moreText</li>
  </ul>
);

ReactDOM.render( myList, document.getElementById('app')
);

// The Virtual DOM
// that if you render the exact same thing twice in a row, the second render will do nothing
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));