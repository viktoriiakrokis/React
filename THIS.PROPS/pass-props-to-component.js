// You can pass information to a React component by giving that component an attribute:
<MyComponent foo="bar" />

// pass a component the message
<Example message="This is some top secret info." />

// pass information that isn’t a string, then wrap that information in curly braces
<Greeting myInfo={["top", "secret", "lol"]} />
//values that aren’t strings are wrapped in curly braces
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

// task
// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello"/>, document.getElementById('app'));

// task 2
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Viktoriia' />, 
  document.getElementById('app')
);

// one more example how i can use this
return <h1>{ this.props.value * 10 }</h1>