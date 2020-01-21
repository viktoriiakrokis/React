// If you want to create a list of JSX elements, then .map() is often your best bet
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

// JSX <li>s don’t have to be in an array like this, but they can be
// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

// const liArray = [
//   <li>item 1</li>, 
//   <li>item 2<li>, 
//   <li>item 3</li>
// ];

// <ul>{liArray}</ul>

// exercise

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  people.map(person =><li>{person}</li>);
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));