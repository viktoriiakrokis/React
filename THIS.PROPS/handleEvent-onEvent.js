// prop name
return <Button talk={this.talk} />;

// if you are listening for a “keyPress” event, then you name your event handler handleKeyPress
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}

// If you are listening for a “keyPress” event, then you name your prop onKeyPress
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }

  render() {
    return <Child onHover={this.handleHover} />;
  }
}

// Talker.js

// The attribute name onClick
// is just a normal attribute name:
<Button onClick={this.handleClick} />

// Button.js

// The attribute name onClick
// creates an event listner:
<button onClick={this.props.onClick}>
  Click me!
</button>