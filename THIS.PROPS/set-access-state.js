class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}


{
  mood:   'great',
  hungry: false
}
this.setState({ hungry: true });

// task
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }
	
  render() {
    return (
      <h1>
      {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))