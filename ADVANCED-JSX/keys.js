// When you make a list in JSX, sometimes your list will need to include something called keys
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

// If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order

// exercise
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  people.map((person, i) =><li key={'person_' + i}>{person}</li>);
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));