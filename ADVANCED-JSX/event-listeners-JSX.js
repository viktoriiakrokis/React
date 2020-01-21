// create an event listener by giving a JSX element a special attribute
// name should be something like onClick or onMouseOver 
<img onClick={myFunc} />

// An event listener attribute’s value should be a function
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />

// exercise
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
alt="kitty" 
onClick={makeDoggy} />