// difference of HTML and JSX

// In HTML, it’s common to use class as an attribute name:
<h1 class="big">Hey</h1>

// In JSX, you can’t use the word class! You have to use className instead
<h1 className="big">Hey</h1>

// exercise
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = (
  <div className="big">I AM A BIG DIV</div>
);

ReactDOM.render(myDiv, document.getElementById('app'));

