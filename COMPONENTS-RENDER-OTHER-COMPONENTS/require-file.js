// If you want to use a variable that’s declared in a different file, such as NavBar, then you have to import the variable that you want

import { NavBar } from './NavBar.js';

//Notice the differences between the above line of code and this familiar line:

import React from 'react';

//If your filepath doesn’t have a file extension, then “.js” is assumed. So the above example could be shortened:

import { NavBar } from './NavBar';

// task
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar.js';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}