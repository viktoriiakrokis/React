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