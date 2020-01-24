// Example 1 this.props.children would equal the text, “I am a child of BigButton.”
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2  would equal a <LilButton /> component
<BigButton>
  <LilButton />
</BigButton>


// Example 3  this.props.children would equal undefined
<BigButton />

// task 1
import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

//  It would be better if Button could display a default message instead
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Example.defaultProps;

// The defaultProps property should be equal to an object
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// Set defaultProps equal to an object:
Example.defaultProps = {};

//Inside of this object, write properties for any default props that you’d like to set:
Example.defaultProps = { text: 'yo' }; 

// task 
// defaultProps goes here:
Button.defaultProps = {text: 'I am a button'}

ReactDOM.render(
  <Button text="" />, 
  document.getElementById('app')
);