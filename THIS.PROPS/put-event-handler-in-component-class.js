/* The onDoubleClick event handler is similar to onClick, but triggers when there is a double click, or two clicks in quick succession.
-onDrag is another event handler used when an element or text selection is being dragged on a page.
-onInput is used for when the values of input elements have been altered.
-The onKeyDown event handler occurs when the user presses any keyboard key.
-The onSubmit event handler triggers when a form has been submitted. */

// task
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

function talk () {
	let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}

class Talker extends React.Component {
  talk () {
	let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  return alert(speech);
}
  
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

