// form of a class declaration body

class ComponentFactory extends React.Component {
  // instructions go here, between the curly braces
}

// The term “render method” can refer to the entire property, or to just the function part.
class ComponentFactory extends React.Component {
  render() {}
}

// exercise
import React from 'react';
import ReactDOM from 'react-dom'

class MyComponentClass extends React.Component {
   render() {
  return <h1>Hello world</h1>;
    
  }
}