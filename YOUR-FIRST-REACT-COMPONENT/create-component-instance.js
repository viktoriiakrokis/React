// make a React component
<MyComponentClass />

// exercise
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
<MyComponentClass />

// When you make a new component class, these instructions are the body of your class declaration
class MyComponentClass extends React.Component
{ // everything in between these curly-braces is instructions for how to build components

  render() {
    return <h1>Hello world</h1>;
  }
}