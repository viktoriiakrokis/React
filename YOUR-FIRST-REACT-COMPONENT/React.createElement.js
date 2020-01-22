// The following JSX expression
const h1 = <h1>Hello world</h1>;

// can be rewritten without JSX, like this:
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

// exercise
const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div");

// A component is a small, reusable chunk of code that is responsible for one job
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
