// Take a look at this JavaScript object named redPanda:
const redPanda = {
  src:  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px'
};

// task
import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
    <div>
      <h1>{owl.title}</h1>
      <img src={owl.src}
           alt={owl.title}/>
    </div>
    )
  }
}

ReactDOM.render(<Owl />, document.getElementById('app'))